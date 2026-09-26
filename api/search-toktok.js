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

    /*
    ========================================================
    AMBIL QUERY
    ========================================================
    */

    const query = req.query || {};

    let endpoint =
      query.endpoint || "";

    let q =
      query.q || "";

    let type =
      query.type || "";

    let download =
      query.download || "";

    let url =
      query.url || "";

    let filename =
      query.filename || "";


    /*
    ========================================================
    FALLBACK RAW QUERY
    ========================================================
    */

    if (
      !download ||
      !url ||
      !filename
    ) {

      try {

        const rawURL =
          req.url || "";

        const questionIndex =
          rawURL.indexOf("?");

        if (questionIndex !== -1) {

          const rawQuery =
            rawURL.slice(
              questionIndex + 1
            );

          const params =
            new URLSearchParams(
              rawQuery
            );

          if (!download) {
            download =
              params.get("download") || "";
          }

          if (!url) {
            url =
              params.get("url") || "";
          }

          if (!filename) {
            filename =
              params.get("filename") || "";
          }

          if (!endpoint) {
            endpoint =
              params.get("endpoint") || "";
          }

          if (!q) {
            q =
              params.get("q") || "";
          }

          if (!type) {
            type =
              params.get("type") || "";
          }

        }

      } catch (e) {
        console.error(
          "QUERY PARSE ERROR:",
          e
        );
      }
    }


    /*
    ========================================================
    DOWNLOAD MODE
    ========================================================
    */

    if (
      String(download) === "1"
    ) {

      /*
      ------------------------------------------------------
      URL WAJIB ADA
      ------------------------------------------------------
      */

      if (!url) {
        return res.status(400).json({
          status: false,
          message:
            "Parameter url wajib diisi."
        });
      }


      /*
      ------------------------------------------------------
      PARSE VIDEO URL
      ------------------------------------------------------
      */

      let videoURL;

      try {

        videoURL =
          new URL(
            String(url)
          );

      } catch {

        return res.status(400).json({
          status: false,
          message:
            "URL video tidak valid."
        });

      }


      /*
      ------------------------------------------------------
      PROTOCOL
      ------------------------------------------------------
      */

      if (
        videoURL.protocol !== "http:" &&
        videoURL.protocol !== "https:"
      ) {

        return res.status(400).json({
          status: false,
          message:
            "Protocol URL tidak diizinkan."
        });

      }


      /*
      ------------------------------------------------------
      NAMA FILE
      ------------------------------------------------------
      */

      let finalName =
        String(
          filename ||
          "tiktok-video-bydimz.mp4"
        )
          .replace(
            /[\/\\:*?"<>|]/g,
            ""
          )
          .replace(
            /[\r\n]/g,
            ""
          )
          .trim();


      if (!finalName) {

        finalName =
          "tiktok-video-bydimz.mp4";

      }


      /*
      ------------------------------------------------------
      PASTIKAN MP4
      ------------------------------------------------------
      */

      if (
        !/\.mp4$/i.test(
          finalName
        )
      ) {

        finalName +=
          ".mp4";

      }


      /*
      ------------------------------------------------------
      FETCH VIDEO
      ------------------------------------------------------
      */

      let response;

      try {

        response =
          await fetch(
            videoURL.toString(),
            {
              method: "GET",

              headers: {
                "User-Agent":
                  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/131 Safari/537.36",

                "Accept":
                  "video/mp4,video/*,*/*"
              },

              redirect: "follow"
            }
          );

      } catch (fetchError) {

        console.error(
          "VIDEO FETCH ERROR:",
          fetchError
        );

        return res.status(502).json({
          status: false,
          message:
            "Server gagal mengambil video.",
          error:
            fetchError.message
        });

      }


      /*
      ------------------------------------------------------
      CEK RESPONSE
      ------------------------------------------------------
      */

      if (!response.ok) {

        return res.status(502).json({
          status: false,
          message:
            "Gagal mengambil video dari server sumber.",
          source_status:
            response.status
        });

      }


      /*
      ------------------------------------------------------
      HEADER DOWNLOAD
      ------------------------------------------------------
      */

      res.setHeader(
        "Content-Type",
        "application/octet-stream"
      );

      res.setHeader(
        "Content-Disposition",
        `attachment; filename="${finalName}"`
      );

      res.setHeader(
        "Content-Transfer-Encoding",
        "binary"
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


      /*
      ------------------------------------------------------
      CONTENT LENGTH
      ------------------------------------------------------
      */

      const contentLength =
        response.headers.get(
          "content-length"
        );

      if (contentLength) {

        res.setHeader(
          "Content-Length",
          contentLength
        );

      }


      /*
      ------------------------------------------------------
      STREAM
      ------------------------------------------------------
      */

      if (!response.body) {

        return res.status(502).json({
          status: false,
          message:
            "Body video kosong."
        });

      }


      const reader =
        response.body.getReader();


      try {

        while (true) {

          const result =
            await reader.read();

          if (result.done) {
            break;
          }

          if (result.value) {

            res.write(
              Buffer.from(
                result.value
              )
            );

          }

        }

        return res.end();

      } catch (streamError) {

        console.error(
          "STREAM ERROR:",
          streamError
        );

        try {
          await reader.cancel();
        } catch {}

        if (!res.headersSent) {

          return res.status(500).json({
            status: false,
            message:
              "Gagal melakukan streaming video."
          });

        }

        return res.end();

      }

    }


    /*
    ========================================================
    SEARCH MODE
    ========================================================
    */

    if (!endpoint) {

      return res.status(400).json({
        status: false,
        message:
          "Parameter endpoint wajib diisi."
      });

    }


    /*
    --------------------------------------------------------
    CLEAN ENDPOINT
    --------------------------------------------------------
    */

    const cleanEndpoint =
      String(endpoint)
        .replace(/^\/+/, "");


    /*
    --------------------------------------------------------
    ALYACHAN URL
    --------------------------------------------------------
    */

    const upstreamURL =
      new URL(
        "https://api.alyachan.dev/api/" +
        cleanEndpoint
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


    /*
    ========================================================
    API KEY
    ========================================================
    */

    const apiKey =
      process.env.ALYACHAN_API_KEY;


    const headers = {
      "Accept":
        "application/json"
    };


    if (apiKey) {

      headers.Authorization =
        `Bearer ${apiKey}`;

    }


    /*
    ========================================================
    REQUEST SEARCH
    ========================================================
    */

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
      apiResponse.headers.get(
        "content-type"
      ) || "";


    const text =
      await apiResponse.text();


    if (!apiResponse.ok) {

      return res
        .status(
          apiResponse.status
        )
        .send(text);

    }


    res.setHeader(
      "Content-Type",
      contentType ||
      "application/json"
    );


    return res
      .status(200)
      .send(text);


  } catch (error) {

    console.error(
      "HANDLER ERROR:",
      error
    );

    return res.status(500).json({
      status: false,
      message:
        "Internal server error.",
      error:
        process.env.NODE_ENV ===
        "development"
          ? error.message
          : undefined
    });

  }
};
