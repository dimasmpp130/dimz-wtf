export default async function handler(req, res) {
  try {
    if (req.method === "OPTIONS") {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type, Range");
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
        "User-Agent": "Mozilla/5.0",
        "Accept": "image/avif,image/webp,image/apng,image/png,image/jpeg,image/gif,video/mp4,video/webm,*/*"
      }
    });

    if (!response.ok) {
      return res.status(response.status).json({
        success: false,
        message: `Gagal mengambil file. Status: ${response.status}`
      });
    }

    const buffer = Buffer.from(await response.arrayBuffer());

    const upstreamType =
      response.headers.get("content-type") || "";

    const detectMime = () => {
      if (
        buffer.length >= 8 &&
        buffer[0] === 0x89 &&
        buffer[1] === 0x50 &&
        buffer[2] === 0x4e &&
        buffer[3] === 0x47
      ) {
        return "image/png";
      }

      if (
        buffer.length >= 3 &&
        buffer[0] === 0xff &&
        buffer[1] === 0xd8 &&
        buffer[2] === 0xff
      ) {
        return "image/jpeg";
      }

      if (
        buffer.length >= 6 &&
        buffer.toString("ascii", 0, 6) === "GIF89a"
      ) {
        return "image/gif";
      }

      if (
        buffer.length >= 6 &&
        buffer.toString("ascii", 0, 6) === "GIF87a"
      ) {
        return "image/gif";
      }

      if (
        buffer.length >= 12 &&
        buffer.toString("ascii", 0, 4) === "RIFF" &&
        buffer.toString("ascii", 8, 12) === "WEBP"
      ) {
        return "image/webp";
      }

      if (
        buffer.length >= 12 &&
        buffer.toString("ascii", 4, 8) === "ftyp"
      ) {
        return "video/mp4";
      }

      return "";
    };

    let contentType = upstreamType.split(";")[0].trim().toLowerCase();

    if (
      !contentType ||
      contentType === "application/octet-stream" ||
      contentType === "binary/octet-stream"
    ) {
      contentType = detectMime();
    }

    if (!contentType) {
      return res.status(415).json({
        success: false,
        message: "Format file tidak dapat dikenali."
      });
    }

    let extension = "bin";

    if (contentType === "image/png") {
      extension = "png";
    } else if (contentType === "image/jpeg") {
      extension = "jpg";
    } else if (contentType === "image/gif") {
      extension = "gif";
    } else if (contentType === "image/webp") {
      extension = "webp";
    } else if (contentType === "video/mp4") {
      extension = "mp4";
    } else if (contentType === "video/webm") {
      extension = "webm";
    }

    if (
      !contentType.startsWith("image/") &&
      !contentType.startsWith("video/")
    ) {
      return res.status(415).json({
        success: false,
        message: `Format file tidak didukung: ${contentType}`
      });
    }

    const filename = contentType.startsWith("video/")
      ? `brat-video.${extension}`
      : `brat-image.${extension}`;

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Range"
    );

    res.setHeader(
      "Access-Control-Expose-Headers",
      "Content-Type, Content-Length, Content-Disposition"
    );

    res.setHeader("Content-Type", contentType);
    res.setHeader("Content-Length", buffer.length.toString());

    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${filename}"`
    );

    res.setHeader(
      "Cache-Control",
      "private, no-store, max-age=0"
    );

    res.setHeader(
      "X-Content-Type-Options",
      "nosniff"
    );

    return res.status(200).send(buffer);

  } catch (error) {
    console.error("Proxy error:", error);

    return res.status(500).json({
      success: false,
      message: "Terjadi kesalahan saat mengambil file."
    });
  }
}
