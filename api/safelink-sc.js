
const axios = require("axios");

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

function decodeDestination(input) {
  try {
    const parsed = new URL(input);

    for (const key of ["url", "link", "target", "go", "u", "dest"]) {
      const value = parsed.searchParams.get(key);
      if (!value) continue;

      if (/^https?:\/\//i.test(value)) return value;

      try {
        const decoded = Buffer.from(value, "base64").toString("utf8");
        if (/^https?:\/\//i.test(decoded)) return decoded;
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
    if (!match || !match[1]) continue;

    try {
      const destination = new URL(
        match[1].replace(/&amp;/g, "&").replace(/\\\//g, "/").trim(),
        baseUrl
      );

      if (["http:", "https:"].includes(destination.protocol)) {
        return destination.href;
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

    const response = await axios.get(currentUrl, {
      timeout: 12000,
      maxRedirects: 5,
      responseType: "text",
      validateStatus: status => status >= 200 && status < 400,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124.0.0.0 Safari/537.36",
        Accept: "text/html,application/xhtml+xml,*/*;q=0.8"
      }
    });

    const finalUrl =
      response.request?.res?.responseUrl || currentUrl;

    const html =
      typeof response.data === "string" ? response.data : "";

    const destination = extractRedirect(html, finalUrl);

    if (destination && destination !== finalUrl) {
      currentUrl = destination;

      const parsedDestination = new URL(currentUrl);

      if (!["http:", "https:"].includes(parsedDestination.protocol)) {
        throw new Error("Protokol URL tujuan tidak didukung.");
      }

      if (decodeDestination(currentUrl)) {
        return {
          status: true,
          result: {
            title: "Safelinku Destination Link",
            originalUrl: input,
            destinationUrl: currentUrl,
            url: currentUrl
          }
        };
      }

      continue;
    }

    if (finalUrl !== input) {
      return {
        status: true,
        result: {
          title: "Destination Link",
          originalUrl: input,
          destinationUrl: finalUrl,
          url: finalUrl
        }
      };
    }

    throw new Error(
      "URL tujuan tidak ditemukan. Situs mungkin memerlukan verifikasi tambahan."
    );
  }

  throw new Error("Batas redirect tercapai.");
}

module.exports = async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("Access-Control-Allow-Origin", "https://dimz-wtf.web.id");
  res.setHeader("Vary", "Origin");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST, OPTIONS");

    return res.status(405).json({
      status: false,
      message: "Gunakan metode POST."
    });
  }

  try {
    const url =
      typeof req.body?.url === "string" ? req.body.url.trim() : "";

    if (!url || url.length > 2048) {
      return res.status(400).json({
        status: false,
        message: "Masukkan URL yang valid."
      });
    }

    let parsed;

    try {
      parsed = new URL(url);
    } catch {
      return res.status(400).json({
        status: false,
        message: "Format URL tidak valid."
      });
    }

    if (
      !["http:", "https:"].includes(parsed.protocol) ||
      parsed.username ||
      parsed.password ||
      !ALLOWED_HOSTS.has(parsed.hostname.toLowerCase())
    ) {
      return res.status(400).json({
        status: false,
        message: "Domain Safelinku tidak didukung."
      });
    }

    const result = await resolveSafelinku(parsed.href);

    return res.status(200).json(result);
  } catch (error) {
    console.error("Resolver error:", {
      message: error.message,
      status: error.response?.status || null
    });

    return res.status(422).json({
      status: false,
      message:
        error.response?.status === 403
          ? "Situs sumber menolak permintaan resolver."
          : error.message || "Gagal memproses URL."
    });
  }
};
