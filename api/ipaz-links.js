
import { ZpiClient } from "zpi-sdk";

const client = new ZpiClient({
  apiKey: process.env.DIMZZZZ3333_API
});

const PROJECT_PATTERN = /^bypass-tools:[a-z0-9-]+$/i;
const ACTION_PATTERN = /^[a-z][a-z0-9_-]{0,63}$/i;
const MAX_BODY_SIZE = 32_000;

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

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
      error: "Layanan belum dikonfigurasi."
    });
  }

  let body = req.body;

  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({
        success: false,
        error: "Permintaan tidak valid."
      });
    }
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
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

  const { project, action, params = {} } = body;

  if (
    typeof project !== "string" ||
    !PROJECT_PATTERN.test(project)
  ) {
    return res.status(400).json({
      success: false,
      error: "Layanan tidak valid."
    });
  }

  if (
    typeof action !== "string" ||
    !ACTION_PATTERN.test(action)
  ) {
    return res.status(400).json({
      success: false,
      error: "Aksi tidak valid."
    });
  }

  if (
    !params ||
    typeof params !== "object" ||
    Array.isArray(params)
  ) {
    return res.status(400).json({
      success: false,
      error: "Parameter tidak valid."
    });
  }

  if (Object.keys(params).length > 50) {
    return res.status(400).json({
      success: false,
      error: "Terlalu banyak parameter."
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

  let inputUrl;

  try {
    inputUrl = new URL(params.url);

    if (!["http:", "https:"].includes(inputUrl.protocol)) {
      throw new Error();
    }

    if (inputUrl.username || inputUrl.password) {
      throw new Error();
    }
  } catch {
    return res.status(400).json({
      success: false,
      error: "URL tidak valid."
    });
  }

  const allowedServices = {
    "bypass-tools:safelinku": ["resolve"],
    "bypass-tools:sub4unlock": ["resolve"],
    "bypass-tools:sub2unlock": ["bypass"]
  };

  if (!allowedServices[project]?.includes(action)) {
    return res.status(400).json({
      success: false,
      error: "Layanan atau aksi belum diizinkan."
    });
  }

  const allowedHosts = {
    "bypass-tools:safelinku": [
      "sfl.gl",
      "safelinku.com"
    ],
    "bypass-tools:sub4unlock": [
      "sub4unlock.co",
      "sub4unlock.com"
    ],
    "bypass-tools:sub2unlock": [
      "sub2unlock.com"
    ]
  };

  const hostname = inputUrl.hostname.toLowerCase();

  if (
    !allowedHosts[project].some(
      host => hostname === host || hostname.endsWith("." + host)
    )
  ) {
    return res.status(400).json({
      success: false,
      error: "Domain tidak sesuai dengan layanan."
    });
  }

  try {
    const result = await client.run(project, action, params);

    return res.status(200).json({
      success: true,
      data: result
    });
  } catch {
    return res.status(502).json({
      success: false,
      error: "Resolver gagal memproses tautan."
    });
  }
}
