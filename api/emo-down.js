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

    const emoji = String(
      req.query.emoji || ""
    ).trim();

    if (!emoji) {
      return res.status(400).json({
        status: false,
        message: "Emoji tidak ditemukan"
      });
    }

    const apiKey = process.env.DIMZZ11_API;

    if (!apiKey) {
      return res.status(500).json({
        status: false,
        message: "API belum dipasang."
      });
    }

    const endpoint =
      "converter/emojito";

    const params = new URLSearchParams();

    params.set("emoji", emoji);

    const target =
      "https://api.alyachan.dev/api/" +
      endpoint +
      "?" +
      params.toString();

    const response = await fetch(target, {
      method: "GET",
      headers: {
        "Authorization":
          "Bearer " + apiKey,
        "Accept":
          "application/json"
      },
      cache: "no-store"
    });

    const text =
      await response.text();

    let data;

    try {
      data = JSON.parse(text);
    } catch {
      return res.status(502).json({
        status: false,
        message:
          "API tidak mengembalikan JSON",
        response: text
      });
    }

    if (!response.ok) {
      return res.status(response.status).json(
        data
      );
    }

    if (
      !data ||
      data.status !== true ||
      !data.data ||
      !data.data.url
    ) {
      return res.status(502).json({
        status: false,
        message:
          "URL hasil emoji tidak ditemukan",
        response: data
      });
    }

    const imageUrl =
      data.data.url;

    const imageResponse =
      await fetch(imageUrl, {
        method: "GET",
        headers: {
          "Accept":
            "image/webp,image/png,image/jpeg,image/*,*/*"
        },
        cache: "no-store"
      });

    if (!imageResponse.ok) {
      return res.status(502).json({
        status: false,
        message:
          "Gagal mengambil file emoji dari CDN",
        code: imageResponse.status
      });
    }

    const buffer =
      Buffer.from(
        await imageResponse.arrayBuffer()
      );

    if (!buffer.length) {
      return res.status(502).json({
        status: false,
        message: "File emoji kosong"
      });
    }

    res.setHeader(
      "Content-Type",
      "image/webp"
    );

    res.setHeader(
      "Content-Disposition",
      'attachment; filename="emoji.webp"'
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

    return res
      .status(200)
      .send(buffer);

  } catch (error) {
    console.error(
      "EMOJI DOWNLOAD ERROR:",
      error
    );

    return res.status(500).json({
      status: false,
      message:
        error.message ||
        "Gagal download emoji"
    });
  }
}
