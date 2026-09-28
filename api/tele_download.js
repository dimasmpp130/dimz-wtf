export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "GET") {
    return res.status(405).json({
      status: false,
      message: "Method not allowed"
    });
  }

  try {
    const {
      download,
      url,
      platform,
      ...query
    } = req.query;

    if (download !== "1" || !url) {
      return res.status(400).json({
        status: false,
        message: "Parameter download=1 dan url wajib diisi"
      });
    }

    let fileUrl;

    try {
      fileUrl = new URL(String(url));
    } catch {
      return res.status(400).json({
        status: false,
        message: "URL file tidak valid"
      });
    }

    if (fileUrl.protocol !== "https:") {
      return res.status(400).json({
        status: false,
        message: "URL harus menggunakan HTTPS"
      });
    }

    const allowedHosts = [
      "cdn.alyachan.online"
    ];

    if (!allowedHosts.includes(fileUrl.hostname)) {
      return res.status(403).json({
        status: false,
        message: "Host file tidak diizinkan"
      });
    }

    const response = await fetch(fileUrl.toString(), {
      method: "GET",
      headers: {
        Accept: "*/*"
      },
      cache: "no-store"
    });

    if (!response.ok) {
      return res.status(response.status).json({
        status: false,
        message: "Gagal mengambil file"
      });
    }

    const contentType =
      response.headers.get("content-type") ||
      "application/octet-stream";

    const buffer = Buffer.from(
      await response.arrayBuffer()
    );

    if (!buffer.length) {
      return res.status(502).json({
        status: false,
        message: "File kosong"
      });
    }

    let extension = "bin";

    if (contentType.includes("webp")) {
      extension = "webp";
    } else if (contentType.includes("png")) {
      extension = "png";
    } else if (
      contentType.includes("jpeg") ||
      contentType.includes("jpg")
    ) {
      extension = "jpg";
    } else if (contentType.includes("gif")) {
      extension = "gif";
    } else if (contentType.includes("mp4")) {
      extension = "mp4";
    } else if (contentType.includes("webm")) {
      extension = "webm";
    } else if (contentType.includes("jpeg")) {
      extension = "jpg";
    }

    const safePlatform =
      String(platform || "telegram")
        .replace(/[^a-zA-Z0-9_-]/g, "")
        .toLowerCase() || "telegram";

    res.setHeader(
      "Content-Type",
      contentType
    );

    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${safePlatform}-sticker.${extension}"`
    );

    res.setHeader(
      "Content-Length",
      String(buffer.length)
    );

    res.setHeader(
      "Cache-Control",
      "no-store, no-cache, must-revalidate"
    );

    res.setHeader(
      "X-Content-Type-Options",
      "nosniff"
    );

    return res.status(200).send(buffer);

  } catch (error) {
    console.error("TELEGRAM DOWNLOAD ERROR:", error);

    return res.status(500).json({
      status: false,
      message: "Download error",
      error: error.message || "Unknown error"
    });
  }
}
