export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

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
    const { download, url, platform, path, ...query } = req.query;

    if (download === "1" && url) {
      let fileUrl;

      try {
        fileUrl = new URL(String(url));
      } catch {
        return res.status(400).json({
          status: false,
          message: "URL gambar tidak valid"
        });
      }

      if (fileUrl.protocol !== "https:") {
        return res.status(400).json({
          status: false,
          message: "URL harus menggunakan HTTPS"
        });
      }

      const allowedHosts = [
        "emojigraph.org",
        "www.emojigraph.org"
      ];

      if (!allowedHosts.includes(fileUrl.hostname)) {
        return res.status(403).json({
          status: false,
          message: "Host gambar tidak diizinkan"
        });
      }

      const response = await fetch(fileUrl.toString(), {
        headers: {
          Accept: "image/*"
        },
        cache: "no-store"
      });

      if (!response.ok) {
        return res.status(response.status).json({
          status: false,
          message: "Gagal mengambil gambar"
        });
      }

      const contentType =
        response.headers.get("content-type") || "";

      if (!contentType.startsWith("image/")) {
        return res.status(415).json({
          status: false,
          message: "File yang diterima bukan gambar"
        });
      }

      const buffer = Buffer.from(
        await response.arrayBuffer()
      );

      if (!buffer.length) {
        return res.status(502).json({
          status: false,
          message: "File gambar kosong"
        });
      }

      let extension = "png";

      if (contentType.includes("jpeg")) {
        extension = "jpg";
      } else if (contentType.includes("webp")) {
        extension = "webp";
      } else if (contentType.includes("gif")) {
        extension = "gif";
      } else if (contentType.includes("svg")) {
        extension = "svg";
      }

      const safePlatform =
        String(platform || "emoji")
          .replace(/[^a-zA-Z0-9_-]/g, "")
          .toLowerCase() || "emoji";

      res.setHeader(
        "Content-Type",
        contentType
      );

      res.setHeader(
        "Content-Disposition",
        `attachment; filename="emoji-${safePlatform}.${extension}"`
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
    }

    if (!path) {
      return res.status(400).json({
        status: false,
        message: "Endpoint tidak ditemukan"
      });
    }

    const apiKey = process.env.DIMZZ11_API;

    if (!apiKey) {
      return res.status(500).json({
        status: false,
        message: "API belum dipasang"
      });
    }

    const endpoint = Array.isArray(path)
      ? path.join("/")
      : String(path);

    const params = new URLSearchParams();

    for (const [key, value] of Object.entries(query)) {
      if (
        key === "apikey" ||
        key === "download" ||
        key === "url"
      ) {
        continue;
      }

      if (Array.isArray(value)) {
        value.forEach(v => {
          params.append(key, String(v));
        });
      } else {
        params.append(key, String(value));
      }
    }

    const target =
      "https://api.alyachan.dev/api/" +
      endpoint +
      (params.toString()
        ? "?" + params.toString()
        : "");

    const response = await fetch(target, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + apiKey,
        Accept: "*/*"
      },
      cache: "no-store"
    });

    const contentType =
      response.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      const data = await response.json();

      return res
        .status(response.status)
        .json(data);
    }

    const buffer = Buffer.from(
      await response.arrayBuffer()
    );

    if (contentType) {
      res.setHeader(
        "Content-Type",
        contentType
      );
    }

    return res
      .status(response.status)
      .send(buffer);

  } catch (error) {
    console.error("EMO DOWN ERROR:", error);

    return res.status(500).json({
      status: false,
      message: "Proxy error",
      error: error.message || "Unknown error"
    });
  }
}