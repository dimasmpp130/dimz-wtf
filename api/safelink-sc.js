
const { resolver } = require("@coflyn/scrapr");

const methods = {
  mediafire: resolver.mediafire,
  sub2unlock: resolver.sub2unlock,
  rekonise: resolver.rekonise,
  safelinku: resolver.safelinku,
  unshorten: resolver.unshorten
};

module.exports = async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({
      status: false,
      message: "Gunakan metode POST."
    });
  }

  const { url, service } = req.body || {};

  if (
    typeof url !== "string" ||
    url.length > 2048 ||
    typeof service !== "string" ||
    !Object.hasOwn(methods, service)
  ) {
    return res.status(400).json({
      status: false,
      message: "URL atau layanan tidak valid."
    });
  }

  let parsed;

  try {
    parsed = new URL(url);
  } catch {
    return res.status(400).json({
      status: false,
      message: "Format URL tidak valid."
    });
  }

  if (
    !["http:", "https:"].includes(parsed.protocol) ||
    parsed.username ||
    parsed.password ||
    !parsed.hostname
  ) {
    return res.status(400).json({
      status: false,
      message: "URL harus menggunakan HTTP atau HTTPS."
    });
  }

  try {
    const result = await methods[service](parsed.href);

    if (!result || result.status === false || !result.result?.url) {
      return res.status(422).json({
        status: false,
        message: "Link tidak berhasil di-resolve."
      });
    }

    const destination = new URL(result.result.url);

    if (
      !["http:", "https:"].includes(destination.protocol) ||
      destination.username ||
      destination.password
    ) {
      return res.status(422).json({
        status: false,
        message: "Resolver menghasilkan URL yang tidak valid."
      });
    }

    return res.status(200).json({
      status: true,
      service,
      result: {
        url: destination.href
      }
    });
  } catch {
    return res.status(502).json({
      status: false,
      message: "Resolver gagal. Coba lagi atau periksa tautan."
    });
  }
};
