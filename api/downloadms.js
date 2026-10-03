export default async function handler(req,res){
  try{
    if(req.method!=="GET"){
      return res.status(405).json({
        status:false,
        message:"Method tidak diizinkan"
      });
    }

    const url=req.query.url;

    if(!url){
      return res.status(400).json({
        status:false,
        message:"URL tidak ditemukan"
      });
    }

    if(
      typeof url!=="string"||
      !/^https?:\/\//i.test(url)
    ){
      return res.status(400).json({
        status:false,
        message:"URL tidak valid"
      });
    }

    const response=await fetch(url);

    if(!response.ok){
      return res.status(response.status).json({
        status:false,
        message:"Gagal mengambil file"
      });
    }

    const contentType=(
      response.headers.get("content-type")||
      "application/octet-stream"
    ).split(";")[0].trim().toLowerCase();

    const buffer=Buffer.from(
      await response.arrayBuffer()
    );

    const mimeExtensions={
      "image/jpeg":"jpg",
      "image/jpg":"jpg",
      "image/png":"png",
      "image/webp":"webp",
      "image/gif":"gif",
      "image/bmp":"bmp",
      "image/tiff":"tiff",
      "image/svg+xml":"svg",
      "image/avif":"avif",
      "image/heic":"heic",
      "image/heif":"heif",

      "video/mp4":"mp4",
      "video/webm":"webm",
      "video/quicktime":"mov",
      "video/x-msvideo":"avi",
      "video/x-matroska":"mkv",
      "video/mpeg":"mpeg",
      "video/ogg":"ogv",
      "video/3gpp":"3gp",
      "video/3gpp2":"3g2",

      "audio/mpeg":"mp3",
      "audio/mp3":"mp3",
      "audio/wav":"wav",
      "audio/x-wav":"wav",
      "audio/ogg":"ogg",
      "audio/aac":"aac",
      "audio/flac":"flac",
      "audio/mp4":"m4a",
      "audio/webm":"weba",
      "audio/x-m4a":"m4a",

      "application/pdf":"pdf",
      "application/zip":"zip",
      "application/x-rar-compressed":"rar",
      "application/vnd.rar":"rar",
      "application/gzip":"gz",
      "application/json":"json",
      "text/plain":"txt",
      "text/csv":"csv"
    };

    let extension=mimeExtensions[contentType];

    if(!extension){
      try{
        const pathname=new URL(url).pathname;
        const match=pathname.match(/\.([a-zA-Z0-9]{1,10})$/);

        if(match){
          extension=match[1].toLowerCase();
        }
      }catch{}
    }

    if(!extension){
      extension="bin";
    }

    const chars=
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let randomName="";

    for(let i=0;i<9;i++){
      randomName+=chars.charAt(
        Math.floor(Math.random()*chars.length)
      );
    }

    const filename=
      `download-${randomName}.${extension}`;

    res.setHeader(
      "Content-Type",
      contentType
    );

    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${filename}"`
    );

    res.setHeader(
      "Content-Length",
      buffer.length
    );

    res.setHeader(
      "Cache-Control",
      "no-store, no-cache, must-revalidate"
    );

    return res.status(200).send(buffer);

  }catch(error){

    console.error(error);

    return res.status(500).json({
      status:false,
      message:"Download gagal",
      error:error.message
    });

  }
}
