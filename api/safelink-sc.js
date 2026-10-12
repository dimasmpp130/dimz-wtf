
const { resolver } = require("@coflyn/scrapr");

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

module.exports = async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({
      status: false,
      message: "Gunakan metode POST."
    });
  }

  try {
    const { url } = req.body || {};

    if (typeof url !== "string" || !url.trim()) {
      return res.status(400).json({
        status: false,
        message: "Masukkan URL Safelinku terlebih dahulu."
      });
    }

    if (url.length > 2048) {
      return res.status(400).json({
        status: false,
        message: "URL terlalu panjang."
      });
    }

    let parsed;

    try {
      parsed = new URL(url.trim());
    } catch {
      return res.status(400).json({
        status: false,
        message: "Format URL tidak valid."
      });
    }

    if (
      !["https:", "http:"].includes(parsed.protocol) ||
      parsed.username ||
      parsed.password ||
      !ALLOWED_HOSTS.has(parsed.hostname.toLowerCase())
    ) {
      return res.status(400).json({
        status: false,
        message: "Domain tidak didukung. Gunakan link Safelinku."
      });
    }

    const result = await resolver.safelinku(parsed.href);

    if (!result || !result.status || !result.result?.url) {
      return res.status(422).json({
        status: false,
        message:
          result?.message ||
          "URL tujuan tidak ditemukan. Link mungkin sudah kedaluwarsa atau resolver sedang bermasalah."
      });
    }

    let destination;

    try {
      destination = new URL(result.result.url);
    } catch {
      return res.status(502).json({
        status: false,
        message: "Resolver menghasilkan URL yang tidak valid."
      });
    }

    if (!["https:", "http:"].includes(destination.protocol)) {
      return res.status(502).json({
        status: false,
        message: "Protokol URL tujuan tidak didukung."
      });
    }

    return res.status(200).json({
      status: true,
      originalUrl: parsed.href,
      result: {
        title: result.result.title || "Safelinku Destination Link",
        url: destination.href
      }
    });
  } catch (error) {
    console.error("Safelinku resolver error:", error.message);

    return res.status(500).json({
      status: false,
      message:
        "Resolver gagal memproses link. Coba lagi nanti atau periksa apakah layanan Safelinku sedang berubah."
    });
  }
};
