
const axios = require("axios");

const ALLOWED_ORIGINS = new Set([
  "https://dimz-wtf.web.id",
  "https://www.dimz-wtf.web.id"
]);

const ALLOWED_HOSTS = new Set([
  "sfl.gl",
  "www.sfl.gl",
  "safelinku.com",
  "www.safelinku.com",
  "linku.to",
  "www.linku.to",
  "lokerwfh.net",
  "www.lokerwfh.net"
]);

const DEFAULT_UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";

function sendError(res, status, message) {
  return res.status(status).json({
    status: false,
    message
  });
}

function validateHttpUrl(value) {
  try {
    const url = new URL(value);

    if (!["http:", "https:"].includes(url.protocol)) return null;
    if (url.username || url.password) return null;

    return url;
  } catch {
    return null;
  }
}

function decodeDestination(input) {
  try {
    const parsed = new URL(input);

    for (const key of ["url", "link", "target", "go", "u", "dest"]) {
      const value = parsed.searchParams.get(key);
      if (!value) continue;

      const direct = validateHttpUrl(value);
      if (direct) return direct.href;

      try {
        const decoded = Buffer.from(value, "base64").toString("utf8");
        const destination = validateHttpUrl(decoded);
        if (destination) return destination.href;
      } catch {}
    }
  } catch {}

  return null;
}

function extractRedirect(html, baseUrl) {
  if (typeof html !== "string") return null;

  const patterns = [
    /<meta[^>]+http-equiv=["']?refresh["']?[^>]+content=["'][^"']*url\s*=\s*([^"']+)["']/i,
    /window\.location(?:\.href)?\s*=\s*["']([^"']+)["']/i,
    /window\.location\.replace\(["']([^"']+)["']\)/i,
    /location\.href\s*=\s*["']([^"']+)["']/i
  ];

  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (!match?.[1]) continue;

    try {
      const target = new URL(
        match[1].replace(/&amp;/g, "&").replace(/\\\//g, "/").trim(),
        baseUrl
      );

      if (["http:", "https:"].includes(target.protocol)) {
        return target.href;
      }
    } catch {}
  }

  return null;
}

async function resolveSafelinku(input) {
  const decoded = decodeDestination(input);

  if (decoded) {
    return {
      status: true,
      result: {
        title: "Safelinku Destination Link",
        originalUrl: input,
        destinationUrl: decoded,
        url: decoded
      }
    };
  }

  let currentUrl = input;
  const visited = new Set();

  for (let i = 0; i < 6; i++) {
    if (visited.has(currentUrl)) {
      throw new Error("Redirect berulang terdeteksi.");
    }

    visited.add(currentUrl);

    let response;

    try {
      response = await axios.get(currentUrl, {
        timeout: 12000,
        maxRedirects: 5,
        responseType: "text",
        validateStatus: status => status >= 200 && status < 400,
        headers: {
          "User-Agent": DEFAULT_UA,
          "Accept": "text/html,application/xhtml+xml,*/*;q=0.8"
        }
      });
    } catch (error) {
      const status = error.response?.status;

      if (status === 403) {
        throw new Error(
          "Situs sumber menolak request server (HTTP 403). CORS bukan penyebabnya."
        );
      }

      if (status) {
        throw new Error(`Situs sumber mengembalikan HTTP ${status}.`);
      }

      throw new Error(
        "Tidak dapat menghubungi situs sumber. Periksa koneksi atau timeout."
      );
    }

    const finalUrl = response.request?.res?.responseUrl || currentUrl;
    const html = typeof response.data === "string" ? response.data : "";
    const destination = extractRedirect(html, finalUrl);

    if (destination && destination !== finalUrl) {
      const target = validateHttpUrl(destination);

      if (!target) {
        throw new Error("URL tujuan tidak valid.");
      }

      currentUrl = target.href;

      if (decodeDestination(currentUrl)) {
        const decodedTarget = decodeDestination(currentUrl);

        return {
          status: true,
          result: {
            title: "Safelinku Destination Link",
            originalUrl: input,
            destinationUrl: decodedTarget,
            url: decodedTarget
          }
        };
      }

      continue;
    }

    if (finalUrl !== input) {
      const target = validateHttpUrl(finalUrl);

      if (!target) {
        throw new Error("URL redirect tidak valid.");
      }

      return {
        status: true,
        result: {
          title: "Destination Link",
          originalUrl: input,
          destinationUrl: target.href,
          url: target.href
        }
      };
    }

    throw new Error(
      "URL tujuan tidak ditemukan. Link mungkin memerlukan API, sesi, atau verifikasi tambahan."
    );
  }

  throw new Error("Batas redirect tercapai.");
}

module.exports = async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  const origin = req.headers.origin;

  if (origin && ALLOWED_ORIGINS.has(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Vary", "Origin");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  }

  if (req.method === "OPTIONS") {
    if (origin && !ALLOWED_ORIGINS.has(origin)) {
      return res.status(403).end();
    }

    return res.status(204).end();
  }

  if (origin && !ALLOWED_ORIGINS.has(origin)) {
    return sendError(res, 403, "Origin tidak diizinkan.");
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST, OPTIONS");
    return sendError(res, 405, "Gunakan metode POST.");
  }

  try {
    let body = req.body;

    if (typeof body === "string") {
      try {
        body = JSON.parse(body);
      } catch {
        return sendError(res, 400, "Body JSON tidak valid.");
      }
    }

    const input =
      typeof body?.url === "string" ? body.url.trim() : "";

    if (!input || input.length > 2048) {
      return sendError(res, 400, "Masukkan URL dengan panjang yang valid.");
    }

    const parsed = validateHttpUrl(input);

    if (!parsed) {
      return sendError(res, 400, "Format URL tidak valid.");
    }

    if (!ALLOWED_HOSTS.has(parsed.hostname.toLowerCase())) {
      return sendError(res, 400, "Domain Safelinku tidak didukung.");
    }

    const result = await resolveSafelinku(parsed.href);

    return res.status(200).json(result);
  } catch (error) {
    console.error("Safelinku resolver error:", {
      message: error.message
    });

    return sendError(
      res,
      422,
      error.message || "Gagal memproses URL."
    );
  }
};
