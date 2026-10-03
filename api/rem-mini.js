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

    const contentType=
      response.headers.get("content-type")||
      "image/jpeg";

    const buffer=Buffer.from(
      await response.arrayBuffer()
    );

    let extension="jpg";

    if(contentType.includes("png")){
      extension="png";
    }else if(contentType.includes("webp")){
      extension="webp";
    }else if(contentType.includes("gif")){
      extension="gif";
    }else if(
      contentType.includes("jpeg")||
      contentType.includes("jpg")
    ){
      extension="jpg";
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
      `remini-${randomName}.${extension}`;

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
