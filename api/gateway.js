import { Readable } from "stream";

// Tambah host lain dipisah koma, atau set env ALLOWED_HOSTS
const ALLOWED_HOSTS = ("secure-signed.pages.dev,cdn.alyachan.online")
  .split(",").map(h => h.trim().toLowerCase()).filter(Boolean);

const isAllowed = (hostname) => {
  hostname = hostname.toLowerCase();
  return ALLOWED_HOSTS.some(h => hostname === h || hostname.endsWith("." + h));
};

const MIME = {
  jpg: "image/jpeg", jpeg: "image/jpeg", png: "image/png", webp: "image/webp", gif: "image/gif",
  mp4: "video/mp4", webm: "video/webm", mov: "video/quicktime", mkv: "video/x-matroska", "3gp": "video/3gpp"
};

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Range");
  res.setHeader("Access-Control-Expose-Headers", "Content-Length, Content-Range, Accept-Ranges, Content-Type");

  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "GET" && req.method !== "HEAD") {
    res.setHeader("Allow", "GET, HEAD, OPTIONS");
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  try {
    const { url } = req.query;
    if (!url || typeof url !== "string")
      return res.status(400).json({ success: false, message: "Parameter url wajib diisi." });

    let target;
    try { target = new URL(url); }
    catch { return res.status(400).json({ success: false, message: "URL tidak valid." }); }

    if (!["http:", "https:"].includes(target.protocol))
      return res.status(400).json({ success: false, message: "Protocol URL tidak diizinkan." });
    if (!isAllowed(target.hostname))
      return res.status(403).json({ success: false, message: "Hostname file tidak diizinkan." });

    const headers = { "User-Agent": "Mozilla/5.0" };
    if (req.headers.range) headers.Range = req.headers.range;

    const upstream = await fetch(target.toString(), { method: req.method, redirect: "follow", headers });

    if (upstream.url && !isAllowed(new URL(upstream.url).hostname))
      return res.status(403).json({ success: false, message: "Redirect ke host tidak diizinkan." });

    if (!upstream.ok && upstream.status !== 206)
      return res.status(upstream.status).json({ success: false, message: `Gagal mengambil file. Status: ${upstream.status}` });

    let contentType = upstream.headers.get("content-type") || "application/octet-stream";
    if (contentType.startsWith("application/octet-stream") || contentType.startsWith("binary/")) {
      const ext = target.pathname.split(".").pop().toLowerCase();
      if (MIME[ext]) contentType = MIME[ext];
    }

    res.status(upstream.status);
    res.setHeader("Content-Type", contentType);
    res.setHeader("Content-Disposition", "inline");
    res.setHeader("Cache-Control", "public, max-age=3600, s-maxage=3600");
    res.setHeader("Accept-Ranges", upstream.headers.get("accept-ranges") || "bytes");
    res.setHeader("X-Content-Type-Options", "nosniff");

    const len = upstream.headers.get("content-length");
    const range = upstream.headers.get("content-range");
    if (len) res.setHeader("Content-Length", len);
    if (range) res.setHeader("Content-Range", range);

    if (req.method === "HEAD" || !upstream.body) return res.end();
    Readable.fromWeb(upstream.body).pipe(res);
  } catch (error) {
    console.error("Proxy error:", error);
    if (!res.headersSent)
      return res.status(500).json({ success: false, message: "Terjadi kesalahan saat mengambil file." });
    res.end();
  }
}
