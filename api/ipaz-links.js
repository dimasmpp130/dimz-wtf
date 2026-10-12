import { ZpiClient } from "zpi-sdk";

const client = new ZpiClient({
  apiKey: process.env.DIMZZZZ3333_API
});

const MAX_BODY_SIZE = 32000;

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("X-Content-Type-Options", "nosniff");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({
      success: false,
      error: "Metode tidak didukung."
    });
  }

  if (!process.env.ZPI_API_KEY) {
    return res.status(500).json({
      success: false,
      error: "Ada yang belum dikonfigurasi"
    });
  }

  let body = req.body;

  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({
        success: false,
        error: "JSON tidak valid."
      });
    }
  }

  if (
    !body ||
    typeof body !== "object" ||
    Array.isArray(body)
  ) {
    return res.status(400).json({
      success: false,
      error: "Permintaan tidak valid."
    });
  }

  try {
    if (JSON.stringify(body).length > MAX_BODY_SIZE) {
      return res.status(413).json({
        success: false,
        error: "Permintaan terlalu besar."
      });
    }
  } catch {
    return res.status(400).json({
      success: false,
      error: "Permintaan tidak valid."
    });
  }

  const { project, action, params } = body;

  if (
    typeof project !== "string" ||
    !/^[a-z0-9_-]+:[a-z0-9_-]+$/i.test(project) ||
    project.length > 120
  ) {
    return res.status(400).json({
      success: false,
      error: "Project tidak valid."
    });
  }

  if (
    typeof action !== "string" ||
    action.length > 150 ||
    !/^[a-zA-Z0-9_:/-]+$/.test(action) ||
    action.startsWith("/") ||
    action.includes("..") ||
    action.includes("//")
  ) {
    return res.status(400).json({
      success: false,
      error: "Action atau path tidak valid."
    });
  }

  if (
    !params ||
    typeof params !== "object" ||
    Array.isArray(params) ||
    Object.keys(params).length > 50
  ) {
    return res.status(400).json({
      success: false,
      error: "Parameter tidak valid."
    });
  }

  if (
    typeof params.url !== "string" ||
    params.url.length > 2048
  ) {
    return res.status(400).json({
      success: false,
      error: "URL tidak valid."
    });
  }

  try {
    const url = new URL(params.url);

    if (
      !["http:", "https:"].includes(url.protocol) ||
      url.username ||
      url.password
    ) {
      throw new Error();
    }
  } catch {
    return res.status(400).json({
      success: false,
      error: "URL tidak valid."
    });
  }

  for (const [key, value] of Object.entries(params)) {
    if (
      !/^[a-zA-Z0-9_-]{1,100}$/.test(key) ||
      !["string", "number", "boolean"].includes(typeof value) ||
      (typeof value === "string" && value.length > 2048) ||
      (typeof value === "number" && !Number.isFinite(value))
    ) {
      return res.status(400).json({
        success: false,
        error: "Nilai parameter tidak valid."
      });
    }
  }

  try {
    const data = await client.run(project, action, params);

    return res.status(200).json({
      success: true,
      data
    });
  } catch {
    return res.status(502).json({
      success: false,
      error: "Resolver gagal memproses tautan."
    });
  }
}
