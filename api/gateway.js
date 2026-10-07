export default async function handler(req, res) {
  try {
    if (req.method !== "GET") {
      res.setHeader("Allow", "GET");
      return res.status(405).json({
        success: false,
        message: "Method Not Allowed"
      });
    }

    const { url } = req.query;

    if (!url || typeof url !== "string") {
      return res.status(400).json({
        success: false,
        message: "Parameter url wajib diisi."
      });
    }

    let target;

    try {
      target = new URL(url);
    } catch {
      return res.status(400).json({
        success: false,
        message: "URL tidak valid."
      });
    }

    if (!["http:", "https:"].includes(target.protocol)) {
      return res.status(400).json({
        success: false,
        message: "Protocol URL tidak diizinkan."
      });
    }

    const allowedHosts = (process.env.ALLOWED_PROXY_HOSTS || "")
      .split(",")
      .map(host => host.trim().toLowerCase())
      .filter(Boolean);

    if (!allowedHosts.length) {
      return res.status(500).json({
        success: false,
        message: "ALLOWED_PROXY_HOSTS belum dikonfigurasi di Vercel."
      });
    }

    const hostname = target.hostname.toLowerCase();

    const allowed = allowedHosts.some(host => {
      return hostname === host || hostname.endsWith("." + host);
    });

    if (!allowed) {
      return res.status(403).json({
        success: false,
        message: "Hostname file tidak diizinkan."
      });
    }

    const response = await fetch(target.toString(), {
      method: "GET",
      redirect: "follow",
      headers: {
        "User-Agent": "Mozilla/5.0"
      }
    });

    if (!response.ok) {
      return res.status(response.status).json({
        success: false,
        message: `Gagal mengambil file. Status: ${response.status}`
      });
    }

    const contentType =
      response.headers.get("content-type") ||
      "application/octet-stream";

    const contentLength = response.headers.get("content-length");

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Range"
    );

    res.setHeader("Content-Type", contentType);

    if (contentLength) {
      res.setHeader("Content-Length", contentLength);
    }

    res.setHeader(
      "Content-Disposition",
      "inline"
    );

    res.setHeader(
      "Cache-Control",
      "public, max-age=3600, s-maxage=3600"
    );

    if (contentType.startsWith("image/") ||
        contentType.startsWith("video/")) {
      res.setHeader("X-Content-Type-Options", "nosniff");
    }

    const buffer = Buffer.from(await response.arrayBuffer());

    return res.status(200).send(buffer);

  } catch (error) {
    console.error("Proxy error:", error);

    return res.status(500).json({
      success: false,
      message: "Terjadi kesalahan saat mengambil file."
    });
  }
}