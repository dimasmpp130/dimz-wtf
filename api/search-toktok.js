module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type"
  );

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "GET") {
    return res.status(405).json({
      status: false,
      message: "Method not allowed"
    });
  }

  try {
    const {
      endpoint = "",
      q = "",
      type = "",
      download = "",
      url = "",
      filename = ""
    } = req.query;

    if (download === "1") {

      if (!url) {
        return res.status(400).json({
          status: false,
          message: "Parameter url wajib diisi."
        });
      }

      let videoURL;

      try {
        videoURL = new URL(url);
      } catch {
        return res.status(400).json({
          status: false,
          message: "URL video tidak valid."
        });
      }

      if (
        videoURL.protocol !== "http:" &&
        videoURL.protocol !== "https:"
      ) {
        return res.status(400).json({
          status: false,
          message: "Protocol URL tidak diizinkan."
        });
      }

      let finalName =
        String(filename || "tiktok-video-bydimz.mp4")
          .replace(/[\/\\:*?"<>|]/g, "")
          .replace(/[\r\n]/g, "")
          .trim();

      if (!finalName) {
        finalName = "tiktok-video-bydimz.mp4";
      }

      if (!/\.mp4$/i.test(finalName)) {
        finalName += ".mp4";
      }

      const response = await fetch(videoURL.toString(), {
        method: "GET",
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/131 Safari/537.36",
          "Accept": "video/mp4,video/*,*/*"
        },
        redirect: "follow"
      });

      if (!response.ok) {
        return res.status(502).json({
          status: false,
          message:
            "Gagal mengambil video dari server sumber.",
          source_status: response.status
        });
      }

      const contentType =
        response.headers.get("content-type") ||
        "video/mp4";

      const contentLength =
        response.headers.get("content-length");

      res.setHeader(
        "Content-Type",
        contentType
      );

      res.setHeader(
        "Content-Disposition",
        `attachment; filename="${finalName}"; filename*=UTF-8''${encodeURIComponent(finalName)}`
      );

      res.setHeader(
        "Cache-Control",
        "no-store, no-cache, must-revalidate"
      );

      res.setHeader(
        "Access-Control-Expose-Headers",
        "Content-Disposition, Content-Length, Content-Type"
      );

      if (contentLength) {
        res.setHeader(
          "Content-Length",
          contentLength
        );
      }

      if (!response.body) {
        return res.status(502).json({
          status: false,
          message: "Body video kosong."
        });
      }

      const reader =
        response.body.getReader();

      try {

        while (true) {

          const {
            done,
            value
          } = await reader.read();

          if (done) {
            break;
          }

          res.write(
            Buffer.from(value)
          );
        }

        return res.end();

      } catch (streamError) {

        try {
          await reader.cancel();
        } catch {}

        if (!res.headersSent) {
          return res.status(500).json({
            status: false,
            message: "Gagal melakukan streaming video."
          });
        }

        return res.end();
      }
    }

    if (!endpoint) {
      return res.status(400).json({
        status: false,
        message: "Parameter endpoint wajib diisi."
      });
    }

    const upstreamURL =
      new URL(
        "https://api.alyachan.dev/api/" +
        String(endpoint).replace(/^\/+/, "")
      );

    if (q) {
      upstreamURL.searchParams.set(
        "q",
        q
      );
    }

    if (type) {
      upstreamURL.searchParams.set(
        "type",
        type
      );
    }

    const apiKey =
      process.env.ALYACHAN_API_KEY;

    const headers = {
      "Accept": "application/json"
    };

    if (apiKey) {
      headers.Authorization =
        `Bearer ${apiKey}`;
    }

    const apiResponse =
      await fetch(
        upstreamURL.toString(),
        {
          method: "GET",
          headers,
          cache: "no-store"
        }
      );

    const contentType =
      apiResponse.headers.get("content-type") ||
      "";

    const text =
      await apiResponse.text();

    if (!apiResponse.ok) {
      return res.status(apiResponse.status).send(text);
    }

    if (
      contentType.includes("application/json")
    ) {
      res.setHeader(
        "Content-Type",
        "application/json"
      );

      return res.status(200).send(text);
    }

    return res.status(200).send(text);

  } catch (error) {

    console.error(
      "ERROR:",
      error
    );

    return res.status(500).json({
      status: false,
      message: "Internal server error.",
      error:
        process.env.NODE_ENV === "development"
          ? error.message
          : undefined
    });
  }
};