export default async function handler(req, res) {
  try {
    if (req.method === "OPTIONS") {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type");
      return res.status(204).end();
    }

    if (req.method !== "GET") {
      res.setHeader("Allow", "GET, OPTIONS");
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

    const allowedHosts = [
      "secure-signed.pages.dev",
      "cdn.alyachan.online"
    ];

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

    const contentTypeHeader = response.headers.get("content-type") || "";

    const cleanContentType = contentTypeHeader
      .split(";")[0]
      .trim()
      .toLowerCase();

    let extension = "bin";

    const mimeExtensions = {
      "image/jpeg": "jpg",
      "image/jpg": "jpg",
      "image/png": "png",
      "image/webp": "webp",
      "image/gif": "gif",
      "image/avif": "avif",
      "image/bmp": "bmp",
      "video/mp4": "mp4",
      "video/webm": "webm",
      "video/quicktime": "mov",
      "video/x-matroska": "mkv"
    };

    if (mimeExtensions[cleanContentType]) {
      extension = mimeExtensions[cleanContentType];
    } else {
      const pathExtension = target.pathname
        .split(".")
        .pop()
        .toLowerCase();

      if (
        pathExtension &&
        /^[a-z0-9]{2,5}$/.test(pathExtension)
      ) {
        extension = pathExtension;
      }
    }

    let filename = `dimz-result.${extension}`;

    if (cleanContentType.startsWith("image/")) {
      filename = `brat-${Date.now()}.${extension}`;
    }

    if (cleanContentType.startsWith("video/")) {
      filename = `brat-video-${Date.now()}.${extension}`;
    }

    const contentLength = response.headers.get("content-length");

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type"
    );

    res.setHeader(
      "Access-Control-Expose-Headers",
      "Content-Type, Content-Length, Content-Disposition"
    );

    res.setHeader(
      "Content-Type",
      cleanContentType || "application/octet-stream"
    );

    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${filename}"`
    );

    if (contentLength) {
      res.setHeader("Content-Length", contentLength);
    }

    res.setHeader(
      "Cache-Control",
      "private, no-store, max-age=0"
    );

    res.setHeader(
      "X-Content-Type-Options",
      "nosniff"
    );

    const buffer = Buffer.from(
      await response.arrayBuffer()
    );

    return res.status(200).send(buffer);

  } catch (error) {
    console.error("Gateway error:", error);

    return res.status(500).json({
      success: false,
      message: "Terjadi kesalahan pada gateway.",
      error: error?.message || "Unknown error"
    });
  }
}
