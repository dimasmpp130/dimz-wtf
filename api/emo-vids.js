export default async function handler(req, res) {
  try {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,OPTIONS"
    );
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

    const apiKey =
      process.env.DIMZZ11_API;

    if (!apiKey) {
      return res.status(500).json({
        status: false,
        message: "API belum dipasang"
      });
    }

    const path = req.query.path;

    if (!path) {
      return res.status(400).json({
        status: false,
        message: "Endpoint tidak ditemukan"
      });
    }

    const endpoint =
      Array.isArray(path)
        ? path.join("/")
        : String(path);

    const download =
      req.query.download === "1";

    const sourceUrl =
      req.query.url;

    if (download && sourceUrl) {

      let fileUrl;

      try {
        fileUrl =
          new URL(
            String(sourceUrl)
          );
      } catch {
        return res.status(400).json({
          status: false,
          message: "URL file tidak valid"
        });
      }

      if (
        fileUrl.protocol !==
        "https:"
      ) {
        return res.status(400).json({
          status: false,
          message:
            "URL file harus menggunakan HTTPS"
        });
      }

      const fileResponse =
        await fetch(
          fileUrl.toString(),
          {
            method: "GET",
            headers: {
              Accept: "*/*"
            },
            cache: "no-store"
          }
        );

      if (!fileResponse.ok) {
        return res.status(
          fileResponse.status
        ).json({
          status: false,
          message:
            "Gagal mengambil file dari CDN",
          code:
            fileResponse.status
        });
      }

      const contentType =
        fileResponse.headers.get(
          "content-type"
        ) ||
        "application/octet-stream";

      const buffer =
        Buffer.from(
          await fileResponse.arrayBuffer()
        );

      if (!buffer.length) {
        return res.status(502).json({
          status: false,
          message: "File kosong"
        });
      }

      let extension = "bin";

      if (
        contentType.includes("jpeg") ||
        contentType.includes("jpg")
      ) {
        extension = "jpg";
      } else if (
        contentType.includes("png")
      ) {
        extension = "png";
      } else if (
        contentType.includes("webp")
      ) {
        extension = "webp";
      } else if (
        contentType.includes("gif")
      ) {
        extension = "gif";
      }

      res.status(200);

      res.setHeader(
        "Content-Type",
        contentType
      );

      res.setHeader(
        "Content-Disposition",
        `attachment; filename="ff-lobby.${extension}"`
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
        "Pragma",
        "no-cache"
      );

      res.setHeader(
        "Expires",
        "0"
      );

      res.setHeader(
        "X-Content-Type-Options",
        "nosniff"
      );

      return res.send(buffer);
    }

    const params =
      new URLSearchParams();

    for (
      const [key, value]
      of Object.entries(req.query)
    ) {

      if (key === "path") continue;
      if (key === "apikey") continue;
      if (key === "download") continue;
      if (key === "url") continue;

      if (
        Array.isArray(value)
      ) {

        value.forEach((v) => {
          params.append(
            key,
            String(v)
          );
        });

      } else {

        params.append(
          key,
          String(value)
        );

      }
    }

    const target =
      "https://api.alyachan.dev/api/" +
      endpoint +
      (
        params.toString()
          ? "?" + params.toString()
          : ""
      );

    const response =
      await fetch(
        target,
        {
          method: "GET",
          headers: {
            "Authorization":
              "Bearer " + apiKey,
            "Accept":
              "*/*"
          },
          cache: "no-store"
        }
      );

    const contentType =
      response.headers.get(
        "content-type"
      ) || "";

    if (
      contentType.includes(
        "application/json"
      )
    ) {

      const data =
        await response.json();

      return res
        .status(response.status)
        .json(data);
    }

    const buffer =
      Buffer.from(
        await response.arrayBuffer()
      );

    res.status(
      response.status
    );

    if (contentType) {
      res.setHeader(
        "Content-Type",
        contentType
      );
    }

    return res.send(buffer);

  } catch (error) {

    console.error(
      "API PROXY ERROR:",
      error
    );

    return res.status(500).json({
      status: false,
      message: "Proxy error",
      error:
        error.message ||
        "Unknown error"
    });
  }
}
