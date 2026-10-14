const COMMENTS_CONFIG = {
  supabaseUrl: "",
  anonKey: "",
  table: "public_comments"
};
const DEMO_COMMENTS = [
  {name:"raka_28",text:"Tampilan postingannya rapi, semoga kategori game-nya makin banyak.",date:"2026-10-12T09:30:00.000Z",generated:true},
  {name:"naya.vx",text:"Sebelum download selalu cek versi dan sumber file ya. Info kompatibilitas membantu banget.",date:"2026-10-11T13:10:00.000Z",generated:true},
  {name:"fajar_404",text:"Boleh request lebih banyak mod GTA SA Android dan screenshot asli di tiap postingan?",date:"2026-10-10T07:45:00.000Z",generated:true}
];
const POSTS = [
  {
    id:"bully-anniversary-files", 
    title:"Download Game Bully Anniversary Edition APK + OBB Android Terbaru 2026", 
    category:"Bully", 
    date:"2026-10-01", 
    author:"DIMZ MODS",
    sectionTitles:{
      intro:"Tentang Game Bully Android",
      features:"Fitur Unggulan Bully Anniversary",
      downloads:"Download Bully APK OBB Disini",
      specs:"Info Game & Ukuran File",
      steps:"Cara Install Game Bully",
      faq:"Pertanyaan Seputar Bully",
      info:"Detail File Bully",
      credit:"Credit Game",
      details:"Kenapa Download Disini?",
      description:"Deskripsi Game Bully"
    },
    credit:"Game by Rockstar Games | Mod & Indo by Community | Shared by DIMZ MODS",
    image:"https://images7.alphacoders.com/105/1053663.jpg",
    description:"Download Game Bully Anniversary Edition APK + OBB Full Version Android Gratis! Game sekolah terbaik dari Rockstar Games, sekarang bisa main di HP Android dengan grafik HD, full misi, dan sudah ada Subtitle Indonesia. Ukuran ringan dan support semua HP!",
    version:"v1.0.0.18 Original + HD", 
    size:"APK 100MB + OBB 2.4GB", 
    game:"Bully Anniversary Edition", 
    compatibility:"Android 5.0 Sampai Android 15 | Offline 100%",
    intro:"Siapa yang kangen main game Bully di PS2? Sekarang kamu bisa Download Game Bully Anniversary Edition di Android! Ini adalah game open world sekolah paling seru dari Rockstar Games. Jadi Jimmy Hopkins dan bikin onar di Bullworth Academy. Di DIMZ MODS kamu dapat paket full APK + OBB + Subtitle Indo tinggal pasang langsung main!",
    details:[
      "Game Bully Original Rockstar: Bukan versi mod abal-abal, ini game Bully Anniversary Edition original yang di-port ke Android dengan grafik HD!",
      "Full Misi & Open World: Semua misi, pelajaran sekolah, mini game, dan map Bullworth Academy lengkap 100% kayak di PS2.",
      "APK + OBB + Subtitle Indo: Paket super lengkap! Kamu dapat APK utama, Data OBB HD, plus Subtitle Bahasa Indonesia biar paham alur ceritanya.",
      "Offline & Anti Lag: Game Bully Android ini bisa main offline 100% tanpa internet dan sudah di-optimasi biar gak lag di HP kentang sekalipun!"
    ],
    downloads:[
      {title:"Download Bully APK Android",subtitle:"APK Original v1.0.0.18 Latest - 100MB",badge:"APK BULLY",url:"https://link.dimz-wtf.web.id/PunFpm"},
      {title:"Download Bully OBB / DATA Full",subtitle:"Data Game Bully HD Wajib Ada - 2.4GB",badge:"OBB FULL",url:"https://link.dimz-wtf.web.id/PunFpm"},
      {title:"Download Subtitle Indo Bully",subtitle:"Bully Bahasa Indonesia Full Story - Wajib!",badge:"SUB INDO",url:"https://link.dimz-wtf.web.id/TR78dw"}
    ],
    gallery:[
      {src:"https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/bully/b11ccecce27c5213cdaacf0df3181e8781272e9b.jpg?im=Resize=1920",alt:"Download Game Bully Android",label:"GAMEPLAY BULLY"},
      {src:"https://minireview.io/common/uploads/review/ac1cfc91e6108a1ae5723f87549b3d01.jpg",alt:"Download Bully APK OBB",label:"GAMEPLAY BULLY"},
      {src:"https://preview.redd.it/bully-anniversary-edition-hd-apk-obb-v0-gwug0hpif5gg1.jpg?width=640&crop=smart&auto=webp&s=61fd820fedc9f67337ea249352a237a56d1c3600",alt:"Game Bully Offline Android",label:"GAMEPLAY BULLY"}
    ],
    steps:[
      "1. Download semua file game Bully diatas: APK, OBB, dan Subtitle Indo.",
      "2. Install APK Bully Anniversary Edition, tapi JANGAN DIBUKA dulu setelah install!",
      "3. Ekstrak file OBB Bully pakai ZArchiver, nanti dapat folder com.rockstargames.bully.",
      "4. Pindahkan folder OBB tersebut ke memori Internal > Android > obb.",
      "5. Jika mau Bully Bahasa Indonesia, ekstrak dan ikuti cara pasang subtitle yang ada di dalam file.",
      "6. Selesai! Buka game Bully dan nikmati game sekolah paling seru di Android!"
    ],
    specs:[
      ["Nama Game","Download Game Bully Anniversary Edition"],
      ["Developer","Rockstar Games"],
      ["Versi Terbaru","v1.0.0.18 Full Game"],
      ["Ukuran Game","APK 100MB | OBB 2.4GB"],
      ["Mode Game","Offline 100% Tanpa Internet"],
      ["Android Support","Android 5.0+ Hingga Android 15"],
      ["Fitur","Full Misi, Grafik HD, Subtitle Indo, Open World"]
    ],
    faq:[
      ["Ini Download Game Bully yang full?","Iya 100% full! Ini Download Bully Anniversary Edition paket lengkap APK + OBB + Subtitle Indonesia. Bukan demo, semua misi kebuka!"],
      ["Bisa main di HP RAM 2GB?","Bisa banget! Game Bully Android ini ringan dan sudah support 32 & 64 bit. RAM 2GB / 3GB lancar jaya asal internal sisa 4GB."],
      ["Wajib download OBB?","Wajib! APK itu cuma installer, OBB / DATA itu isi gamenya. Kalau cuma download APK game bakal black screen. Jadi harus download Bully APK dan OBB."],
      ["Sudah ada Bahasa Indonesianya?","Sudah! Di halaman ini ada file Subtitle Indonesia Bully. Tinggal pasang dan cerita game Bully jadi full Bahasa Indonesia."],
      ["Online atau Offline?","Game Bully ini offline 100%, jadi gak butuh kuota buat main setelah install."]
    ]
  },
  {
    id:"gta-san-andreas-android-files", 
    title:"Download Game GTA San Andreas APK + OBB Android Full Original Terbaru 2026", 
    category:"GTA", 
    date:"2026-10-03", 
    author:"DIMZ MODS",
    sectionTitles:{
      intro:"Tentang Game GTA San Andreas Android",
      features:"Kenapa Wajib Download GTA Disini?",
      downloads:"Download GTA SA APK OBB Disini",
      specs:"Info Detail Game GTA",
      steps:"Cara Install Game GTA Android",
      faq:"Pertanyaan Seputar Download GTA",
      info:"Info File GTA SA",
      credit:"Credit Game GTA",
      details:"Keunggulan Paket GTA",
      description:"Deskripsi Lengkap GTA SA"
    },
    credit:"Game by Rockstar Games | MOD Support by GTA Community | Shared by DIMZ MODS",
    image:"https://images4.alphacoders.com/596/596253.jpg",
    description:"Download Game GTA San Andreas APK + OBB Android Full Version Original Gratis! Game GTA paling legend di Android dengan map luas, full misi, bisa pasang MOD, CLEO, Cheat Menu, dan sudah ada Subtitle Indonesia. Offline 100%!",
    version:"v2.11.32 Full Original Latest", 
    size:"APK 20MB + OBB 2.5GB Full", 
    game:"GTA San Andreas", 
    compatibility:"Android 5.0 - 15 | 32/64 Bit | Offline",
    intro:"Mau Download Game GTA San Andreas di Android paket paling lengkap? Ini dia tempatnya! Download GTA SA Android Original Full Version, game open world terbaik dari Rockstar Games. Jelajahi Los Santos, jadi CJ dan kuasai jalanan. Di DIMZ MODS kamu dapat paket full Download GTA APK + OBB + CLEO + Subtitle Indo, tinggal pasang langsung gas main!",
    details:[
      "Game GTA Original Full Misi: Ini Download GTA San Andreas original, bukan mod. Semua misi CJ dari awal sampai akhir tamat 100% ada, map Los Santos luas bebas jelajah!",
      "2 Pilihan APK GTA: Ada APK Normal buat main santai original, dan APK Unprotected khusus buat kamu yang hobi Download MOD GTA, pasang CLEO, mobil, motor, dan script keren!",
      "Paket GTA Super Lengkap: Sekali Download GTA disini kamu langsung dapat APK, OBB Full 2.5GB, CLEO 4.4.2 + Cheat Menu, dan Subtitle Indonesia biar cerita CJ jadi nyambung!",
      "Support MOD & Anti Force Close: Versi terbaru v2.11.32 sudah stabil di Android 14 & 15, support pasang MOD GTA SA Android sepuasnya tanpa crash atau FC!"
    ],
    downloads:[
      {title:"Download GTA SA APK Normal",subtitle:"APK GTA Original v2.11.32 - No Bug No FC",badge:"APK GTA",url:"https://link.dimz-wtf.web.id/65iJ2x"},
      {title:"Download GTA APK Unprotected",subtitle:"GTA Unprotect Buat Pasang MOD & CLEO - WAJIB MODDER",badge:"GTA UNPROTECT",url:"https://link.dimz-wtf.web.id/3Krkok"},
      {title:"Download GTA OBB / DATA Full",subtitle:"Data Game GTA SA Original 2.5GB - Wajib Ada",badge:"GTA OBB",url:"https://link.dimz-wtf.web.id/zUqk7x"},
      {title:"Download GTA CLEO + Cheat Menu",subtitle:"CLEO GTA SA + 100 Cheat Keren - Auto Sultan",badge:"GTA CLEO",url:"https://link.dimz-wtf.web.id/qwgBQ7"},
      {title:"Download GTA Subtitle Indonesia",subtitle:"GTA Bahasa Indonesia Full Misi - Cerita Nyambung",badge:"GTA INDO",url:"https://link.dimz-wtf.web.id/zUqk7x"}
    ],
    gallery:[
      {src:"https://i.pinimg.com/736x/32/97/60/3297602f6b405c3965a8dd82d72ee668.jpg",alt:"GTA San Andreas Gameplay",label:"GAMEPLAY GTA"},
      {src:"https://cdn-www.bluestacks.com/bs-images/GTASA_AGWB_Eng_2.jpg",alt:"GTA San Andreas Gameplay",label:"GAMEPLAY GTA"},
      {src:"https://minireview.io/common/uploads/review/7ca87254614dcfaa4b8b0c14326249ad.jpg",alt:"GTA San Andreas Gameplay",label:"GAMEPLAY GTA"},
      {src:"https://minireview.io/common/uploads/cache/review/1-900-506-33abfb3b4d8a372cb5fedd5249409c58.webp",alt:"GTA San Andreas Gameplay",label:"GAMEPLAY GTA"}
    ],
    steps:[
      "1. Download file Download Game GTA yang kamu butuhkan: WAJIB APK + OBB. File Unprotected & CLEO kalau mau modding.",
      "2. Install APK GTA San Andreas, pilih mau yang Normal atau Unprotected. Setelah install JANGAN LANGSUNG BUKA!",
      "3. Ekstrak file OBB GTA pakai ZArchiver, kamu akan dapat folder com.rockstargames.gtasa.",
      "4. Pindahkan folder OBB tersebut ke: Memori Internal > Android > obb > (paste disini).",
      "5. Untuk yang mau cheat, ekstrak file GTA CLEO dan ikuti cara pasangnya di dalam folder.",
      "6. Untuk Subtitle Indonesia, ikuti petunjuk pemasangan dari sumber file.",
      "7. Selesai! Sekarang buka game GTA SA dan nikmati Download Game GTA paling seru di Android!"
    ],
    specs:[
      ["Nama Game","Download Game GTA San Andreas Android"],
      ["Developer","Rockstar Games"],
      ["Versi Game","v2.11.32 Full Original Latest"],
      ["Ukuran File","APK 20MB + OBB 2.5GB Full"],
      ["Isi Paket","Download GTA APK Normal, APK Unprotect, OBB, CLEO, Sub Indo"],
      ["Support","CLEO Script, MOD Mobil, Motor, Map, Cheat Menu"],
      ["Mode Game","Offline 100% Tanpa Internet"],
      ["Android","Android 5.0+ Hingga Android 15 - Support 32 & 64 Bit"]
    ],
    faq:[
      ["Ini Download Game GTA yang full version?","Iya 100% full version! Ini Download GTA San Andreas Android original full misi, bukan trial atau demo. Semua map Los Santos kebuka!"],
      ["Apa bedanya Download GTA APK Normal sama Unprotected?","APK Normal buat main original tanpa mod. APK Unprotected itu Download GTA khusus modder, udah di-unprotect biar bisa dipasang MOD GTA, CLEO, dan cheat. Kalau mau pasang mod wajib yang Unprotect!"],
      ["Kalau Download Game GTA harus download OBB juga?","Wajib banget! APK itu cuma kunci, OBB itu isi gamenya. Kalau cuma Download GTA APK doang bakal black screen / force close. Jadi Download GTA APK + OBB itu sepaket."],
      ["Bisa pasang MOD GTA setelah Download GTA ini?","Bisa 100%! Makanya download yang versi Unprotected + CLEO. Kamu bisa Download MOD GTA mobil, motor, skin, map, semua support di paket ini."],
      ["Apakah Download GTA ini offline?","Offline 100%! Setelah selesai Download Game GTA dan install, kamu bisa main GTA SA sepuasnya tanpa kuota internet."]
    ]
  },
  {
    id:"new-mapping-grove-street-remodel-house-cj-cool", 
    title:"Download MOD GTA New Mapping Grove Street & Remodel House CJ Cool - GTA SA Android", 
    category:"GTA", 
    date:"2026-10-05", 
    author:"DIMZ MODS",
    sectionTitles:{
      intro:"Tentang MOD GTA Ini",
      features:"Fitur Keren MOD GTA",
      downloads:"Download MOD GTA Disini",
      specs:"Detail File MOD GTA",
      steps:"Cara Pasang MOD GTA Android",
      faq:"Seputar Download MOD GTA",
      info:"Info Lengkap MOD",
      credit:"Credit MOD GTA",
      details:"Keunggulan MOD GTA",
      description:"Deskripsi MOD GTA"
    },
    credit:"Author MOD GTA: BlackF9570 (Design), Dhimas Mpps (Editor), GTABUSBOY (Texture) | Support: Rockstar Games", 
    image:"https://h.top4top.io/p_3938eawv10.jpg",
    description:"Download MOD GTA New Mapping Grove Street And Remodel House CJ Cool untuk GTA SA Android! Lagi cari MOD GTA biar Grove Street gak gersang? Ini dia MOD Game GTA terbaru, Grove Street di-remodel jadi mewah dengan air mancur, lampu RGB malam hari, dan taman bunga di rumah CJ. Fix Bug Load Game!",
    version:"vFinal Fix Bug Load - No FC", 
    size:"4.88 MB - Super Ringan", 
    game:"GTA San Andreas Android", 
    compatibility:"Support All GTA SA Android Lite / Ori / Unprotected",
    details:[
      "Lagi Download MOD GTA? Wajib Coba Mapping Ini: Kalau kamu lagi download MOD GTA buat percantik Grove Street, mod ini jawabannya! Halaman rumah CJ jadi kayak rumah sultan ada air mancurnya!",
      "MOD Game GTA Estetik Malam Hari: Lagi pengen suasana baru pas main GTA malam-malam? MOD GTA ini ada lampu warna-warni RGB yang auto hidup di malam hari, Grove Street jadi hidup!",
      "Download MOD Game GTA Biar Asri: Bosan Grove Street gersang dan sepi? Dengan download MOD GTA ini, halaman rumah CJ dipenuhi pepohonan dan bunga mekar, jadi asri dan betah main lama!",
      "Download MOD GTA Fix Bug 100%: Tenang, kalau kamu lagi download MOD GTA takut FC pas load game, MOD ini sudah fix bug load game 100% aman buat misi!"
    ],
    downloadUrl:"https://link.dimz-wtf.web.id/uNSmcd",
    downloads:[
      {title:"Download MOD GTA Grove Street Cool",subtitle:"Remodel House CJ + Fix Bug - 4.88MB Only",badge:"MOD GTA",url:"https://link.dimz-wtf.web.id/uNSmcd"}
    ],
    gallery:[
      {src:"https://b.top4top.io/p_3938w9wud0.png",alt:"Download MOD GTA Air Mancur",label:"MOD GTA MEWAH"},
      {src:"https://e.top4top.io/p_3938ld48n2.png",alt:"MOD Game GTA Lampu RGB",label:"GTA RGB NIGHT"},
      {src:"https://f.top4top.io/p_393870irn3.png",alt:"Download MOD Game GTA Taman",label:"TAMAN CJ"},
      {src:"https://k.top4top.io/p_3938888rp4.png",alt:"MOD GTA Remodel House CJ",label:"RUMAH CJ COOL"}
    ],
    specs:[
      ["Nama MOD GTA","New Mapping Grove Street & Remodel House CJ Cool"],
      ["Kategori","Download MOD GTA SA Android - Mapping"],
      ["Ukuran MOD","Before 3.41 MB | After 4.88 MB"],
      ["Design Mapping MOD GTA","BlackF9570"],
      ["Editor MOD GTA","Dhimas Mpps"],
      ["Texture House MOD Game GTA","GTABUSBOY"],
      ["Fitur MOD GTA","Air Mancur, Lampu RGB Malam, Pohon & Bunga Mekar, Fix Bug"],
      ["Game Support","GTA San Andreas Android"]
    ],
    steps:[
      "1. Klik Download MOD GTA diatas buat dapatkan file Grove Street Remodel.",
      "2. Ekstrak file MOD Game GTA pakai ZArchiver di HP kamu.",
      "3. WAJIB: Backup file GTA SA original kamu sebelum pasang MOD GTA biar aman.",
      "4. Pindahkan file hasil ekstrak MOD GTA ke Android/data/com.rockstargames.gtasa/files/ - ikuti struktur folder di dalam ZIP.",
      "5. Buka game GTA SA kamu, langsung ke Grove Street dan lihat hasilnya, apalagi pas malam hari!",
      "6. Selesai! Nikmati hasil Download MOD GTA terbaru, rumah CJ auto jadi paling keren se-Los Santos!"
    ],
    faq:[
      ["Lagi download MOD GTA Grove Street ini apa aja fiturnya?","Kalau kamu lagi download MOD Game GTA ini, fiturnya: Fix Bug Load Game, Air Mancur depan rumah CJ, Lampu Warna-Warni RGB khusus malam hari, dan banyak pepohonan serta bunga mekar di halaman!"],
      ["Ini download MOD GTA atau MOD Game GTA?","Sama aja, ini adalah download MOD GTA SA Android kategori mapping. Jadi kamu download MOD Game GTA buat remodel Grove Street & Rumah CJ biar gak bosen!"],
      ["Siapa author MOD GTA ini?","Download MOD GTA ini dibuat oleh BlackF9570 (Design Mapping), Dhimas Mpps (Editor Mapping), dan GTABUSBOY (Texture Home CJ)."],
      ["Berat gak kalau download MOD GTA ini?","Enteng banget! Size cuma 3.41 MB before dan 4.88 MB after. Jadi kalau lagi download MOD GTA tapi HP kentang, mod ini aman banget, ringan dan no FC!"],
      ["Support semua GTA SA Android?","Support! MOD Game GTA ini support GTA SA Lite, Ori, dan Unprotected. Cocok buat kamu yang lagi koleksi download MOD GTA Android!"]
    ]
  },
  {
    id:"ryder-shotgun-leatherhoff", 
    title:"Download MOD GTA Skin Senjata Ryder Style by Leatherhoff GTA SA Android", 
    category:"GTA", 
    date:"2026-10-07", 
    author:"DIMZ MODS",
    sectionTitles:{
      intro:"Tentang MOD GTA Ini",
      features:"Fitur Keren MOD GTA",
      downloads:"Download MOD GTA Disini",
      specs:"Detail File MOD GTA",
      steps:"Cara Pasang MOD GTA Android",
      faq:"Seputar Download MOD GTA",
      info:"Info Lengkap MOD",
      credit:"Credit MOD GTA",
      details:"Keunggulan MOD GTA",
      description:"Deskripsi MOD GTA"
    },
    credit:"Author Skin: leatheroff (Leather_45) | Convert Sound Android: Dimas Mpp", 
    image:"https://h.top4top.io/p_3938il5np2.jpg",
    description:"Download MOD GTA Skin Senjata Ryder Style untuk GTA SA Android! Lagi cari MOD Game GTA buat ganti tampilan skin senjata jadi lebih keren? Ini dia skin Senjata Ryder style yang HD detail plus sound pack yang sudah di-convert ke Android biar makin real pas main!",
    version:"v1.0 Edition - Fix Android", 
    size:"~18MB ZIP - Enteng", 
    game:"GTA San Andreas Android", 
    compatibility:"Support GTA SA Android Unprotected + CLEO",
    details:[
      "Lagi Download MOD GTA Skin Senjata Skin Ryder? Ini Jawabannya: Bosan sama tampilan skin senjata yang gitu-gitu aja? MOD GTA ini ngubah skin senjata enjata jadi style Ryder yang super HD dan detail, auto ganteng!",
      "MOD Game GTA + Sound Pack Android: Gak cuma skin senjata, kalau kamu download MOD Game GTA ini kamu juga dapat sound pack yang sudah di-convert ke Android oleh Dimas Mpp, suara jadi lebih jernih!",
      "Download MOD GTA Anti Ribet Ada Password: File MOD GTA ini dilengkapi password biar aman, tapi tenang passwordnya gampang: leatheroff ( Leather_45 )",
      "Cocok Buat Koleksi Download MOD GTA: Skin senjata ini ringan, no bug, dan support semua GTA SA Android. Wajib punya kalau kamu lagi koleksi download MOD Game GTA skin senjata!"
    ],
    downloadUrl:"https://link.dimz-wtf.web.id/3G3QRH",
    downloads:[
      {title:"Download MOD GTA Skin Ryder",subtitle:"Skin Senjata HD + Sound Android - Pass: leatheroff",badge:"MOD GTA",url:"https://link.dimz-wtf.web.id/3G3QRH"}
    ],
    gallery:[
      {src:"https://c.top4top.io/p_3938eipq11.jpg",alt:"Download MOD GTA Skin Ryder Style",label:"SCREENSHOT SKIN"},
      {src:"https://h.top4top.io/p_3938ovwa11.jpg",alt:"MOD Game GTA",label:"SCREENSHOT SKIN"},
    ],
    specs:[
      ["Nama MOD GTA","Skin Senjata Ryder Style Leatherhoff"],
      ["Kategori","Download MOD GTA SA Android - Skin"],
      ["Author Skin MOD GTA","leatheroff (Leather_45)"],
      ["Convert Sound Android","Dimas Mpp"],
      ["Password ZIP MOD GTA","leatheroff ( Leather_45 )"],
      ["Game Support","GTA San Andreas Android"],
      ["Ukuran MOD Game GTA","~18MB ZIP"]
    ],
    steps:[
      "1. Klik Download MOD GTA diatas buat dapatkan file Ryder Style.",
      "2. Ekstrak file ZIP pakai ZArchiver dengan Password: leatheroff ( Leather_45 ) - ketik persis ya termasuk spasi.",
      "3. Backup dulu file original GTA SA Android kamu biar aman sebelum pasang MOD GTA.",
      "4. Pindahkan file hasil ekstrak MOD Game GTA sesuai petunjuk di dalam arsip ke folder GTA SA.",
      "5. Buka game GTA SA dan cek karakter Ryder, sekarang tampilannya auto keren dengan style + sound baru!",
      "6. Selesai! Koleksi download MOD GTA kamu makin lengkap!"
    ],
    faq:[
      ["Lagi download MOD GTA skin senjata Ryder ini passwordnya apa?","Password ZIP nya: leatheroff ( Leather_45 ) - ketik persis sama spasi dan kurungnya pas ekstrak pakai ZArchiver."],
      ["Ini download MOD GTA apa?","Ini download MOD Game GTA Skin karakter senjata, yaitu skin Ryder dengan style yang HD plus bonus sound pack Android."],
      ["Siapa pembuat download MOD GTA ini?","Author Skin keren ini adalah leatheroff (Leather_45) dan Convert Sound ke Android oleh Dimas Mpp."],
      ["Support HP kentang gak kalau download MOD GTA ini?","Support banget! Ukurannya cuma ~18MB, enteng, no FC, dan work 100% di GTA SA Android Unprotected."]
    ]
  },
  {
    id:"bar-v10-7z", 
    title:"Download MOD GTA BAR V10 - MOD Game GTA SA Android & PC Terbaru", 
    category:"GTA", 
    date:"2026-10-08", 
    author:"DIMZ MODS",
    sectionTitles:{
      intro:"Tentang MOD GTA BAR V10",
      features:"Kenapa Wajib Download MOD GTA Ini?",
      downloads:"Download MOD GTA BAR V10 Disini",
      specs:"Detail File MOD Game GTA",
      steps:"Cara Pasang MOD GTA Android & PC",
      faq:"Seputar Download MOD GTA",
      info:"Info Lengkap MOD GTA",
      credit:"Credit MOD Game GTA",
      details:"Keunggulan MOD GTA BAR V10",
      description:"Deskripsi Lengkap MOD GTA"
    },
    credit:"Credits MOD GTA: Script Cleo by DxDGamerz | Retex Texture by Orang Brazil | Share by DIMZ MODS", 
    image:"https://k.top4top.io/p_3938rqqzo6.jpg",
    description:"Download MOD GTA BAR V10 untuk GTA SA Android & PC! Lagi cari MOD Game GTA? Ini dia BAR V10 versi bersih, support GTA SA Lite & Ori, 100% No Bug No FC. Paket retex + cleo paling enteng buat mabar dan misi!",
    version:"V10 Final - No FC", 
    size:"~180MB 7Z - Paket Lengkap", 
    game:"GTA San Andreas", 
    compatibility:"Support Download MOD GTA SA Android & PC | Lite / Ori Aman",
    details:[
      "Lagi Download MOD GTA BAR V10? Ini Versi Paling Stabil: Kalau kamu lagi download MOD Game GTA tapi takut map jadi bug, ini versi bersih original. Jadi enteng, gak bikin bangunan hilang, dan No FC!",
      "Download MOD GTA Satu Paket Buat Android & PC: Sekali download MOD Game GTA BAR V10 ini kamu bisa pakai di Android dan PC. Tinggal sesuaikan cara pasang, retex dan cleo nya auto work!",
      "Download MOD GTA Support Lite & Ori: Bosan download MOD GTA tapi gak cocok sama versi GTA kamu? BAR V10 ini support GTA SA Lite maupun Ori Playstore, jadi semua HP bisa main!",
      "Lagi Download MOD Game GTA Biar Gak FC? Wajib Ini: MOD GTA BAR V10 sudah di-fix 100% No Bug No FC. Aman buat main misi GTA sampai tamat, mabar, dan roleplay tanpa takut crash!"
    ],
    downloadUrl:"https://www.mediafire.com/file/es63xnsi73v1pj6/BAR_V10.7z/file",
    downloads:[
      {title:"Download MOD GTA BAR V10",subtitle:"Support Android & PC - Lite / Ori - 180MB",badge:"BAR V10",url:"https://www.mediafire.com/file/es63xnsi73v1pj6/BAR_V10.7z/file"}
    ],
    gallery:[
      {src:"https://h.top4top.io/p_3938grh2x0.png",alt:"Download MOD GTA BAR V10",label:"SCREENSHOT (1)"},
      {src:"https://b.top4top.io/p_3938e3hli3.png",alt:"MOD Game GTA Android & PC",label:"SCREENSHOT (2)"},
      {src:"https://i.top4top.io/p_3938w5sj44.png",alt:"Download MOD Game GTA Support Lite Ori",label:"SCREENSHOT (3)"}
    ],
    specs:[
      ["Nama MOD GTA","BAR V10 - MOD Game GTA"],
      ["Versi MOD Game GTA","V10 Final"],
      ["Kategori","Download MOD GTA SA Android & PC"],
      ["Support Platform","Android & PC"],
      ["Kompatibel GTA","GTA SA Lite & GTA SA Ori Original"],
      ["Status MOD GTA","No Bug / No FC - Super Stabil"],
      ["Credits MOD Game GTA","Script Cleo: DxDGamerz | Retex: Orang Brazil"],
      ["Ukuran File MOD GTA","~180MB Format 7Z"]
    ],
    steps:[
      "1. Klik Download MOD GTA BAR V10 diatas buat dapatkan file lengkapnya.",
      "2. Ekstrak file 7Z MOD Game GTA pakai ZArchiver di HP atau PC kamu.",
      "3. CARA ANDROID: Pindahkan hasil ekstrak MOD GTA ke folder Android/data/com.rockstargames.gtasa/files/ dan timpa file lama.",
      "4. CARA PC: Copy paste file MOD Game GTA ke folder utama GTA San Andreas PC kamu.",
      "5. PENTING: Pastikan kamu pakai APK Unprotected kalau di Android biar download MOD GTA nya No FC.",
      "6. Buka game GTA SA kamu, dan nikmati hasil download MOD GTA BAR V10 yang super enteng dan stabil!"
    ],
    faq:[
      ["Lagi download MOD GTA BAR V10 ini ada mappingnya gak?","Enggak, jadi kalau kamu lagi download MOD Game GTA tapi mau map original bersih tanpa bangunan tambahan, ini yang paling stabil dan enteng."],
      ["Bisa gak kalau lagi download MOD GTA BAR V10 buat HP kentang?","Bisa banget! Makanya banyak yang download MOD GTA ini karena support GTA SA Lite dan Ori. No FC, cocok buat HP kentang."],
      ["Ini download MOD GTA buat Android & PC beneran?","Bener 100%! Satu kali download MOD Game GTA BAR V10 ini filenya bisa dipakai di Android dan PC. Fitur retex dan script cleo nya work di keduanya."],
      ["Siapa pembuat MOD GTA BAR V10 ini?","Author MOD Game GTA ini adalah DxDGamerz buat script Cleo nya dan Retex Texture oleh Orang Brazil. Kita cuma share ulang biar gampang download MOD GTA nya."]
    ]
  },
  {
    id:"all-fonts-pixe-picsay", 
    title:"Download Font Pixellab & Picsay Pro 1500+ Lengkap Aesthetic", 
    category:"Others", 
    date:"2026-10-09", 
    author:"DIMZ MODS",
    sectionTitles:{
      intro:"Apa Itu Font Pack Ini?",
      features:"Kenapa Harus Download Disini?",
      downloads:"Link Download Font",
      specs:"Spesifikasi Font Pack",
      steps:"Cara Pasang Font di Android",
      faq:"Tanya Jawab Seputar Font",
      info:"Info File Lengkap",
      credit:"Credit & Support",
      details:"Informasi Lainnya",
      description:"Deskripsi Lengkap Font"
    },
    credit:"Created by DIMZ MODS | All Font Free For Pixellab & Picsay Pro", 
    detailDescription:"Ribuan font aesthetic siap pakai untuk Pixellab & Picsay Pro. Bikin logo gaming, thumbnail, dan poster jadi makin pro!",
    image:"https://a.top4top.io/p_39387rfhs1.jpg",
    description:"Download Kumpulan Font Pixellab & Picsay Pro terlengkap 2026! Lebih dari 1500+ font aesthetic, racing, grafiti, bold, dan jedag-jedug. Format TTF/OTF siap import, 100% work di semua HP Android tanpa error!",
    version:"v6.0 Update 2026 - 1500+ Fonts", 
    size:"98 MB ZIP (Ekstrak 300MB+)", 
    game:"Pixellab - Picsay Pro - Android", 
    compatibility:"All Android - Pixellab Free/Pro & Picsay Pro Work",
    details:[
      "1500+ Font Super Lengkap: Dari font miring, grafiti, horror, aesthetic, 3D, sampai font logo Esport paling dicari!",
      "Khusus Pixellab & Picsay Pro: Format TTF/OTF sudah optimal, no bug kotak-kotak saat dipasang di Pixellab & Picsay Pro.",
      "Tinggal Import Langsung Jadi: Gak perlu setting ribet, cukup ekstrak dan add ke My Fonts, semua font auto kebaca.",
      "Gratis & Bebas Lisensi Pribadi: Aman buat kebutuhan edit pribadi, bikin logo, nama FF, thumbnail YouTube, dan konten TikTok!"
    ],
    downloadUrl:"https://link.dimz-wtf.web.id/aUnYBt",
    downloads:[
      {title:"Font Pixellab & Picsay Pro 1500+",subtitle:"Pack Lengkap TTF/OTF - Siap Import",badge:"NEW UPDATE",url:"https://link.dimz-wtf.web.id/aUnYBt"}
    ],
    specs:[
      ["Nama File","ALL Fonts Pack for Pixellab & Picsay Pro"],
      ["Total Font","1500+ Font Premium"],
      ["Jenis Format","TTF & OTF"],
      ["Untuk Aplikasi","Pixellab & Picsay Pro"],
      ["Ukuran File","98 MB ZIP"],
      ["Update","Versi 6.0 - 2026"],
      ["Support","Android 5.0+ Hingga Android 15"]
    ],
    steps:[
      "1. Download file font di tombol download di atas.",
      "2. Buka ZArchiver dan ekstrak file ALL_Fonts_Pixe_PicSay.zip ke folder.",
      "3. CARA PIXELLAB: Buka Pixellab > Klik huruf A > My Fonts > Ikon Folder > Cari folder font tadi > Select All > Add.",
      "4. CARA PICSAY PRO: Salin semua font ke memori Internal > PicsayPro > Font. Jika folder belum ada, buat folder baru bernama 'font'.",
      "5. Restart Pixellab / Picsay Pro kamu, semua font baru siap dipakai buat desain!"
    ],
    faq:[
      ["Font ini work di Pixellab ori?","Work 100%, mau Pixellab ori Playstore, mod, atau pro version semuanya kebaca tanpa kotak-kotak."],
      ["Bisa untuk Picsay Pro juga?","Bisa banget! Formatnya TTF/OTF jadi auto support di Picsay Pro. Tinggal pindah ke folder font nya aja."],
      ["Bedanya sama font biasa apa?","Ini pack 1500+ gabungan font aesthetic, racing, grafiti, yang paling sering dipakai desainer Pixellab. Jadi gak perlu download satu-satu lagi."],
      ["Kok pas di ekstrak jadi banyak?","Emang sengaja pack lengkap, ukuran ZIP 98MB tapi pas di ekstrak jadi 300MB+ isinya ribuan font keren."]
    ]
  },
  {
    "id": "alight-motion-premium-pro-apk",
    "title": "Alight Motion Premium MOD APK — Unlocked Full Efek & Tanpa Watermark",
    "category": "APK",
    "date": "2026-10-10",
    "author": "DIMZ MODS",
    "sectionTitles": {
      "intro": "Apa Itu Alight Motion Premium?",
      "features": "Keunggulan Fitur Pro & Premium",
      "downloads": "Link Download Alight Motion Pro",
      "specs": "Spesifikasi Minimum Aplikasi",
      "steps": "Cara Install APK Premium di Android",
      "faq": "Tanya Jawab Seputar Fitur Pro",
      "info": "Informasi Lengkap File",
      "credit": "Kredit & Hak Cipta",
      "details": "Peringatan & Catatan Penting",
      "description": "Deskripsi Lengkap Alight Motion Pro"
    },
    "credit": "Alight Motion dikembangkan secara resmi oleh Alight Creative. Modifikasi ini merupakan versi alternatif yang dikembangkan oleh pihak ketiga.",
    "image": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/6a/71/a0/6a71a0c6-572f-0a31-4182-116e36bf1bbd/Placeholder.mill/400x400bb-75.webp",
    "description": "Download Alight Motion Premium APK untuk membuka semua fitur pro, efek visual eksklusif, animasi keyframe tingkat lanjut, tanpa watermark, dan bebas iklan.",
    "version": "Premium Terupdate (Cek langsung di halaman file)",
    "size": "Silakan periksa ukuran file pada tombol unduhan",
    "game": "Android Video Editor",
    "compatibility": "Kompatibel dengan arsitektur HP ARM64 atau ARMv7 sesuai spesifikasi perangkat Anda",
    "downloadUrl": "https://link.dimz-wtf.web.id/dSt7uP",
    "details": [
      "Pastikan untuk selalu memeriksa versi, ukuran, dan nama file sebelum melakukan instalasi.",
      "Aplikasi ini merupakan versi modifikasi pihak ketiga.",
      "Sangat disarankan untuk melakukan backup/cadangkan proyek editing penting Anda sebelum menimpa aplikasi lama."
    ],
    "intro": "Alight Motion Premium adalah solusi terbaik untuk para editor video dan kreator konten yang ingin membuat animasi serta motion graphic profesional langsung dari HP Android. Dengan versi premium ini, Anda bisa mengakses seluruh aset eksklusif, efek visual berbayar, hingga ekspor video kualitas tinggi tanpa terganggu tanda air (watermark).",
    "features": [
      {"title": "Tanpa Watermark & Bebas Iklan", "text": "Hasil ekspor video bersih profesional tanpa logo Alight Motion serta proses editing nyaman tanpa gangguan iklan."},
      {"title": "Animasi Keyframe Presisi", "text": "Buat pergerakan objek, transisi dinamis, dan kurva motion secara halus dengan kendali titik keyframe penuh."},
      {"title": "Ratusan Efek Visual & Filter Pro Unlocked", "text": "Akses bebas ke lebih dari 100+ efek visual premium, chromatic aberration, blur, hingga color correction tanpa batas."},
      {"title": "Multi-Layer Video, Audio & Vektor", "text": "Bebas menggabungkan banyak lapisan video, musik, teks, gambar, hingga grafik vektor kustom dalam satu proyek."},
      {"title": "Color Grading & Blending Mode", "text": "Penyesuaian warna profesional, saturasi, serta opsi pencampuran (blending & opacity) untuk efek visual memukau."},
      {"title": "Impor Font & Preset XML/Project", "text": "Mendukung penambahan font eksternal (.ttf/.otf) serta impor dan ekspor file preset XML atau proyek untuk alur kerja lebih cepat."}
    ],
    "featuresDesc": "Nikmati berbagai keunggulan Alight Motion Pro MOD APK untuk menciptakan animasi, motion graphics, dan editing video profesional langsung dari HP Android kamu.",
    "gallery": [
      {"src": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource124/v4/89/f1/a2/89f1a24d-f0a3-f9af-5867-9a5ccaf3ed3c/4fc9f836-15df-4483-9397-c3f829202dff_iPhone_6.5_screenshot_keyframeanimation.png/600x1300bb.webp", "alt": "Tampilan fitur animasi keyframe pro Alight Motion", "label": "Animasi Keyframe Premium"},
      {"src": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource114/v4/8a/e5/b5/8ae5b5c9-db00-70d4-c58c-50e4b1f6dcfd/5cefa302-f609-4c56-91e1-0d486a3a2d5f_iPhone_6.5_screenshot_color.png/600x1300bb.webp", "alt": "Fitur pengaturan warna premium Alight Motion", "label": "Koreksi Warna Pro"},
      {"src": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource114/v4/ec/ca/67/ecca67b0-fbee-4760-6c49-2b08178d5fc4/7745761d-8e50-4dd7-a995-6d79f1729438_iPhone_6.5_screenshot_effect.png/600x1300bb.webp", "alt": "Pilihan efek visual premium Alight Motion", "label": "Efek Visual Unlocked"}
    ],
    "downloads": [
      {"title": "Alight Motion Pro ARM64 (arm64-v8a)", "subtitle": "Direkomendasikan untuk HP Android modern 64-bit", "badge": "PREMIUM 64-BIT", "url": "https://link.dimz-wtf.web.id/dSt7uP"},
      {"title": "Alight Motion Pro ARMv7 (armeabi-v7a)", "subtitle": "Untuk HP Android tipe lama atau perangkat 32-bit", "badge": "PREMIUM 32-BIT", "url": "https://link.dimz-wtf.web.id/GECiFX"}
    ],
    "specs": [
      ["Versi Android", "Minimal Android 6.0 atau yang lebih baru (tergantung berkas)"],
      ["Kapasitas RAM", "Minimal 1.5 GB hingga 4 GB+ agar lancar saat rendering proyek berat"],
      ["Ruang Penyimpanan", "Sediakan ruang kosong yang cukup untuk file APK, cache, dan ekspor video"],
      ["Tipe Prosesor", "Chipset ARM64 atau ARMv7 yang kompatibel"]
    ],
    "steps": [
      "Unduh file APK yang sesuai dengan arsitektur prosesor smartphone Anda (ARM64 atau ARMv7).",
      "Aktifkan izin instalasi dari 'Sumber Tidak Dikenal' (Unknown Sources) pada pengaturan keamanan Android Anda.",
      "Buka folder Download dan klik file APK Alight Motion Premium untuk memulai proses instalasi.",
      "Tunggu hingga proses selesai, lalu buka aplikasi untuk menikmati semua fitur Pro secara gratis.",
      "Jika terjadi error atau gagal pasang, hapus instalan versi Alight Motion yang lama terlebih dahulu."
    ],
    "faq": [
      ["Apa keuntungan menggunakan versi Premium MOD ini?", "Semua fitur berbayar seperti efek pro, filter premium, dan fitur ekspor tanpa watermark sudah terbuka otomatis tanpa perlu berlangganan bulanan."],
      ["Bagaimana cara mengetahui HP saya ARM64 atau ARMv7?", "Anda bisa mengeceknya menggunakan aplikasi pihak ketiga seperti CPU-Z di Google Play Store untuk melihat arsitektur kernel perangkat Anda."],
      ["Apakah proyek lama saya akan hilang setelah update?", "Aplikasi modifikasi tidak menjamin sinkronisasi cloud. Disarankan untuk mencadangkan atau mengekspor proyek Anda ke format file proyek (.ampro) sebelum melakukan update."],
      ["Mengapa aplikasi sering keluar sendiri (force close)?", "Alight Motion membutuhkan performa hardware yang cukup kuat. Pastikan RAM HP Anda tersisa banyak dan kurangi penggunaan layer video beresolusi terlalu tinggi jika HP terasa berat."],
    ],
    "officialUrl": "https://play.google.com/store/apps/details?id=com.alightcreative.motion"
  },
  {
    "id": "pixellab-mod-premium-unlocked-199",
    "title": "Download PixelLab MOD APK Premium Unlocked Versi 1.9.9 Terbaru",
    "category": "APK", 
    "date": "2026-10-11", 
    "author": "DIMZ MODS",
    "sectionTitles": {
      "intro": "Tentang PixelLab MOD Premium ini",
      "features": "Fitur Unggulan Mod Premium",
      "downloads": "Link Download PixelLab MOD",
      "specs": "Spesifikasi Aplikasi",
      "steps": "Cara Install APK di Android",
      "faq": "Tanya Jawab Seputar Mod",
      "info": "Info Detail File",
      "credit": "Kredit & Dukungan",
      "details": "Catatan Penting Pengguna",
      "description": "Review Lengkap PixelLab Premium"
    },
    "credit": "PixelLab ini dikembangkan oleh pihak ketiga. Halaman ini menyediakan opsi file modifikasi melalui tautan unduhan MediaFire.",
    "image": "https://cdn.dribbble.com/userupload/40207648/file/original-e6d753641c8dc71ffa1de3b680bf4cb1.jpg?resize=752x&vertical=center",
    "description": "Buka kreativitas tanpa batas dengan PixelLab versi 1.9.9 MOD Premium Unlocked. Akses berbagai fitur editing teks, efek 3D, dan kustomisasi grafis menarik langsung di Android kamu.",
    "version": "1.9.9", 
    "size": "28.38 MB", 
    "game": "PixelLab", 
    "compatibility": "Android 5.0 atau yang lebih baru",
    "features": [
      {"title": "Bebas Iklan & Tanpa Watermark", "text": "Proses mendesain lebih fokus tanpa gangguan iklan serta hasil ekspor gambar bersih tanpa logo aplikasi."},
      {"title": "Efek Teks 3D & Preset Keren", "text": "Buat tulisan 3D dengan mudah, lengkap dengan kustomisasi bayangan, sudut pandang, dan tekstur."},
      {"title": "Fitur Masking & Hapus Latar Belakang", "text": "Potong atau hapus latar belakang gambar dengan presisi untuk kebutuhan stiker, logo, atau manipulasi foto."},
      {"title": "Manajemen Layer Fleksibel", "text": "Atur dan gabungkan banyak lapisan teks, bentuk (shapes), stiker, dan gambar tanpa batasan."},
      {"title": "Pengaturan Warna & Filter Grafis", "text": "Atur kontras, saturasi, hue, hingga efek gradasi warna untuk membuat tampilan desain lebih hidup."},
      {"title": "Dukungan Font & Preset XML Kustom", "text": "Bebas menambahkan file font (.ttf/.otf) milik sendiri serta mengimpor atau mengekspor preset desain."}
    ],
    "featuresDesc": "Nikmati berbagai fitur keunggulan versi MOD Premium untuk memaksimalkan kreativitas desain grafis dan pembuatan teks 3D di HP kamu.",
    "intro": "Sedang mencari aplikasi edit teks dan desain grafis mobile terbaik? Kamu bisa mengunduh berkas PixelLab MOD Premium Unlocked versi 1.9.9 di sini. Pastikan untuk selalu mengecek kecocokan perangkat sebelum memasang.",
    "details": [
      "Menawarkan label akses fitur premium tanpa iklan di versi 1.9.9.",
      "Gambar pada galeri merupakan ilustrasi hasil editing dan UI aplikasi.",
      "Aplikasi ini adalah versi modifikasi, disarankan tetap mempertimbangkan versi resmi demi dukungan penuh developer asli."
    ],
    "downloadUrl": "https://link.dimz-wtf.web.id/yBHms4",
    "downloads": [{
      "title": "PixelLab MOD Premium Unlocked v1.9.9",
      "subtitle": "Unduh APK Android (28.38 MB) via MediaFire",
      "badge": "APK",
      "url": "https://link.dimz-wtf.web.id/yBHms4"
    }],
    "gallery": [
      {"src": "https://play-lh.googleusercontent.com/upusSH6l0x812AbZjaoTazqPSy2fd4AKLwLhuo62CvqFZv2aXSdInOTFJTdeqfzFM6jtDntKcX0JhYCw3ZNT2PU=w526-h296-rw", "alt": "Membuat teks 3D keren di Android", "label": "TEKS 3D"},
      {"src": "https://play-lh.googleusercontent.com/o-x2JR4ueDcLOeEmqQeVe5LQcqJPJ7byaIVMZF1SwgUfgR6t0G2Ldxe_WMuPqhejf8K9w7zP6dLGvjdSL4iS-A=w526-h296-rw", "alt": "Proses masking teks dan manipulasi gambar", "label": "MASKING"},
      {"src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq7ypwLIUZ_5pR_t0u8IoMpG3HfmK9q18-pm40e5ExIA&s=10", "alt": "Ekspor gambar kualitas tinggi setelah selesai mendesain", "label": "EKSPOR HD"}
    ],
    "specs": [
      ["Nama Aplikasi", "PixelLab Premium Mod"],
      ["Versi APK", "1.9.9"],
      ["Format File", "APK (Android)"],
      ["Ukuran File", "28.38 MB"],
      ["Fitur Tambahan", "Premium / Pro Unlocked Labels"]
    ],
    "steps": [
      "Klik tombol download untuk mengunduh file APK dari MediaFire.",
      "Aktifkan opsi 'Izinkan Instalasi dari Sumber Tidak Dikenal' pada pengaturan keamanan Android.",
      "Buka file APK yang sudah diunduh, lalu klik 'Install'.",
      "Tunggu proses pemasangan selesai dan aplikasi siap digunakan untuk mendesain."
    ],
    "faq": [
      ["Apakah fitur premiumnya langsung aktif?", "Berdasarkan deskripsi file, versi ini sudah menyertakan unlock fitur premium. Namun, performa pada tiap perangkat bisa bervariasi."],
      ["Apakah file ini aman untuk HP saya?", "Sangat aman 100%, pastinya saya menjamin tidak ada virus atau apapun dan juga kami telah mencoba nya terlebih dahulu sebelum di upload."]
    ]
  },
  {
    "id": "space-racing-3d-mod-18133",
    "title": "Download Space Racing 3D MOD Versi 1.8.133",
    "category": "Games", 
    "date": "2026-10-13", 
    "author": "DIMZ MODS",
    "sectionTitles": {
      "intro": "Status Unduhan Game Anda",
      "features": "Keuntungan Menggunakan Versi MOD Ini",
      "downloads": "Proses Pengunduhan APK",
      "specs": "Spesifikasi Game yang Diberlakukan",
      "steps": "Panduan Pemasangan Setelah Selesai Download",
      "faq": "Pertanyaan Sering Ditanyakan Mengenai Game",
      "info": "Detail Ukuran & Informasi Berkas",
      "credit": "Sumber & Dukungan",
      "details": "Catatan Penting Pengunduhan",
      "description": "Tentang Game Space Racing 3D"
    },
    "credit": "Tautan unduhan bersumber dari file komunitas oleh pihak ketiga.",
    "image": "https://m.media-amazon.com/images/I/81kFXfKD5oL.jpg",
    "description": "Proses unduhan berkas APK Space Racing 3D MOD v1.8.133 berukuran 14.23MB sedang berjalan. Nikmati sensasi balapan pesawat luar angkasa dengan fitur modifikasi instan setelah instalasi selesai.",
    "version": "1.8.133", 
    "size": "14.23 MB", 
    "game": "Space Racing 3D", 
    "compatibility": "Android (Pastikan izin instalasi dari sumber tidak dikenal sudah aktif)",
    "features": [
      {"title": "Uang & Koin Tanpa Batas (Unlimited Money)", "text": "Dapatkan saldo melimpah sejak awal permainan untuk membeli dan melakukan upgrade semua jenis pesawat jet luar angkasa."},
      {"title": "Buka Semua Pesawat & Lintasan", "text": "Akses langsung ke seluruh jajaran pesawat futuristik berkecepatan tinggi serta sirkuit balap sci-fi tanpa terkunci."},
      {"title": "Upgrade Performa Maksimal", "text": "Tingkatkan akselerasi, kecepatan maksimum, armor, dan senjata pesawat hingga level tertinggi dengan mudah."},
      {"title": "Pengalaman Main Tanpa Iklan", "text": "Nikmati sensasi balapan antargalaksi yang seru dan intens tanpa terganggu oleh iklan yang bermunculan."},
      {"title": "Mode Balapan Variatif & Senjata Terintegrasi", "text": "Gunakan berbagai senjata canggih dan item pendorong kecepatan (boost) untuk menumbangkan lawan di lintasan 3D."},
      {"title": "Grafik 3D Sci-Fi Ringan", "text": "Tampilan visual futuristik yang memanjakan mata namun tetap responsif dan lancar di berbagai tipe HP Android."}
    ],
    "featuresDesc": "Rasakan keseruan balapan pesawat luar angkasa 3D dengan berbagai keuntungan fitur MOD versi 1.8.133 untuk pengalaman bermain yang lebih maksimal.",
    "intro": "Unduhan Anda sedang dipersiapkan! Berkas APK Space Racing 3D MOD versi 1.8.133 ini akan segera tersimpan ke folder download perangkat Android Anda.",
    "details": [
      "File sedang ditarik dari server MediaFire dengan ukuran 14.23MB.",
      "Gunakan koneksi internet yang stabil agar proses download tidak terputus di tengah jalan.",
      "Siapkan ruang penyimpanan yang cukup sebelum mengekstrak atau memasang APK."
    ],
    "downloadUrl": "https://link.dimz-wtf.web.id/f99SwH",
    "downloads": [{
      "title": "Download Space Racing 3D MOD v1.8.133",
      "subtitle": "Ukuran File: 14.23MB Via MediaFire",
      "badge": "APK Downloader",
      "url": "https://link.dimz-wtf.web.id/f99SwH"
    }],
    "gallery": [
      {"src": "https://store-images.s-microsoft.com/image/apps.38725.9007199266717950.fd7b21a4-9746-4c29-95e2-c5b4abc51e0f.7379b197-1cfa-412a-9446-7a05cd6c7801", "alt": "Aksi balapan pesawat jet futuristik di luar angkasa", "label": "PREVIEW BALAPAN"},
      {"src": "https://cdn.soft112.com/space-racing-3d/00/00/0F/W1/00000FW1SH/pad_screenshot.png", "alt": "Pilihan pesawat balap canggih dengan senjata terintegrasi", "label": "KENDARAAN JET"},
      {"src": "https://img.utdstc.com/screen/3a3/e9e/3a3e9e354b84cb6d95f9bb3756aa2d578cb95fec2e8d8e6712140cf335796167:600", "alt": "Gameplay balapan melintasi sirkuit sci-fi berkecepatan tinggi", "label": "GAMEPLAY 3D"},
      {"src": "https://img.utdstc.com/screen/57f/1dd/57f1dd633080d954611461ae7d46f62d7a255c5919c3beb0aa48445e0f1fa83f:600", "alt": "Efek boost kecepatan menembus terowongan futuristik", "label": "AKSELERASI"}
    ],
    "specs": [
      ["Nama Game", "Space Racing 3D"],
      ["Versi Unduhan", "1.8.133"],
      ["Format File", "APK (Android Application Package)"],
      ["Ukuran Unduhan", "14.23 MB"]
    ],
    "steps": [
      "Klik tombol download untuk mengunduh file APK dari MediaFire.",
      "Tunggu hingga notifikasi 'Download Selesai' muncul di bilah status ponsel Anda.",
      "Buka File Manager, lalu cari file 'Space_Racing_3D_MOD_Versi_1.8.133.apk'.",
      "Klik file APK tersebut dan aktifkan opsi 'Izinkan Instalasi dari Sumber Tidak Dikenal' jika diminta.",
      "Tekan tombol 'Instal' dan tunggu hingga ikon game muncul di layar utama, lalu mainkan!"
    ],
    "faq": [
      ["Mengapa proses download lambat?", "Koneksi server gratisan kadang membatasi kecepatan, Anda bisa mencoba klik 'Repair your download' jika macet."],
      ["Apakah mod langsung aktif setelah selesai dipasang?", "Ya, umumnya fitur modifikasi uang atau pesawat langsung terbuka begitu Anda membuka game untuk pertama kalinya."]
    ]
  },
  {
    id: "hill-climb-racing-mod-1481",
    title: "Download Hill Climb Racing MOD APK v1.48.1 (Unlimited Money)",
    category: "Games", 
    date: "2026-10-14", 
    author: "DIMZ MODS",
    credit: "Game asli dikembangkan oleh Fingersoft. Modifikasi oleh DIMZ MODS.",
    image: "https://cdn.aptoide.com/imgs/5/3/6/5362116998d0698cb196982b19586ad9_fgraphic.jpg",
    description: "Nikmati keseruan balapan tanpa batas! Download Hill Climb Racing MOD APK versi 1.48.1 terbaru dan rasakan sensasi menaklukkan berbagai medan ekstrem dengan kendaraan impianmu.",
    version: "1.48.1", 
    size: "Cek ukuran langsung di MediaFire", 
    game: "Hill Climb Racing", 
    compatibility: "Android 5.0 atau yang lebih tinggi",
    "features": [
      {"title": "Uang & Koin Tanpa Batas (Unlimited Money)", "text": "Dapatkan saldo melimpah sejak awal permainan untuk membeli dan melakukan upgrade semua jenis pesawat jet luar angkasa."},
      {"title": "Buka Semua Pesawat & Lintasan", "text": "Akses langsung ke seluruh jajaran pesawat futuristik berkecepatan tinggi serta sirkuit balap sci-fi tanpa terkunci."},
      {"title": "Upgrade Performa Maksimal", "text": "Tingkatkan akselerasi, kecepatan maksimum, armor, dan senjata pesawat hingga level tertinggi dengan mudah."},
      {"title": "Pengalaman Main Tanpa Iklan", "text": "Nikmati sensasi balapan antargalaksi yang seru dan intens tanpa terganggu oleh iklan yang bermunculan."},
      {"title": "Mode Balapan Variatif & Senjata Terintegrasi", "text": "Gunakan berbagai senjata canggih dan item pendorong kecepatan (boost) untuk menumbangkan lawan di lintasan 3D."},
      {"title": "Grafik 3D Sci-Fi Ringan", "text": "Tampilan visual futuristik yang memanjakan mata namun tetap responsif dan lancar di berbagai tipe HP Android."}
    ],
    "featuresDesc": "Rasakan keseruan balapan pesawat luar angkasa 3D dengan berbagai keuntungan fitur MOD versi 1.8.133 untuk pengalaman bermain yang lebih maksimal.",
    intro: "Siap melibas perbukitan terjal? Klik tombol download di bawah untuk mengunduh Hill Climb Racing MOD v1.48.1! Dapatkan fitur modifikasi seru dan kendaraan favoritmu sekarang juga. Pastikan ruang penyimpanan perangkatmu cukup sebelum mengunduh.",
    details: [
      "Fitur MOD v1.48.1 siap digunakan untuk pengalaman bermain yang lebih seru.",
      "Proses unduh cepat dan mudah langsung melalui tautan MediaFire.",
      "Selalu cadangkan data game kamu sebelum melakukan instalasi APK MOD ini."
    ],
    downloadUrl: "https://link.dimz-wtf.web.id/yyGTbi",
    downloads: [
      {
        title: "Download Hill Climb Racing MOD v1.48.1",
        subtitle: "Klik di sini untuk mengunduh berkas APK Android via MediaFire",
        badge: "APK MOD",
        url: "https://link.dimz-wtf.web.id/yyGTbi"
      }
    ],
    gallery: [
      {src: "https://img.utdstc.com/screen/6b3/637/6b36378a6725af3e1d2ddd1681c10b6d582ec7df77a0ab97d34d9280d9b58253:600", alt: "Tampilan arena menanjak", label: "MEDAN EXTREME"},
      {src: "https://store-images.microsoft.com/image/apps.12987.9007199266379485.b73b32ad-e647-4a7e-ae6e-9c2d4d675046.e701248a-3d43-4a45-aa61-feb37b5e1c5a", alt: "Tampilan grafik perbukitan", label: "LOKASI KEREN"},
      {src: "https://img.utdstc.com/screen/d4a/daf/d4adaf95eb3b2c9a522badcf196ba556db06fa03fd25fbc59f2f72a06bf68a58:600", alt: "Contoh screenshot gameplay", label: "SCREENSHOT GAMEPLAY"}
    ],
    specs: [
      ["Nama Game", "Hill Climb Racing"],
      ["Versi Game", "1.48.1 (MOD)"],
      ["Format File", "APK"],
      ["Ukuran File", "Lihat di MediaFire"],
      ["Developer", "Fingersoft"],
      ["Akses MOD", "Fitur Unlocked"]
    ],
    steps: [
      "Klik link download di atas untuk menuju ke halaman MediaFire.",
      "Unduh file APK Hill Climb Racing MOD sampai selesai.",
      "Aktifkan izin 'Sumber Tidak Dikenal' (Unknown Sources) di pengaturan Android kamu.",
      "Buka file APK yang sudah diunduh, lalu lakukan instalasi dan selamat bermain!"
    ],
    faq: [
      ["Apakah file ini gratis untuk diunduh?", "Ya, kamu bisa mengunduhnya secara gratis melalui tombol unduh MediaFire."],
      ["Bagaimana cara memasang APK MOD ini?", "Cukup unduh file APK-nya, izinkan instalasi dari sumber luar, lalu pasang di HP kamu."]
    ]
  }
];

const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
const esc = value => String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const dateLabel = value => { const d=new Date(value+"T00:00:00"); return Number.isNaN(+d) ? value : d.toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}); };
const iconText = name => (name || "D").trim().slice(0,1).toUpperCase();
let selectedCategory = "Semua";
let searchTerm = "";
let toastTimer;

function notify(message){
  let toast=$("#toast");
  if(!toast){toast=document.createElement("div");toast.id="toast";toast.className="toast";toast.setAttribute("role","status");document.body.append(toast);}
  toast.textContent=message;toast.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove("show"),2300);
}
function safeImage(img){img.addEventListener("error",()=>{img.src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'%3E%3Crect width='800' height='450' fill='%2320232b'/%3E%3Ctext x='50%25' y='48%25' text-anchor='middle' fill='%23a78bfa' font-size='48' font-family='Arial' font-weight='bold'%3EDIMZ MODS%3C/text%3E%3Ctext x='50%25' y='60%25' text-anchor='middle' fill='%23969aa8' font-size='18' font-family='Arial'%3EPreview gambar%3C/text%3E%3C/svg%3E";},{once:true});}
function cardMarkup(p){
 return `<article class="post-card">
  <a class="post-image" href="?post=${encodeURIComponent(p.id)}" aria-label="Baca ${esc(p.title)}">
   <img loading="lazy" decoding="async" src="${esc(p.image)}" alt="Preview ${esc(p.title)}"><span class="category-badge">${esc(p.category)}</span>
  </a>
  <div class="post-body"><div class="post-meta"><span>${esc(dateLabel(p.date))}</span><i class="meta-dot"></i><span>${esc(p.game)}</span></div>
   <h3 class="post-title"><a href="?post=${encodeURIComponent(p.id)}">${esc(p.title)}</a></h3>
   <p class="post-description">${esc(p.description)}</p>
   <div class="post-footer"><span class="author"><span class="author-icon">${esc(iconText(p.author))}</span>${esc(p.author)}</span><a class="read-link" href="?post=${encodeURIComponent(p.id)}">Baca detail &rarr;</a></div>
  </div>
 </article>`;
}
function renderGrid(){
 const grid=$("#postGrid");if(!grid)return;
 const list=POSTS.filter(p=>(selectedCategory==="Semua"||p.category===selectedCategory)&&`${p.title} ${p.description} ${p.category} ${p.game}`.toLowerCase().includes(searchTerm));
 grid.innerHTML=list.map(cardMarkup).join("");
 $$(".post-image img",grid).forEach(safeImage);
 $("#emptyState")?.classList.toggle("hidden",list.length>0);
}
function renderDetail(post){
 const main=$(".container");
 if(!main)return;
 main.innerHTML=`<section class="detail-page">
 <a class="back-link" href="./">← Kembali ke semua postingan</a>
 <div class="detail-layout"><div>
  <article class="detail-main"><img class="detail-cover" id="detailCover" src="${esc(post.image)}" alt="Preview ${esc(post.title)}">
   <div class="detail-content"><span class="eyebrow">${esc(post.category)} / DIMZ MODS</span><h1 class="detail-title">${esc(post.title)}</h1>
   <div class="post-meta"><span>${esc(dateLabel(post.date))}</span><i class="meta-dot"></i><span>Diposting oleh ${esc(post.author)}</span></div>
   <p class="detail-desc">${esc(post.description)}</p>
   ${post.intro?`<section class="detail-section"><h2>${esc(post.sectionTitles?.intro || "Ringkasan")}</h2><p>${esc(post.intro)}</p></section>`:""}
   <div class="detail-actions">${post.downloads?"":`<a class="action-button primary" href="${esc(post.downloadUrl)}" target="_blank" rel="noopener noreferrer">↓ Download file</a>`}</div><div class="social-share" aria-label="Bagikan ke media sosial"><a class="social-btn whatsapp" id="shareWhatsApp" target="_blank" rel="noopener noreferrer" aria-label="Bagikan ke WhatsApp"><i class="fa-brands fa-whatsapp"></i><span>WhatsApp</span></a><a class="social-btn facebook" id="shareFacebook" target="_blank" rel="noopener noreferrer" aria-label="Bagikan ke Facebook"><i class="fa-brands fa-facebook-f"></i><span>Facebook</span></a><a class="social-btn telegram" id="shareTelegram" target="_blank" rel="noopener noreferrer" aria-label="Bagikan ke Telegram"><i class="fa-brands fa-telegram"></i><span>Telegram</span></a><a class="social-btn x-social" id="shareX" target="_blank" rel="noopener noreferrer" aria-label="Bagikan ke X"><i class="fa-brands fa-x-twitter"></i><span>X</span></a><button class="social-btn instagram" id="shareInstagram" type="button" aria-label="Salin tautan untuk Instagram"><i class="fa-brands fa-instagram"></i><span>Instagram</span></button></div>
   ${post.features?`<section class="detail-section"><h2>${esc(post.sectionTitles?.features || "Fitur dan kelebihan")}</h2><div class="post-feature-grid">${post.features.map(f=>`<div class="post-feature"><b>${esc(f.title)}</b><p>${esc(f.text)}</p></div>`).join("")}</div><p class="muted small-note">${esc(post.featuresDesc || "")}</p></section>`:""}
   ${post.gallery?`<section class="detail-section"><h2>${esc(post.sectionTitles?.gallery || "Tampilan aplikasi")}</h2><p>Gambar berikut merupakan referensi tampilan. Sumber eksternal dapat berubah atau tidak tersedia.</p><div class="gallery-carousel" data-carousel><div class="gallery-track">${post.gallery.map((g,i)=>`<button class="gallery-slide${i===0?" active":""}" data-slide="${i}" type="button" aria-label="Perbesar ${esc(g.alt)}" ${i===0?"":"hidden"}><img loading="lazy" src="${esc(g.src)}" alt="${esc(g.alt)}"><span>${esc(g.label)}</span></button>`).join("")}</div><button class="gallery-nav prev" type="button" data-prev aria-label="Gambar sebelumnya"><i class="fa-solid fa-chevron-left"></i></button><button class="gallery-nav next" type="button" data-next aria-label="Gambar berikutnya"><i class="fa-solid fa-chevron-right"></i></button><div class="gallery-count" aria-live="polite"><span data-current>1</span> / ${post.gallery.length}</div></div>${post.officialUrl?`<p><a class="gallery-link" href="${esc(post.officialUrl)}" target="_blank" rel="noopener noreferrer">Lihat aplikasi resmi di Google Play ↗</a></p>`:""}</section>`:""}
   ${post.downloads?`<section class="detail-section" id="download"><h2>${esc(post.sectionTitles?.downloads || "Pilihan unduhan")}</h2><p>Pastikan arsitektur dan sumber berkas sesuai. Tautan berikut menuju halaman unduhan eksternal; keamanan berkas modifikasi belum diverifikasi secara independen.</p><div class="post-download-list">${post.downloads.map(d=>`<div class="post-download"><span class="post-download-badge">${esc(d.badge)}</span><div class="post-download-copy"><b>${esc(d.title)}</b><span>${esc(d.subtitle)}</span></div><a class="action-button primary" href="${esc(d.url)}" target="_blank" rel="noopener noreferrer">Unduh ↗</a></div>`).join("")}</div></section>`:""}
   ${post.specs?`<section class="detail-section"><h2>${esc(post.sectionTitles?.specs || "Spesifikasi minimum")}</h2><div class="info-list">${post.specs.map(s=>`<div class="info-row"><span>${esc(s[0])}</span><span>${esc(s[1])}</span></div>`).join("")}</div></section>`:""}
   ${post.steps?`<section class="detail-section"><h2>${esc(post.sectionTitles?.steps || "Panduan sebelum memasang")}</h2><ul>${post.steps.map(s=>`<li>${esc(s)}</li>`).join("")}</ul></section>`:""}
   ${post.faq?`<section class="detail-section"><h2>${esc(post.sectionTitles?.faq || "Pertanyaan umum")}</h2>${post.faq.map(q=>`<details class="post-faq"><summary>${esc(q[0])}</summary><p>${esc(q[1])}</p></details>`).join("")}</section>`:""}
   ${post.showDescription === false ? "" : ((post.detailDescription ?? post.description) ? `<section class="detail-section"><h2>${esc(post.sectionTitles?.description || "Deskripsi")}</h2><p>${esc(post.detailDescription ?? post.description)}</p></section>` : "") }
   <section class="detail-section"><h2>${esc(post.sectionTitles?.info || "Informasi file")}</h2><div class="info-list">
    <div class="info-row"><span>Kategori</span><span>${esc(post.category)}</span></div><div class="info-row"><span>Game / Platform</span><span>${esc(post.game)}</span></div><div class="info-row"><span>Versi</span><span>${esc(post.version)}</span></div><div class="info-row"><span>Ukuran file</span><span>${esc(post.size)}</span></div><div class="info-row"><span>Kompatibilitas</span><span>${esc(post.compatibility)}</span></div>
   </div></section>
   ${post.credit ? `<section class="detail-section"><h2>${esc(post.sectionTitles?.credit || "Credit")}</h2><p>${esc(post.credit)}</p></section>` : ""}
   ${Array.isArray(post.customSections) ? post.customSections.filter(s => s && typeof s.title === "string" && s.title.trim() && typeof s.content === "string" && s.content.trim()).map(s => `<section class="detail-section"><h2>${esc(s.title)}</h2><p>${esc(s.content)}</p></section>`).join("") : ""}
   ${Array.isArray(post.details) && post.details.length ? `<section class="detail-section"><h2>${esc(post.sectionTitles?.details || "Catatan pemasangan")}</h2><ul>${post.details.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></section>` : ""}
  </div></article>
  <section class="comment-card" id="comments"><h2>Komentar</h2><p class="muted">Tinggalkan pendapat atau pertanyaan tanpa perlu login.</p>
   <form class="comment-form" id="commentForm"><input class="field" id="commentName" maxlength="40" placeholder="Nama kamu (wajib)" required><textarea class="field" id="commentText" maxlength="1000" placeholder="Tulis komentar..." required></textarea><button class="action-button primary" type="submit">Kirim komentar ↗</button></form>
   <div class="comment-list" id="commentList"></div><p class="notice" id="commentNotice">Nama akun acak dan komentar awal dibuat otomatis untuk mengisi tampilan. Komentar asli dari pengunjung baru tersimpan bersama setelah Supabase diaktifkan.</p>
  </section>
 </div>
 <aside class="detail-sidebar"><section class="side-card"><h3>Informasi postingan</h3><div class="info-list"><div class="info-row"><span>Penulis</span><span>${esc(post.author)}</span></div><div class="info-row"><span>Kategori</span><span>${esc(post.category)}</span></div><div class="info-row"><span>Tanggal</span><span>${esc(dateLabel(post.date))}</span></div></div></section>
 <section class="side-card"><h3>Pengingat keamanan</h3><p>Pastikan tautan dan file berasal dari sumber tepercaya. Periksa file sebelum memasang dan ikuti petunjuk pembuatnya.</p></section>
 <section class="side-card about-side-card"><h3>Jelajahi DIMZ MODS</h3><p>Temukan postingan lain, koleksi game, aplikasi, dan tools komunitas.</p><a class="action-button side-browse-button" href="./#posts" style="margin-top:12px;width:100%">Lihat postingan ↗</a></section></aside>
 </div></section>`;
 document.title=`${post.title} — DIMZ MODS`;
 safeImage($("#detailCover"));
 const pageUrl=location.href;
 const shareText=encodeURIComponent(post.title+" — "+post.description+" "+pageUrl);
 const shareUrl=encodeURIComponent(pageUrl);
 $("#shareWhatsApp").href=`https://wa.me/?text=${shareText}`;
 $("#shareFacebook").href=`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
 $("#shareTelegram").href=`https://t.me/share/url?url=${shareUrl}&text=${encodeURIComponent(post.title)}`;
 $("#shareX").href=`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${shareUrl}`;
 $("#shareInstagram").onclick=()=>copyText(pageUrl,"Tautan disalin. Tempelkan di Instagram atau DM.");
 const carousel=$("[data-carousel]");
 if(carousel){
   const slides=$$("[data-slide]",carousel);let active=0;
   const show=(n)=>{active=(n+slides.length)%slides.length;slides.forEach((s,i)=>{s.hidden=i!==active;s.classList.toggle("active",i===active)});const count=$("[data-current]",carousel);if(count)count.textContent=String(active+1);};
   $("[data-prev]",carousel).onclick=()=>show(active-1);
   $("[data-next]",carousel).onclick=()=>show(active+1);
   let autoSlide=setInterval(()=>show(active+1),4500);
   const restartAuto=()=>{clearInterval(autoSlide);autoSlide=setInterval(()=>show(active+1),4500);};
   $("[data-prev]",carousel).addEventListener("click",restartAuto);
   $("[data-next]",carousel).addEventListener("click",restartAuto);
   carousel.addEventListener("mouseenter",()=>clearInterval(autoSlide));
   carousel.addEventListener("mouseleave",restartAuto);
   carousel.addEventListener("focusin",()=>clearInterval(autoSlide));
   carousel.addEventListener("focusout",restartAuto);
   const ensureViewer=()=>{
     let viewer=$("#imageLightbox");
     if(viewer)return viewer;
     viewer=document.createElement("div");viewer.id="imageLightbox";viewer.className="image-lightbox";
     viewer.innerHTML='<button type="button" class="lightbox-close" aria-label="Tutup gambar">×</button><button type="button" class="lightbox-prev" aria-label="Gambar sebelumnya">‹</button><img alt=""><button type="button" class="lightbox-next" aria-label="Gambar berikutnya">›</button><p></p>';
     document.body.append(viewer);
     viewer.addEventListener("click",ev=>{if(ev.target===viewer||ev.target.closest(".lightbox-close"))viewer.classList.remove("open");});
     $(".lightbox-prev",viewer).onclick=()=>showViewer(active-1);
     $(".lightbox-next",viewer).onclick=()=>showViewer(active+1);
     document.addEventListener("keydown",ev=>{if(!viewer.classList.contains("open"))return;if(ev.key==="Escape")viewer.classList.remove("open");if(ev.key==="ArrowLeft")showViewer(active-1);if(ev.key==="ArrowRight")showViewer(active+1);});
     return viewer;
   };
   const showViewer=n=>{
     show(n);const viewer=ensureViewer(),current=slides[active],image=$("img",current);
     $(".image-lightbox img",viewer).src=image.src;
     $(".image-lightbox img",viewer).alt=image.alt;
     $(".image-lightbox p",viewer).textContent=$("span",current)?.textContent||image.alt;
     viewer.classList.add("open");
   };
   carousel.addEventListener("click",e=>{const slide=e.target.closest("[data-slide]");if(slide)showViewer(Number(slide.dataset.slide));});
   carousel.addEventListener("keydown",e=>{if(e.key==="ArrowLeft")show(active-1);if(e.key==="ArrowRight")show(active+1)});
 }
 renderComments(post.id);
 $("#commentForm").addEventListener("submit",async e=>{
   e.preventDefault();
   const name=$("#commentName").value.trim(),text=$("#commentText").value.trim();
   if(!name||!text)return;
   if(!commentsReady()){notify("Komentar publik belum diaktifkan. Atur Supabase di app.js.");return;}
   const submit=$("#commentForm button[type=submit]");submit.disabled=true;submit.textContent="Mengirim...";
   try{await submitSharedComment(post.id,name,text);$("#commentText").value="";await renderComments(post.id);notify("Komentar berhasil dikirim untuk semua pengunjung");}
   catch(err){notify("Komentar gagal dikirim. Periksa konfigurasi layanan.");}
   finally{submit.disabled=false;submit.textContent="Kirim komentar ↗";}
 });
}
function commentsReady(){return Boolean(COMMENTS_CONFIG.supabaseUrl.trim()&&COMMENTS_CONFIG.anonKey.trim());}
async function loadSharedComments(id){
 if(!commentsReady())return [];
 const url=`${COMMENTS_CONFIG.supabaseUrl.replace(/\/+$/,"")}/rest/v1/${COMMENTS_CONFIG.table}?select=id,post_id,name,body,created_at&post_id=eq.${encodeURIComponent(id)}&order=created_at.desc&limit=100`;
 const res=await fetch(url,{headers:{apikey:COMMENTS_CONFIG.anonKey,Authorization:`Bearer ${COMMENTS_CONFIG.anonKey}`}});
 if(!res.ok)throw new Error("Gagal mengambil komentar publik");
 return await res.json();
}
async function submitSharedComment(id,name,body){
 const url=`${COMMENTS_CONFIG.supabaseUrl.replace(/\/+$/,"")}/rest/v1/${COMMENTS_CONFIG.table}`;
 const res=await fetch(url,{method:"POST",headers:{apikey:COMMENTS_CONFIG.anonKey,Authorization:`Bearer ${COMMENTS_CONFIG.anonKey}`,"Content-Type":"application/json",Prefer:"return=minimal"},body:JSON.stringify({post_id:id,name,body})});
 if(!res.ok)throw new Error("Gagal menyimpan komentar publik");
}
async function renderComments(id){
 const box=$("#commentList");if(!box)return;
 const notice=$("#commentNotice");
 let comments=DEMO_COMMENTS.slice();
 if(commentsReady()){
   try{
     const remote=await loadSharedComments(id);
     comments=[...remote.map(c=>({name:c.name,text:c.body,date:c.created_at})),...DEMO_COMMENTS];
     if(notice)notice.textContent="Komentar pengunjung tersimpan di layanan publik. Nama akun acak dan komentar awal pada halaman ini bukan kiriman pengunjung.";
   }catch{
     if(notice)notice.textContent="Layanan komentar belum bisa dihubungi. Komentar awal yang dibuat otomatis tetap ditampilkan; coba lagi nanti.";
   }
 }else{
   if(notice)notice.textContent="Komentar awal dengan nama acak dibuat otomatis untuk tampilan. Agar komentar pengunjung terlihat oleh semua orang, konfigurasi Supabase di app.js harus diisi.";
 }
 box.innerHTML=comments.map(c=>`<article class="comment-item"><div class="comment-head"><span>${esc(c.name)}${c.generated?' <small class=\"generated-tag\">AKUN ACAK</small>':''}</span><time class="comment-date">${esc(new Date(c.date).toLocaleString("id-ID",{dateStyle:"medium",timeStyle:"short"}))}</time></div><p class="comment-text">${esc(c.text)}</p></article>`).join("");
}
async function copyText(text,success="Berhasil disalin"){
 try{if(navigator.clipboard&&isSecureContext)await navigator.clipboard.writeText(text);else{const area=document.createElement("textarea");area.value=text;area.style.position="fixed";area.style.opacity="0";document.body.append(area);area.select();const ok=document.execCommand("copy");area.remove();if(!ok)throw Error("copy failed");}notify(success);}
 catch{notify("Tidak bisa menyalin otomatis. Salin link dari address bar.");}
}
async function sharePost(post,url){
 if(navigator.share){try{await navigator.share({title:post.title,text:post.description,url});}catch(e){if(e.name!=="AbortError")notify("Share tidak tersedia.");}}
 else copyText(url,"Link siap dibagikan");
}
function initHome(){
 $("#year").textContent=new Date().getFullYear();
 renderGrid();
 $("#searchInput").addEventListener("input",e=>{searchTerm=e.target.value.trim().toLowerCase();renderGrid();});
 $("#categoryFilters").addEventListener("click",e=>{const b=e.target.closest("[data-category]");if(!b)return;selectedCategory=b.dataset.category;$$(".filter-chip").forEach(x=>x.classList.toggle("selected",x===b));renderGrid();});
 $$("[data-category-link]").forEach(a=>a.addEventListener("click",()=>{selectedCategory=a.dataset.categoryLink;$$(".filter-chip").forEach(x=>x.classList.toggle("selected",x.dataset.category===selectedCategory));renderGrid();}));

}
(function start(){
 const year=$("#year");if(year)year.textContent=new Date().getFullYear();
 const menu=$("#menuToggle"),nav=$("#mainNav");
 if(menu&&nav){
   menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open));});
   nav.addEventListener("click",e=>{const a=e.target.closest("a");if(!a)return;nav.classList.remove("open");menu.setAttribute("aria-expanded","false");if(a.hasAttribute("data-category-link")&&location.search.includes("post=")){e.preventDefault();location.href=`./?category=${encodeURIComponent(a.dataset.categoryLink)}#posts`;}});
 }
 const id=new URLSearchParams(location.search).get("post");
 const post=POSTS.find(p=>p.id===id);
 if(post)renderDetail(post);else if(id){document.title="Postingan tidak ditemukan — DIMZ MODS";$(".container").innerHTML='<section class="detail-page"><a class="back-link" href="./">← Kembali</a><div class="empty-state"><h3>Postingan tidak ditemukan</h3><p>Postingan mungkin sudah dihapus atau tautannya salah.</p></div></section>';}else {initHome();const category=new URLSearchParams(location.search).get("category");if(category&&["GTA","Bully","APK","Games","Others"].includes(category)){selectedCategory=category;$$(".filter-chip").forEach(x=>x.classList.toggle("selected",x.dataset.category===selectedCategory));renderGrid();}}
})();
