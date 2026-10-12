
const { resolver } = require("@coflyn/scrapr");

const METHODS = {
  mediafire: resolver.mediafire,
  sub2unlock: resolver.sub2unlock,
  rekonise: resolver.rekonise,
  safelinku: resolver.safelinku,
  unshorten: resolver.unshorten
};

function send(res, status, data) {
  return res.status(status).json(data);
}

function parseHttpUrl(value) {
  if (typeof value !== "string" || value.length > 2048) {
    return null;
  }

  try {
    const url = new URL(value.trim());

    if (
      !["http:", "https:"].includes(url.protocol) ||
      !url.hostname ||
      url.username ||
      url.password
    ) {
      return null;
    }

    return url;
  } catch {
    return null;
  }
}

function extractUrl(data) {
  if (typeof data === "string") {
    return data;
  }

  if (!data || typeof data !== "object") {
    return null;
  }

  const candidates = [
    data.result?.url,
    data.result?.link,
    data.result?.download,
    data.url,
    data.link
  ];

  return candidates.find(
    value => typeof value === "string" && value.trim()
  ) || null;
}

module.exports = async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");

    return send(res, 405, {
      status: false,
      message: "Gunakan metode POST."
    });
  }

  const body = req.body || {};
  const inputUrl = parseHttpUrl(body.url);
  const requestedService = body.service;

  if (!inputUrl) {
    return send(res, 400, {
      status: false,
      message: "URL HTTP/HTTPS tidak valid."
    });
  }

  if (
    typeof requestedService !== "string" ||
    !Object.prototype.hasOwnProperty.call(
      METHODS,
      requestedService
    )
  ) {
    return send(res, 400, {
      status: false,
      message: "Jenis resolver tidak dikenal."
    });
  }

  /*
   * Basic hostname protection.
   * This is not a complete SSRF defense.
   */
  const host = inputUrl.hostname.toLowerCase();

  const blockedHost =
    host === "localhost" ||
    host.endsWith(".localhost") ||
    host.endsWith(".local") ||
    host === "::1" ||
    host === "0.0.0.0" ||
    /^127\./.test(host) ||
    /^10\./.test(host) ||
    /^192\.168\./.test(host) ||
    /^169\.254\./.test(host) ||
    /^172\.(1[6-9]|2\d|3[01])\./.test(host);

  if (blockedHost) {
    return send(res, 400, {
      status: false,
      message: "Alamat lokal atau privat tidak diizinkan."
    });
  }

  try {
    const resolverFunction = METHODS[requestedService];

    if (typeof resolverFunction !== "function") {
      return send(res, 500, {
        status: false,
        message: "Resolver tidak tersedia."
      });
    }

    const output = await resolverFunction(inputUrl.href);
    const extracted = extractUrl(output);

    if (!extracted) {
      console.error("[resolver] No destination returned", {
        service: requestedService,
        inputHost: host,
        outputType: typeof output,
        outputKeys:
          output && typeof output === "object"
            ? Object.keys(output)
            : []
      });

      return send(res, 422, {
        status: false,
        message:
          "Resolver tidak menemukan URL tujuan. " +
          "Periksa dukungan layanan dan Vercel Logs."
      });
    }

    const destination = parseHttpUrl(extracted);

    if (!destination) {
      console.error("[resolver] Invalid destination", {
        service: requestedService,
        inputHost: host
      });

      return send(res, 422, {
        status: false,
        message: "Resolver menghasilkan URL yang tidak valid."
      });
    }

    return send(res, 200, {
      status: true,
      service: requestedService,
      result: {
        url: destination.href
      }
    });
  } catch (error) {
    console.error("[resolver] Execution failed", {
      service: requestedService,
      inputHost: host,
      error: error?.message || String(error)
    });

    return send(res, 502, {
      status: false,
      message:
        "Resolver gagal memproses tautan. " +
        "Periksa Vercel Logs dan coba lagi."
    });
  }
};
