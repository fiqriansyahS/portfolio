window.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;
  document.documentElement.style.setProperty("--mx", `${x}%`);
  document.documentElement.style.setProperty("--my", `${y}%`);
});

/* ---------------------------
  Reveal on scroll
---------------------------- */
const reveals = document.querySelectorAll(".reveal");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-in");
    });
  },
  { threshold: 0.15 }
);
reveals.forEach((el) => io.observe(el));

/* ---------------------------
  Tilt cards (initial)
---------------------------- */
const tilts = document.querySelectorAll(".tilt");
tilts.forEach((card) => {
  let rect;

  const onMove = (e) => {
    rect = rect || card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rx = (y / rect.height - 0.5) * -10;
    const ry = (x / rect.width - 0.5) * 12;

    card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`;
  };

  const onLeave = () => {
    rect = null;
    card.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  };

  card.addEventListener("mousemove", onMove);
  card.addEventListener("mouseleave", onLeave);
});

/* ---------------------------
  Magnetic buttons
---------------------------- */
const magnets = document.querySelectorAll(".magnetic");
magnets.forEach((btn) => {
  let rect;

  const move = (e) => {
    rect = rect || btn.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    btn.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
  };

  const leave = () => {
    rect = null;
    btn.style.transform = "translate(0px, 0px)";
  };

  btn.addEventListener("mousemove", move);
  btn.addEventListener("mouseleave", leave);
});

/* ---------------------------
  Contact form demo + alert
---------------------------- */
const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // ✅ Alert sukses
    alert("✅ Pesan terkirim. Terima kasih!");

    // Optional: pesan kecil di bawah form (kalau masih mau)
    if (note) {
      note.textContent = "Pesan berhasil dikirim.";
      setTimeout(() => (note.textContent = ""), 3000);
    }

    // Reset form
    form.reset();
  });
}


const portfolioData = [
  /* ================= YOUTUBE LONG VIDEO (4) ================ */
  {
    id: "yt-1",
    title: "KENAPA KITA HARUS PEDULI DENGAN SUMATERA?",
    category: "Long Video (YouTube)",
    type: "youtube",
    sourceUrl: "https://youtu.be/4S5Z7V8j-EA",
    embedUrl: "https://www.youtube.com/embed/4S5Z7V8j-EA",
    thumbnailUrl: "https://img.youtube.com/vi/4S5Z7V8j-EA/hqdefault.jpg",
    description:
      "Dalam 15 menit, video ini mengajak kamu memahami apa yang sedang terjadi di Sumatera: bukan sekadar bencana, tapi hasil dari keputusan, sistem, dan cara kita memperlakukan alam selama bertahun-tahun",
    tags: ["Cinematic - Monolog Rian Fahardhi"],
  },
  {
    id: "yt-2",
    title: "Museum Balla Lompoa",
    category: "Long Video (YouTube)",
    type: "youtube",
    sourceUrl: "https://youtu.be/iDwKQiJnNgs?si=gPw2Jc9qNLiWak5n",
    embedUrl: "https://www.youtube.com/embed/iDwKQiJnNgs",
    thumbnailUrl: "https://img.youtube.com/vi/iDwKQiJnNgs/hqdefault.jpg",
    description:
      "Museum Balla Lompoa Gowa adalah sebuah museum sejarah yang berisi koleksi artefak dan warisan budaya, dari kerajaan Gowa. Konten ini berfokus pada penjelasan sejarah museum, koleksi benda-benda bersejarah, serta nilai budaya yang tersimpan di dalamnya, dengan melibatkan narasumber dibidang Akademik, Sejarawan, serta pemerhati Adat Budaya.",
    tags: ["Semi-dokumenter", "Historical Site", "Museum"],
  },
  {
    id: "yt-3",
    title: "ILMU TASAWUF DATO RI TIRO DI TANAH PANRITA LOPI BULUKUMBA",
    category: "Long Video (YouTube)",
    type: "youtube",
    sourceUrl: "https://youtu.be/GJR7u2azBGU?si=27ddixmt9_ldhsf_",
    embedUrl: "https://www.youtube.com/embed/GJR7u2azBGU",
    thumbnailUrl: "https://img.youtube.com/vi/GJR7u2azBGU/hqdefault.jpg",
    description:
      "Ilmu Tasawuf Dato ri Tiro di Tanah Panrita Lopi - Bulukumba merupakan video yang membahas tentang peran Dato Ri Tiro di tanah Bulukumba. Konten ini berfokus pada sejarah dan ajaran tasawuf yang dibawa oleh Dato Ri Tiro (tokoh penting dalam tradisi spiritual di tanah Panrita Lopi), serta bagaimana ajaran tersebut berkembang dan dipraktikkan khususnya di Bulukumba.",
    tags: ["Semi-dokumenter", "Spiritual", "History"],
  },
  {
    id: "yt-4",
    title: "MAUJUD BUDAYA - REFLEKSI ETIKA DALAM SIRI' NA PACCE",
    category: "Long Video (YouTube)",
    type: "youtube",
    sourceUrl:
      "https://www.youtube.com/watch?si=XZhp7bGvLgz_drdL&v=Kr2JB3yikpQ&feature=youtu.be",
    embedUrl: "https://www.youtube.com/embed/Kr2JB3yikpQ",
    thumbnailUrl: "https://img.youtube.com/vi/Kr2JB3yikpQ/hqdefault.jpg",
    description:
      "Membahas tentang nilai budaya dan etika yang terkandung dalam konsep Siri’ na Pacce — prinsip moral penting dalam budaya Bugis-Makassar. Menampilkan penjelasan nilai-nilai etika dalam konteks kehidupan sehari-hari, contoh praktik dalam masyarakat, serta refleksi bagaimana Siri’ na Pacce membentuk perilaku sosial dan hubungan antar manusia dan Tuhan.",
    tags: ["Dialog", "Budaya", "Etika"],
  },

  /* ============== PROJECT VIDEO GOOGLE DRIVE (5) ============ */
  {
    id: "drv-project-1",
    title: "Outbound Kementrian Sosial",
    category: "Project Video",
    type: "drive_folder",
    sourceUrl:
      "https://drive.google.com/drive/folders/1ImzKdaxz5l38ADzI9IKnGnfuZXEtAeu1?usp=sharing",
    thumbnailUrl: "",
    description:
      "Video Dokumentasi Outbound program Kementrian Sosial dengan melibatkan sekolah SRMA 26 MAKASSAAR yang berlangsung selama 3 hari di kabupaten Maros dengan tujuan pengembangan diri siswa yang dilakukan di luar sekolah.",
    tags: ["Video Dokumentasi", "Outbound", "Kemensos"],
    items: [
      {
        title: "Outbound Kementrian Sosial",
        sourceUrl:
          "https://drive.google.com/file/d/1kCmpmCoKG6pcMQtJcZGNPk5YiFl0fayN/view?usp=sharing",
        embedUrl:
          "https://drive.google.com/file/d/1kCmpmCoKG6pcMQtJcZGNPk5YiFl0fayN/preview",
      },
    ],
  },
  {
    id: "drv-project-2",
    title: "Universitas Negeri Makassar",
    category: "Project Video",
    type: "drive_folder",
    sourceUrl:
      "https://drive.google.com/drive/folders/1beuiu1rXhvBLPoXOzT4Xe31cChU82Vmy",
    thumbnailUrl: "",
    description:
      "Project Trailer dan dokumentasi Event Fakultas Teknik & Fakultas Seni dan Desain Universitas Negeri Makassar",
    tags: ["Video Dokumentasi", "UNM", "Event Kampus"],
    items: [
      {
        title: "Dokumentasi Fakultas Teknik UNM – Tata Rias",
        sourceUrl:
          "https://drive.google.com/file/d/1ppiC4l11EN63FmgPaUnFrDJ3LU5Z2K2i/view",
        embedUrl:
          "https://drive.google.com/file/d/1ppiC4l11EN63FmgPaUnFrDJ3LU5Z2K2i/preview",
      },
      {
        title: "Trailer UNM Fakultas Seni & Desain",
        sourceUrl:
          "https://drive.google.com/file/d/1LYFUUg12zt1voKvVrGd4ugg3b5dbwOjC/view",
        embedUrl:
          "https://drive.google.com/file/d/1LYFUUg12zt1voKvVrGd4ugg3b5dbwOjC/preview",
      },
      {
        title: "Trailer Fakultas Teknik – Tata Rias",
        sourceUrl:
          "https://drive.google.com/file/d/1H-fl5eU7bzZdOE0ZOEzcUN_nzexRyN6y/view",
        embedUrl:
          "https://drive.google.com/file/d/1H-fl5eU7bzZdOE0ZOEzcUN_nzexRyN6y/preview",
      },
    ],
  },
  {
    id: "drv-project-3",
    title: "Mawangi Digital Printing",
    category: "Project Video",
    type: "drive_folder",
    sourceUrl:
      "https://drive.google.com/drive/folders/1NotActDUIJVO04amTB6-HKGemhmryNZU",
    thumbnailUrl: "",
    description: "Company Profile & Videotron ads Mawangi Digital Printing",
    tags: ["Company Profile", "Videotron", "Mawangi"],
    items: [
      {
        title: "Mawangi Digital Printing",
        sourceUrl:
          "https://drive.google.com/file/d/1rG-XVURHS1Tt66PXR-dZ3Fs_tgppNcgn/view",
        embedUrl:
          "https://drive.google.com/file/d/1rG-XVURHS1Tt66PXR-dZ3Fs_tgppNcgn/preview",
      },
      {
        title: "Slide Produk",
        sourceUrl:
          "https://drive.google.com/file/d/1ELXs4trvhYk79V0m35ylUjRXZwRhZJVE/view",
        embedUrl:
          "https://drive.google.com/file/d/1ELXs4trvhYk79V0m35ylUjRXZwRhZJVE/preview",
      },
      {
        title: "Slide Produk 2",
        sourceUrl:
          "https://drive.google.com/file/d/1rqBJ3aZ6-qp2-HVkxrqvNInnPo5ToK9-/view",
        embedUrl:
          "https://drive.google.com/file/d/1rqBJ3aZ6-qp2-HVkxrqvNInnPo5ToK9-/preview",
      },
    ],
  },
  {
    id: "drv-project-4",
    title: "MaPaN Nusantara",
    category: "Project Video",
    type: "drive_folder",
    sourceUrl:
      "https://drive.google.com/drive/folders/1ipt87w22vkppmKrRzvIUeREwFfsa48yy",
    thumbnailUrl: "",
    description: "Video ads PT Mitra Pariwara Nusantara (MaPaN)",
    tags: ["Video Ads", "MaPaN", "Storyboard"],
    items: [
      {
        title: "MaPaN Storyboard 4 R",
        sourceUrl:
          "https://drive.google.com/file/d/1vUCc0iHNArlu4IWYmBLJk7H0eQIcccTF/view",
        embedUrl:
          "https://drive.google.com/file/d/1vUCc0iHNArlu4IWYmBLJk7H0eQIcccTF/preview",
      },
      {
        title: "Storyboard 1 HD",
        sourceUrl:
          "https://drive.google.com/file/d/1vUCc0iHNArlu4IWYmBLJk7H0eQIcccTF/view",
        embedUrl:
          "https://drive.google.com/file/d/1vUCc0iHNArlu4IWYmBLJk7H0eQIcccTF/preview",
      },
      {
        title: "Storyboard 1 MaPaN r2",
        sourceUrl:
          "https://drive.google.com/file/d/14-Cng3qz0rMSCMQ2o4I29mNWT81xYSCh/view",
        embedUrl:
          "https://drive.google.com/file/d/14-Cng3qz0rMSCMQ2o4I29mNWT81xYSCh/preview",
      },
      {
        title: "Storyboard 2 HD",
        sourceUrl:
          "https://drive.google.com/file/d/1ZQ8zFToDQ80ExA87ISEeYK0XuItwtvfH/view",
        embedUrl:
          "https://drive.google.com/file/d/1ZQ8zFToDQ80ExA87ISEeYK0XuItwtvfH/preview",
      },
      {
        title: "Storyboard 3 HD",
        sourceUrl:
          "https://drive.google.com/file/d/19o81SfvNVQk-14S4jokh820dnioLt3uc/view",
        embedUrl:
          "https://drive.google.com/file/d/19o81SfvNVQk-14S4jokh820dnioLt3uc/preview",
      },
      {
        title: "Storyboard 3 MaPaN R HD",
        sourceUrl:
          "https://drive.google.com/file/d/1Iqc-StweZHAR9GJ0gY8QUvnqVFeDr3Vj/view",
        embedUrl:
          "https://drive.google.com/file/d/1Iqc-StweZHAR9GJ0gY8QUvnqVFeDr3Vj/preview",
      },
      {
        title: "Storyboard 3 MaPaN",
        sourceUrl:
          "https://drive.google.com/file/d/15rW5kLJQNdD6YWniwG9ySMdeRX833xnY/view",
        embedUrl:
          "https://drive.google.com/file/d/15rW5kLJQNdD6YWniwG9ySMdeRX833xnY/preview",
      },
      {
        title: "Storyboard 4 CC HD",
        sourceUrl:
          "https://drive.google.com/file/d/1RwcaA9fgTLcw86v6oxPxjMHNJ1qA0dbT/view",
        embedUrl:
          "https://drive.google.com/file/d/1RwcaA9fgTLcw86v6oxPxjMHNJ1qA0dbT/preview",
      },
      {
        title: "Storyboard 5 HD",
        sourceUrl:
          "https://drive.google.com/file/d/19r411QQ9b1VOTFM7WJzQOV7vvyJowdWX/view",
        embedUrl:
          "https://drive.google.com/file/d/19r411QQ9b1VOTFM7WJzQOV7vvyJowdWX/preview",
      },
    ],
  },
  {
    id: "drv-project-5",
    title: "Wedding",
    category: "Project Video",
    type: "drive_folder",
    sourceUrl:
      "https://drive.google.com/drive/folders/1ImzKdaxz5l38ADzI9IKnGnfuZXEtAeu1",
    thumbnailUrl: "",
    description: "Cinematic Wedding Project",
    tags: ["Wedding", "Cinematic", "Video"],
    items: [
      {
        title: "Wedding Edwin & Nurul",
        sourceUrl:
          "https://drive.google.com/file/d/1qyHhRr-UDuqg5JzkFKFAFR1-3K8qxhCQ/view",
        embedUrl:
          "https://drive.google.com/file/d/1qyHhRr-UDuqg5JzkFKFAFR1-3K8qxhCQ/preview",
      },
      {
        title: "Trailer Putri & Randi 4K",
        sourceUrl:
          "https://drive.google.com/file/d/1kZ2NKzflGhh4LKliZlgm2pTtKcYRcIZL/view",
        embedUrl:
          "https://drive.google.com/file/d/1kZ2NKzflGhh4LKliZlgm2pTtKcYRcIZL/preview",
      },
      {
        title: "Trailer Nurisana",
        sourceUrl:
          "https://drive.google.com/file/d/1L16hMJWPnMm5G9Wb0eyfN9V5lcPXaRqg/view",
        embedUrl:
          "https://drive.google.com/file/d/1L16hMJWPnMm5G9Wb0eyfN9V5lcPXaRqg/preview",
      },
      {
        title: "Trailer Fadia & Angga",
        sourceUrl:
          "https://drive.google.com/file/d/1PYLxGA-SqF30fe7ZJy8QtGes_ccMGCGW/view",
        embedUrl:
          "https://drive.google.com/file/d/1PYLxGA-SqF30fe7ZJy8QtGes_ccMGCGW/preview",
      },
      {
        title: "Prewedding Outdoor Cinematic",
        sourceUrl:
          "https://drive.google.com/file/d/1Q7aFFyD15NB5h3kfynoYhghq1N4xzzEu/view",
        embedUrl:
          "https://drive.google.com/file/d/1Q7aFFyD15NB5h3kfynoYhghq1N4xzzEu/preview",
      },
      {
        title: "Mappetuada Putri & Usri HD",
        sourceUrl:
          "https://drive.google.com/file/d/1Hrpead5CODAMqdIv8xdKa7y6IGFIJmxy/view",
        embedUrl:
          "https://drive.google.com/file/d/1Hrpead5CODAMqdIv8xdKa7y6IGFIJmxy/preview",
      },
    ],
  },

  /* ================= SHORT VIDEO IG (14) =================== */
  {
    id: "ig-short-1",
    title: "Rian Fahardhi - Surat untuk Elit",
    category: "Short Video (IG)",
    type: "link",
    sourceUrl: "https://www.instagram.com/p/DRwPYeaE5vM/",
    embedUrl: "",
    thumbnailUrl: "https://via.placeholder.com/900x600.png?text=IG+Reels+1",
    description: "Short video Instagram oleh Rian Fahardhi.",
    tags: ["IG", "Reels", "Rian Fahardhi"],
  },
  {
    id: "ig-short-2",
    title: "Rian Fahardhi - Dumbscrolling",
    category: "Short Video (IG)",
    type: "link",
    sourceUrl: "https://www.instagram.com/p/DRBudYxk6B7/",
    embedUrl: "",
    thumbnailUrl: "https://via.placeholder.com/900x600.png?text=IG+Reels+2",
    description: "Short video Instagram oleh Rian Fahardhi.",
    tags: ["IG", "Reels", "Rian Fahardhi"],
  },
  {
    id: "ig-short-3",
    title: "Rian Fahardhi - Ketidakadilan Antar Generasi",
    category: "Short Video (IG)",
    type: "link",
    sourceUrl: "https://www.instagram.com/p/DSRk1Byk5l4/",
    embedUrl: "",
    thumbnailUrl: "https://via.placeholder.com/900x600.png?text=IG+Reels+3",
    description: "Short video Instagram oleh Rian Fahardhi.",
    tags: ["IG", "Reels", "Rian Fahardhi"],
  },
  {
    id: "ig-short-4",
    title: "Rian Fahardhi - Yayasan SejutaCita Pendidikan Indonesia (Ads)",
    category: "Short Video (IG)",
    type: "link",
    sourceUrl: "https://www.instagram.com/p/DSNBzwPEzef/",
    embedUrl: "",
    thumbnailUrl: "https://via.placeholder.com/900x600.png?text=IG+Reels+4",
    description: "Video ads Yayasan SejutaCita Pendidikan Indonesia.",
    tags: ["IG", "Reels", "Ads"],
  },
  {
    id: "ig-short-5",
    title: "Mitologi Bumi Sulawesi - Tradisi Sayyang Pattuqduq",
    category: "Short Video (IG)",
    type: "link",
    sourceUrl: "https://www.instagram.com/p/DDyy_1tzCgX/",
    embedUrl: "",
    thumbnailUrl: "https://via.placeholder.com/900x600.png?text=IG+Reels+5",
    description: "Mitologi Bumi Sulawesi – Tradisi Sayyang Pattuqduq.",
    tags: ["IG", "Reels", "Budaya", "Sulawesi"],
  },
  {
    id: "ig-short-6",
    title: "Mitologi Bumi Sulawesi - Tindakan Amoral Terhadap Perempuan",
    category: "Short Video (IG)",
    type: "link",
    sourceUrl: "https://www.instagram.com/p/DCvI-kKTvpj/",
    embedUrl: "",
    thumbnailUrl: "https://via.placeholder.com/900x600.png?text=IG+Reels+6",
    description: "Mitologi Bumi Sulawesi – isu sosial & perempuan.",
    tags: ["IG", "Reels", "Sosial"],
  },
  {
    id: "ig-short-7",
    title: "Mitologi Bumi Sulawesi - Tradisi Pakkio’ Bunting",
    category: "Short Video (IG)",
    type: "link",
    sourceUrl: "https://www.instagram.com/p/DAkjcBRRb3C/",
    embedUrl: "",
    thumbnailUrl: "https://via.placeholder.com/900x600.png?text=IG+Reels+7",
    description: "Mitologi Bumi Sulawesi – Tradisi Pakkio’ Bunting.",
    tags: ["IG", "Reels", "Budaya"],
  },
  {
    id: "ig-short-8",
    title: "Muhammad Yusran - Pappasang Karaeng Pattingalloang",
    category: "Short Video (IG)",
    type: "link",
    sourceUrl: "https://www.instagram.com/p/C-8wzkwxOQY/",
    embedUrl: "",
    thumbnailUrl: "https://via.placeholder.com/900x600.png?text=IG+Reels+8",
    description: "Muhammad Yusran – Pappasang Karaeng Pattingalloang.",
    tags: ["IG", "Reels", "Sejarah"],
  },
  {
    id: "ig-short-9",
    title: "Mitologi Bumi Sulawesi - Abdi Mahesa",
    category: "Short Video (IG)",
    type: "link",
    sourceUrl: "https://www.instagram.com/p/C-vi3cWxVqu/",
    embedUrl: "",
    thumbnailUrl: "https://via.placeholder.com/900x600.png?text=IG+Reels+9",
    description: "Mitologi Bumi Sulawesi – Abdi Mahesa.",
    tags: ["IG", "Reels", "Budaya"],
  },
  {
    id: "ig-short-10",
    title: "Mitologi Bumi Sulawesi - Kemerdekaan Bajeng 14 Agustus 1945",
    category: "Short Video (IG)",
    type: "link",
    sourceUrl: "https://www.instagram.com/p/C-oNqH5x8A3/",
    embedUrl: "",
    thumbnailUrl: "https://via.placeholder.com/900x600.png?text=IG+Reels+10",
    description: "Mitologi Bumi Sulawesi – sejarah lokal.",
    tags: ["IG", "Reels", "Sejarah"],
  },
  {
    id: "ig-short-11",
    title: "Rian Fahardhi - Retna Kencana Colliq Pujie",
    category: "Short Video (IG)",
    type: "link",
    sourceUrl: "https://www.instagram.com/p/C-Cd5L9RwEr/",
    embedUrl: "",
    thumbnailUrl: "https://via.placeholder.com/900x600.png?text=IG+Reels+11",
    description: "Rian Fahardhi – tokoh perempuan Nusantara.",
    tags: ["IG", "Reels", "Tokoh"],
  },
  {
    id: "ig-short-12",
    title:
      "Aida Gunawan - Pergeseran Nilai Budaya Dalam Tradisi Pernikahan Adat Bugis Makassar",
    category: "Short Video (IG)",
    type: "link",
    sourceUrl: "https://www.instagram.com/p/C8mZAEGRVwX/",
    embedUrl: "",
    thumbnailUrl: "https://via.placeholder.com/900x600.png?text=IG+Reels+12",
    description: "Aida Gunawan – budaya Bugis Makassar.",
    tags: ["IG", "Reels", "Budaya"],
  },
  {
    id: "ig-short-13",
    title: "Rian Fahardhi - Pappasang Kajaolaliddong",
    category: "Short Video (IG)",
    type: "link",
    sourceUrl: "https://www.instagram.com/p/C7Vu1eXvT2I/",
    embedUrl: "",
    thumbnailUrl: "https://via.placeholder.com/900x600.png?text=IG+Reels+13",
    description: "Rian Fahardhi – Pappasang Kajaolaliddong.",
    tags: ["IG", "Reels", "Budaya"],
  },
  {
    id: "ig-short-14",
    title: "Mitologi Bumi Sulawesi - Tradisi Tumbilotohe",
    category: "Short Video (IG)",
    type: "link",
    sourceUrl: "https://www.instagram.com/p/C5hHsjdR0j0/",
    embedUrl: "",
    thumbnailUrl: "https://via.placeholder.com/900x600.png?text=IG+Reels+14",
    description: "Mitologi Bumi Sulawesi – Tradisi Tumbilotohe.",
    tags: ["IG", "Reels", "Budaya"],
  },

  /* ================= BUMPER EVENT IG (1) =================== */
  {
    id: "ig-bumper-1",
    title: "Event Bumper Maujud Budaya Mitologi Bumi Sulawesi 2025",
    category: "Bumper Event (IG)",
    type: "link",
    sourceUrl: "https://www.instagram.com/p/DBkCWiKx9IX/",
    embedUrl: "",
    thumbnailUrl: "",
    description: "Bumper event Maujud Budaya Mitologi Bumi Sulawesi 2025.",
    tags: ["IG", "Bumper", "Event"],
  },

  /* ================= FEED CAROUSEL IG (5) ================== */
  {
    id: "ig-carousel-1",
    title: "Rian Fahardhi - Presence Before Evidence",
    category: "Feed Carousel (IG)",
    type: "link",
    sourceUrl: "https://www.instagram.com/p/DR7Fwblkzj3/?img_index=1",
    thumbnailUrl: "",
    description: "Feed carousel Instagram.",
    tags: ["IG", "Carousel", "Rian Fahardhi"],
  },
  {
    id: "ig-carousel-2",
    title: "Mitologi Bumi Sulawesi - Sakralitas Pernikahan Adat Bugis Makassar",
    category: "Feed Carousel (IG)",
    type: "link",
    sourceUrl: "https://www.instagram.com/p/DAWryILTHVO/?img_index=1",
    thumbnailUrl: "",
    description: "Feed carousel Instagram.",
    tags: ["IG", "Carousel", "Mitologi Bumi Sulawesi"],
  },
  {
    id: "ig-carousel-3",
    title:
      "Mitologi Bumi Sulawesi - Dialog Budaya Penggunaan Nama Dalam Tatanan Adat Budaya",
    category: "Feed Carousel (IG)",
    type: "link",
    sourceUrl: "https://www.instagram.com/p/C-24bm1zVjY/?img_index=1",
    thumbnailUrl: "",
    description: "Feed carousel Instagram.",
    tags: ["IG", "Carousel", "Dialog Budaya"],
  },
  {
    id: "ig-carousel-4",
    title: "Mitologi Bumi Sulawesi - Road to Campus Universitas Hasanuddin",
    category: "Feed Carousel (IG)",
    type: "link",
    sourceUrl: "https://www.instagram.com/p/C7lMTJJP9fi/?img_index=1",
    thumbnailUrl: "",
    description: "Feed carousel Instagram.",
    tags: ["IG", "Carousel", "Road to Campus"],
  },
  {
    id: "ig-carousel-5",
    title: "Mitologi Bumi Sulawesi - Road to School SMA Kartika XXI",
    category: "Feed Carousel (IG)",
    type: "link",
    sourceUrl: "https://www.instagram.com/p/C6P9axaPWsW/?img_index=1",
    thumbnailUrl: "",
    description: "Feed carousel Instagram.",
    tags: ["IG", "Carousel", "Road to School"],
  },

  /* ================= DESIGN FLYER IG (10) ================== */
  {
    id: "ig-flyer-1",
    title: "Event Flyer Maujud Budaya Mitologi Bumi Sulawesi 2025",
    category: "Flyer (IG)",
    type: "link",
    sourceUrl: "https://www.instagram.com/p/DBdhcGgT5hr/",
    thumbnailUrl: "",
    description: "Flyer event Instagram.",
    tags: ["Design", "Flyer", "Event"],
  },
  {
    id: "ig-flyer-2",
    title: "Flyer Diskografi Dialog Budaya - Dimensi Spiritual Adat Budaya",
    category: "Flyer (IG)",
    type: "link",
    sourceUrl: "https://www.instagram.com/p/C_RQr9rzgdY/?img_index=1",
    thumbnailUrl: "",
    description: "Flyer diskografi Instagram.",
    tags: ["Design", "Flyer", "Dialog Budaya"],
  },
  {
    id: "ig-flyer-3",
    title: "Flyer Diskografi Dialog Budaya - Patron Kemerdekaan Bajeng 14 Agustus 1945",
    category: "Flyer (IG)",
    type: "link",
    sourceUrl: "https://www.instagram.com/p/C-fhr2qTYeo/?img_index=1",
    thumbnailUrl: "",
    description: "Flyer diskografi Instagram.",
    tags: ["Design", "Flyer", "Diskografi"],
  },
  {
    id: "ig-flyer-4",
    title: "Flyer Diskografi Dialog Budaya - Pergeseran Nilai Aru Dalam Prosesi Adat Budaya",
    category: "Flyer (IG)",
    type: "link",
    sourceUrl: "https://www.instagram.com/p/C7PBDabvd9i/?img_index=1",
    thumbnailUrl: "",
    description: "Flyer diskografi Instagram.",
    tags: ["Design", "Flyer", "Adat Budaya"],
  },
  {
    id: "ig-flyer-5",
    title: "Flyer Video Dokumenter - Menyuruk KITAB KUNO Sureq Galigo",
    category: "Flyer (IG)",
    type: "link",
    sourceUrl: "https://www.instagram.com/p/C9PuFNKzk_D/",
    thumbnailUrl: "",
    description: "Flyer dokumenter Instagram.",
    tags: ["Design", "Flyer", "Dokumenter"],
  },
  {
    id: "ig-flyer-6",
    title: "Flyer Video Dokumenter - Nene Mallomo Cedekiawan Bumi Sidenrereng",
    category: "Flyer (IG)",
    type: "link",
    sourceUrl: "https://www.instagram.com/p/C9FosgwTg4c/",
    thumbnailUrl: "",
    description: "Flyer dokumenter Instagram.",
    tags: ["Design", "Flyer", "Dokumenter"],
  },
  {
    id: "ig-flyer-7",
    title: "Flyer Video Dokumenter - Tradisi Tenun Sutra Wajo",
    category: "Flyer (IG)",
    type: "link",
    sourceUrl: "https://www.instagram.com/p/C9DHpFTT4cc/",
    thumbnailUrl: "",
    description: "Flyer dokumenter Instagram.",
    tags: ["Design", "Flyer", "Dokumenter"],
  },
  {
    id: "ig-flyer-8",
    title: "Flyer Video Dokumenter - Colliq Pujie Sang Penyalin Sureq I La Galigo",
    category: "Flyer (IG)",
    type: "link",
    sourceUrl: "https://www.instagram.com/p/C6SRH8hPN_V/",
    thumbnailUrl: "",
    description: "Flyer dokumenter Instagram.",
    tags: ["Design", "Flyer", "Dokumenter"],
  },
  {
    id: "ig-flyer-9",
    title: "Flyer Video Dokumenter - Passapu Simbol Peradaban Tertinggi",
    category: "Flyer (IG)",
    type: "link",
    sourceUrl: "https://www.instagram.com/p/C4AlRjDv30A/",
    thumbnailUrl: "",
    description: "Flyer dokumenter Instagram.",
    tags: ["Design", "Flyer", "Dokumenter"],
  },
  {
    id: "ig-flyer-10",
    title: "Flyer Video Dokumenter - Patorani Sang Penantang Badai",
    category: "Flyer (IG)",
    type: "link",
    sourceUrl: "https://www.instagram.com/p/C3kMW4yPWFu/",
    thumbnailUrl: "",
    description: "Flyer dokumenter Instagram.",
    tags: ["Design", "Flyer", "Dokumenter"],
  },

  /* ================= PHOTO DRIVE (1) ======================= */
  {
    id: "drv-photo-1",
    title: "Photo Project TNI AD – Graduation",
    category: "Photo",
    type: "drive_folder",
    sourceUrl: "https://drive.google.com/drive/folders/1lKmrGxu69Fm66yuQZM07aByAJBnc4Ebn",
    thumbnailUrl: "https://images.unsplash.com/photo-1520975682031-ae9f8b1b6f8d?q=80&w=1600&auto=format&fit=crop",
    description: "Dokumentasi photo project: TNI AD, graduation, dan event lainnya.",
    tags: ["Photo", "Documentation", "Event"],

    // ✅ ini isinya SUBFOLDER
    items: [
      {
        title: "Wisuda",
        type: "drive_subfolder",
        folderUrl: "https://drive.google.com/drive/folders/1mImrEceQaDmgpmAFFLBfkBrE_s5204f_?usp=drive_link"
      },
      {
        title: "TNI AD",
        type: "drive_subfolder",
        folderUrl: "https://drive.google.com/drive/folders/1H5j_LCo_GfBk-DIXrmQT0NeROp3coi3x?usp=drive_link"
      }
    ]
  },
  /* ================= POSTER DESIGN (DRIVE FOLDER) =================== */
  {
    id: "drv-poster-1",
    title: "Poster Design Collection",
    category: "Poster Design",
    type: "drive_folder",
    sourceUrl:
      "https://drive.google.com/drive/folders/14dy-y5rNIxAvgbJnwanLbl9ugIahNo-e?usp=drive_link",
    thumbnailUrl: "",
    description: "Koleksi poster design & feed visual campaign.",
    tags: ["Poster", "Design", "Visual"],
    items: [
      {
        title: "TikTok",
        sourceUrl:
          "https://drive.google.com/file/d/1fnLsoRmVMRl1nwfFrsXUsH6RAt-yO69J/view",
        embedUrl:
          "https://drive.google.com/file/d/1fnLsoRmVMRl1nwfFrsXUsH6RAt-yO69J/preview",
      },
      {
        title: "Thank God Black",
        sourceUrl:
          "https://drive.google.com/file/d/1SD0Rvd1UpEHUOOPPWOx4TRm1EL3QYiEw/view",
        embedUrl:
          "https://drive.google.com/file/d/1SD0Rvd1UpEHUOOPPWOx4TRm1EL3QYiEw/preview",
      },
      {
        title: "RUU Penyiaran",
        sourceUrl:
          "https://drive.google.com/file/d/1WLlSOWbJW85pnzIhCANfSv294fMSOzyA/view",
        embedUrl:
          "https://drive.google.com/file/d/1WLlSOWbJW85pnzIhCANfSv294fMSOzyA/preview",
      },
      {
        title: "Ramadan Sale",
        sourceUrl:
          "https://drive.google.com/file/d/10Xg5_FOlKc9737gb2qfE8devSDT8_hEj/view",
        embedUrl:
          "https://drive.google.com/file/d/10Xg5_FOlKc9737gb2qfE8devSDT8_hEj/preview",
      },
      {
        title: "Poster Orba",
        sourceUrl:
          "https://drive.google.com/file/d/1d0OGegvDLvFD23Ta6IOZTrPHclwsUESy/view",
        embedUrl:
          "https://drive.google.com/file/d/1d0OGegvDLvFD23Ta6IOZTrPHclwsUESy/preview",
      },
      {
        title: "Poster Idul Fitri",
        sourceUrl:
          "https://drive.google.com/file/d/10fHjoBL16wry_OU71s2OZuj4tbnqi923/view",
        embedUrl:
          "https://drive.google.com/file/d/10fHjoBL16wry_OU71s2OZuj4tbnqi923/preview",
      },
      {
        title: "Pertamix Poster",
        sourceUrl:
          "https://drive.google.com/file/d/1FKcw7YGgbAa4hF7HFKS2V3RTv5bV2iV4/view",
        embedUrl:
          "https://drive.google.com/file/d/1FKcw7YGgbAa4hF7HFKS2V3RTv5bV2iV4/preview",
      },
      {
        title: "Pemuda Penjilat",
        sourceUrl:
          "https://drive.google.com/file/d/11ldktLwo50p3pWcPliSItimBDzT79ZoB/view",
        embedUrl:
          "https://drive.google.com/file/d/11ldktLwo50p3pWcPliSItimBDzT79ZoB/preview",
      },
      {
        title: "Lunar",
        sourceUrl:
          "https://drive.google.com/file/d/1L5gtcL_tlb9LWNKIOHNgPtlc3to75-Kl/view",
        embedUrl:
          "https://drive.google.com/file/d/1L5gtcL_tlb9LWNKIOHNgPtlc3to75-Kl/preview",
      },
      {
        title: "Keep Me Insane",
        sourceUrl:
          "https://drive.google.com/file/d/1SgaeE5S9pmQfe94LS4HyDGj1Y6bodo7k/view",
        embedUrl:
          "https://drive.google.com/file/d/1SgaeE5S9pmQfe94LS4HyDGj1Y6bodo7k/preview",
      },
      {
        title: "Feed Hampir Mati",
        sourceUrl:
          "https://drive.google.com/file/d/16oCQ4hIvWnS21FnijL_ynG-J_ohGXxOf/view",
        embedUrl:
          "https://drive.google.com/file/d/16oCQ4hIvWnS21FnijL_ynG-J_ohGXxOf/preview",
      },
      {
        title: "9 Nyawa",
        sourceUrl:
          "https://drive.google.com/file/d/1HV6uVf7XZon3GzJDIgAdqKJfk_eypKMi/view",
        embedUrl:
          "https://drive.google.com/file/d/1HV6uVf7XZon3GzJDIgAdqKJfk_eypKMi/preview",
      },
    ],
  },
];

/* =========================
   IG thumbnail from IG permalink (best-effort)
   NOTE: endpoint ini kadang diblok IG. Kalau gagal, img akan fallback via onerror.
========================= */
function getIgShortcode(url) {
  const m = String(url || "").match(/instagram\.com\/p\/([^\/\?\#]+)/i);
  return m ? m[1] : "";
}
function guessIgThumb(url) {
  const code = getIgShortcode(url);
  return code ? `https://www.instagram.com/p/${code}/media/?size=l` : "";
}

portfolioData.forEach((item) => {
  if (!item) return;

  // ✅ HANYA UNTUK KONTEN IG
  if (
    item.category.includes("(IG)") &&
    item.sourceUrl &&
    item.sourceUrl.includes("instagram.com/p/")
  ) {
    const guessed = guessIgThumb(item.sourceUrl);
    if (guessed) item.thumbnailUrl = guessed;
  }
});

const grid = document.getElementById("portfolioGrid");
const filtersWrap = document.getElementById("filters");
const searchInput = document.getElementById("searchInput");

let searchQuery = "";
/* Build categories list (NO "All") */
const categories = Array.from(new Set(portfolioData.map((x) => x.category)));
/* Default category = kategori pertama */
let activeCategory = categories[0] || "";

function renderFilters() {
  if (!filtersWrap) return;

  if (!categories.length) {
    filtersWrap.innerHTML = `<div class="tag">No categories</div>`;
    return;
  }

  filtersWrap.innerHTML = categories
    .map(
      (cat) => `
    <button class="filter-btn ${cat === activeCategory ? "is-active" : ""}" data-cat="${escapeHtml(
        cat
      )}">
      ${escapeHtml(cat)}
    </button>
  `
    )
    .join("");
}

/* =========================
   Helpers: deteksi IG + render thumbnail
========================= */
function isInstagramItem(item) {
  return (
    (item.type === "instagram_embed" || item.type === "link") &&
    item.sourceUrl &&
    item.sourceUrl.includes("instagram.com/")
  );
}
function isBlackThumbItem(item) {
  // khusus kategori ini dibuat thumbnail hitam
  return (
    item.type === "drive_folder" &&
    (item.category === "Project Video" ||
      item.category === "Poster Design" ||
      item.category === "Poster Video")
  );
}

function renderThumb(item) {
  /* ===== IG: preview sekilas (background-image) ===== */
  if (isInstagramItem(item)) {
    const thumb = item.thumbnailUrl || "";
    return `
      <div class="work-thumb-mini is-ig"
        style="${thumb ? `background-image:url('${escapeAttr(thumb)}')` : ""}">
      </div>
    `;
  }

  /* ===== DRIVE FOLDER tertentu: pakai hitam polos ===== */
  if (isBlackThumbItem(item)) {
    const label =
      item.category === ""
        ? "Project Video"
        : item.category === ""
        ? ""
        : "";

    return `
      <div class="work-thumb-mini is-black">
        <div class="black-thumb-center">
          <div class="t1">${escapeHtml(label)}</div>
          <div class="t2"></div>
        </div>
      </div>
    `;
  }

  /* ===== NON-IG: tetap pakai <img> ===== */
  if (item.thumbnailUrl) {
    return `
      <div class="work-thumb-mini">
        <img
          src="${escapeAttr(item.thumbnailUrl)}"
          alt="${escapeAttr(item.title)}"
          loading="lazy"
          onerror="this.onerror=null; this.src='https://via.placeholder.com/900x600.png?text=Thumbnail+Unavailable';">
      </div>
    `;
  }

  return `
    <div class="work-thumb-mini">
      <div class="modal-placeholder">No thumbnail</div>
    </div>
  `;
}

function renderGrid() {
  if (!grid) return;

  const items = portfolioData.filter((item) => {
    const catOk = !activeCategory ? true : item.category === activeCategory;
    const q = searchQuery.trim().toLowerCase();
    const qOk =
      !q ||
      (item.title +
        " " +
        (item.description || "") +
        " " +
        (item.tags || []).join(" "))
        .toLowerCase()
        .includes(q);
    return catOk && qOk;
  });

  grid.innerHTML = items
    .map(
      (item) => `
    <article class="work-item glass tilt" data-id="${escapeAttr(item.id)}">
      ${renderThumb(item)}

      <div class="work-meta">
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.description || "")}</p>
        <div class="work-tags">
          <span class="tag">${escapeHtml(item.category)}</span>
          ${(item.tags || [])
            .slice(0, 2)
            .map((t) => `<span class="tag">${escapeHtml(t)}</span>`)
            .join("")}
        </div>
      </div>
    </article>
  `
    )
    .join("");

  // Re-attach tilt behavior for new items
  attachTiltTo(".work-item.tilt");
}

/* ---------- Modal logic ---------- */
const modal = document.getElementById("modal");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalClose = document.getElementById("modalClose");
const modalTitle = document.getElementById("modalTitle");
const modalCategory = document.getElementById("modalCategory");
const modalBody = document.getElementById("modalBody");
const modalOpenLink = document.getElementById("modalOpenLink");

function openModal(item) {
  if (!modal) return;

  if (modalTitle) modalTitle.textContent = item.title;
  if (modalCategory) modalCategory.textContent = item.category;
  if (modalOpenLink) modalOpenLink.href = item.sourceUrl || "#";

  // Clear previous
  if (modalBody) modalBody.innerHTML = "";

  // Reset inline style (biar konsisten)
  if (modalBody) {
    modalBody.style.maxHeight = "";
    modalBody.style.overflow = "";
    modalBody.style.webkitOverflowScrolling = "";
  }

  /* =========================
     1) YouTube
  ========================= */
  if (item.type === "youtube" && item.embedUrl && modalBody) {
    modalBody.innerHTML = `
      <iframe
        src="${escapeAttr(item.embedUrl)}"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    `;
  }

  /* =========================
     2) Drive video/image
  ========================= */
  else if (item.type === "drive_video" && item.embedUrl && modalBody) {
    modalBody.innerHTML = `
      <iframe
        src="${escapeAttr(item.embedUrl)}"
        allow="autoplay"
        allowfullscreen></iframe>
    `;
  } else if (item.type === "drive_image" && item.embedUrl && modalBody) {
    modalBody.innerHTML = `<iframe src="${escapeAttr(item.embedUrl)}"></iframe>`;
  }

  /* =========================
     3) Instagram LINK ONLY
  ========================= */
  else if (
    (item.type === "instagram_embed" || item.type === "link") &&
    item.sourceUrl &&
    item.sourceUrl.includes("instagram.com/") &&
    modalBody
  ) {
    // bikin body bisa scroll (khusus IG doang)
    modalBody.style.overflow = "auto";
    modalBody.style.webkitOverflowScrolling = "touch";

    // Render IG embed full width
    modalBody.innerHTML = `
      <div class="ig-embed-wrap" style="padding:12px;">
        <blockquote
          class="instagram-media"
          data-instgrm-permalink="${escapeAttr(item.sourceUrl)}"
          data-instgrm-version="14"
          style="margin:0; width:100%; max-width:100%;"></blockquote>
      </div>
    `;

    // Paksa IG proses embed (kadang butuh 2x)
    const processIg = () => {
      if (window.instgrm && window.instgrm.Embeds) {
        window.instgrm.Embeds.process();
      }
    };

    setTimeout(() => {
      processIg();
      setTimeout(processIg, 350);
    }, 50);
  }

  /* =========================
     4) Default fallback
  ========================= */
  else if (modalBody) {
    modalBody.innerHTML = `
      <div class="modal-placeholder">
        Preview tidak tersedia untuk tipe ini. Klik tombol "Open Source Link".
      </div>
    `;
  }

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  if (!modal) return;

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");

  if (modalBody) {
    modalBody.style.maxHeight = "";
    modalBody.style.overflow = "";
    modalBody.style.webkitOverflowScrolling = "";
    modalBody.innerHTML = "";
  }
  document.body.style.overflow = "";
}

if (modalBackdrop) modalBackdrop.addEventListener("click", closeModal);
if (modalClose) modalClose.addEventListener("click", closeModal);
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

/* ---------- Events ---------- */
if (filtersWrap) {
  filtersWrap.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    activeCategory = btn.dataset.cat;
    renderFilters();
    renderGrid();
  });
}

if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value || "";
    renderGrid();
  });
}

if (grid) {
  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".work-item");
    if (!card) return;

    const id = card.dataset.id;
    const item = portfolioData.find((x) => x.id === id);
    if (!item) return;

    // ✅ kalau folder project → buka slider project
    if (item.type === "drive_folder") {
      openProjectFolderModal(item);
      return;
    }

    openModal(item);
  });
}

/* ---------- Helpers ---------- */
function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (m) =>
    ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    }[m])
  );
}
function escapeAttr(str) {
  return escapeHtml(str).replace(/"/g, "&quot;");
}

/* Reusable tilt attach */
function attachTiltTo(selector) {
  const nodes = document.querySelectorAll(selector);
  nodes.forEach((card) => {
    if (card.dataset.tiltBound === "1") return;
    card.dataset.tiltBound = "1";

    let rect;
    const onMove = (e) => {
      rect = rect || card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rx = (y / rect.height - 0.5) * -10;
      const ry = (x / rect.width - 0.5) * 12;

      card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`;
    };
    const onLeave = () => {
      rect = null;
      card.style.transform =
        "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)";
    };

    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseleave", onLeave);
  });
}

/* Init */
renderFilters();
renderGrid();

/* =========================
   CATEGORY MODAL (SLIDER)
========================= */
const catModal = document.getElementById("catModal");
const catBackdrop = document.getElementById("catBackdrop");
const catClose = document.getElementById("catClose");
const catPrev = document.getElementById("catPrev");
const catNext = document.getElementById("catNext");
const catTitle = document.getElementById("catTitle");
const catTitleBadge = document.getElementById("catTitleBadge");
const catTrack = document.getElementById("catTrack");
const catCounter = document.getElementById("catCounter");
const catOpenLink = document.getElementById("catOpenLink");

let catItems = [];
let activeIndex = 0;

/* Open category modal */
function openCategoryModal(category) {
  if (!catModal || !catTrack) return;

  catItems = portfolioData.filter((x) => x.category === category);
  activeIndex = 0;

  if (catTitleBadge) catTitleBadge.textContent = "Category";
  if (catTitle) catTitle.textContent = category;

  catTrack.innerHTML = catItems
    .map((item, idx) => {
      const mediaHtml = buildSlideMedia(item);
      return `
      <div class="slide" data-idx="${idx}">
        ${mediaHtml}
        <div class="slide-meta">
          <div>
            <div class="slide-title">${escapeHtml(item.title)}</div>
            <div class="slide-desc">${escapeHtml(item.description || "")}</div>
          </div>
          <div class="tag">${escapeHtml(item.category)}</div>
        </div>
      </div>
    `;
    })
    .join("");

  catModal.classList.add("is-open");
  catModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  // process IG embeds if any
  if (window.instgrm && window.instgrm.Embeds) window.instgrm.Embeds.process();

  updateCatUI();
  snapTo(activeIndex, false);
}

/* Build media per item */
function buildSlideMedia(item) {
  if (item.type === "youtube" && item.embedUrl) {
    return `<iframe class="slide-media" src="${escapeAttr(
      item.embedUrl
    )}" allowfullscreen></iframe>`;
  }
  if (
    (item.type === "drive_video" || item.type === "drive_image") &&
    item.embedUrl
  ) {
    return `<iframe class="slide-media" src="${escapeAttr(
      item.embedUrl
    )}" allow="autoplay" allowfullscreen></iframe>`;
  }

  // ✅ IG embed: support type "link" juga
  if (
    (item.type === "instagram_embed" || item.type === "link") &&
    item.sourceUrl &&
    item.sourceUrl.includes("instagram.com/p/")
  ) {
    return `
      <div class="slide-media" style="height:auto; padding:14px;">
        <blockquote class="instagram-media" data-instgrm-permalink="${escapeAttr(
          item.sourceUrl
        )}" data-instgrm-version="14"></blockquote>
      </div>
    `;
  }

  // default: placeholder + CTA
  return `
    <div class="slide-media" style="display:grid; place-items:center;">
      <div style="padding:18px; text-align:center;">
        <div style="color: rgba(235,235,245,.7); font-weight:700;">Preview not embedded</div>
        <div style="margin-top:8px; color: rgba(235,235,245,.55); font-size:12px; line-height:1.6;">
          Klik "Open Selected Link" untuk melihat konten.
        </div>
      </div>
    </div>
  `;
}

function closeCategoryModal() {
  if (!catModal) return;
  catModal.classList.remove("is-open");
  catModal.setAttribute("aria-hidden", "true");
  if (catTrack) catTrack.innerHTML = "";
  document.body.style.overflow = "";
}

function updateCatUI() {
  const total = catItems.length || 1;
  catCounter.textContent = `${activeIndex + 1} / ${total}`;
  const current = catItems[activeIndex];

  // ✅ kalau subfolder, tombol bawah buka folderUrl
  catOpenLink.href = current?.folderUrl || current?.sourceUrl || "#";
}


/* Snap to slide */
function snapTo(index, smooth = true) {
  if (!catTrack) return;
  const slide = catTrack.querySelector(`.slide[data-idx="${index}"]`);
  if (!slide) return;
  slide.scrollIntoView({
    behavior: smooth ? "smooth" : "auto",
    inline: "center",
    block: "nearest",
  });
}

/* Prev/Next */
if (catPrev) {
  catPrev.addEventListener("click", () => {
    if (!catItems.length) return;
    activeIndex = Math.max(0, activeIndex - 1);
    updateCatUI();
    snapTo(activeIndex);
  });
}
if (catNext) {
  catNext.addEventListener("click", () => {
    if (!catItems.length) return;
    activeIndex = Math.min(catItems.length - 1, activeIndex + 1);
    updateCatUI();
    snapTo(activeIndex);
  });
}

/* Close events */
if (catBackdrop) catBackdrop.addEventListener("click", closeCategoryModal);
if (catClose) catClose.addEventListener("click", closeCategoryModal);
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeCategoryModal();
});

/* Detect active slide while scrolling */
let scrollTimer;
if (catTrack) {
  catTrack.addEventListener("scroll", () => {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      const slides = Array.from(catTrack.querySelectorAll(".slide"));
      if (!slides.length) return;

      const center = catTrack.scrollLeft + catTrack.clientWidth / 2;
      let best = 0;
      let bestDist = Infinity;

      slides.forEach((s) => {
        const sCenter = s.offsetLeft + s.clientWidth / 2;
        const dist = Math.abs(sCenter - center);
        if (dist < bestDist) {
          bestDist = dist;
          best = Number(s.dataset.idx);
        }
      });

      activeIndex = best;
      updateCatUI();
    }, 80);
  });
}

/* Drag to scroll */
let isDown = false;
let startX = 0;
let startLeft = 0;

if (catTrack) {
  catTrack.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX;
    startLeft = catTrack.scrollLeft;
  });
  window.addEventListener("mouseup", () => {
    isDown = false;
  });
  catTrack.addEventListener("mouseleave", () => {
    isDown = false;
  });
  catTrack.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const dx = e.pageX - startX;
    catTrack.scrollLeft = startLeft - dx;
  });
}

/* =========================
   Trigger: double click filter to open category modal
========================= */
if (filtersWrap) {
  filtersWrap.addEventListener("dblclick", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    openCategoryModal(btn.dataset.cat);
  });
}

/* =========================
   Open Project Folder Modal (Drive Folder -> slider of items)
========================= */
function openProjectFolderModal(folder) {
  // kalau tidak ada items, fallback buka link folder utama
  if (!folder.items || !folder.items.length) {
    window.open(folder.sourceUrl, "_blank", "noopener");
    return;
  }

  // Mapping items (bisa subfolder / file)
  catItems = folder.items.map((x, i) => ({
    id: `${folder.id}-item-${i}`,
    title: x.title || `Item #${i + 1}`,
    category: folder.title,
    type: x.type || "drive_video",
    folderUrl: x.folderUrl || "",
    sourceUrl: x.sourceUrl || "",
    embedUrl: x.embedUrl || "",
    description: folder.description,
    tags: folder.tags,
  }));

  activeIndex = 0;

  catTitleBadge.textContent = "Folder";
  catTitle.textContent = folder.title;

  catTrack.innerHTML = catItems
    .map((it, idx) => `
      <div class="slide" data-idx="${idx}">
        ${buildFolderSlideMedia(it)}
        <div class="slide-meta">
          <div>
            <div class="slide-title">${escapeHtml(it.title)}</div>
            <div class="slide-desc">${escapeHtml(it.description || "")}</div>
          </div>
          <div class="tag">${escapeHtml(folder.category)}</div>
        </div>
      </div>
    `)
    .join("");

  catModal.classList.add("is-open");
  catModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  updateCatUI();
  snapTo(activeIndex, false);
}

/* Media builder khusus folder slider */
function buildFolderSlideMedia(it) {
  // ✅ SUBFOLDER: tampilkan card + tombol buka folder
  if (it.type === "drive_subfolder") {
    return `
      <div class="slide-media" style="display:grid; place-items:center; padding:22px;">
        <div style="text-align:center; max-width:520px;">
          <div style="font-weight:850; font-size:18px; margin-bottom:8px;">
            ${escapeHtml(it.title)}
          </div>
          <div style="color: rgba(235,235,245,.65); font-size:13px; line-height:1.6;">
            Klik tombol di bawah untuk membuka dan melihat daftar file.
          </div>

          <div style="margin-top:14px; display:flex; gap:10px; justify-content:center; flex-wrap:wrap;">
            <a class="btn btn--ghost" href="${escapeAttr(it.folderUrl)}" target="_blank" rel="noopener">
              Buka Folder
              <span class="btn-glow"></span>
            </a>
          </div>
        </div>
      </div>
    `;
  }

  // ✅ FILE (video/image) kalau suatu saat kamu isi file langsung
  if ((it.type === "drive_video" || it.type === "drive_image") && it.embedUrl) {
    return `<iframe class="slide-media" src="${escapeAttr(it.embedUrl)}" allow="autoplay" allowfullscreen></iframe>`;
  }

  // fallback
  const link = it.sourceUrl || it.folderUrl || "#";
  return `
    <div class="slide-media" style="display:grid; place-items:center; padding:18px; text-align:center;">
      <div style="color: rgba(235,235,245,.7); font-weight:700;">Preview tidak tersedia</div>
      <div style="margin-top:8px; color: rgba(235,235,245,.55); font-size:12px; line-height:1.6;">
        Klik "Open Selected Link" untuk membuka.
      </div>
      <div style="margin-top:12px;">
        <a class="btn btn--ghost" href="${escapeAttr(link)}" target="_blank" rel="noopener">
          Buka Link
          <span class="btn-glow"></span>
        </a>
      </div>
    </div>
  `;
}


// reset saat reload/keluar (punyamu boleh tetap)
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) form.reset();
};

// kirim ke Formspree + status
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  if (!form) return;

  const statusEl = form.querySelector(".form-status");
  const btn = form.querySelector(".btn-submit");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // validasi sederhana
    if (!form.checkValidity()) {
      statusEl.textContent = "Mohon isi semua kolom dengan benar.";
      return;
    }

    btn.disabled = true;
    statusEl.textContent = "Mengirim pesan...";

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { "Accept": "application/json" }
      });

      if (res.ok) {
        statusEl.textContent = "✅ Pesan terkirim. Terima kasih!";
        form.reset();
      } else {
        statusEl.textContent = "❌ Gagal mengirim. Coba lagi ya.";
      }
    } catch (err) {
      statusEl.textContent = "❌ Error koneksi. Cek internet kamu.";
    } finally {
      btn.disabled = false;
    }
  });
});
