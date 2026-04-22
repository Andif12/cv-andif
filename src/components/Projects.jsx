import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Full-Stack Developer | Sistem Manajemen Kelurahan (SIMAK)",
      place: "Institut Teknologi BJ Habibie (KKN)",
      date: "Jul 2025 – Agu 2025",
      featured: true,
      desc: [
        "Mengembangkan platform web untuk 22 kelurahan Kota Parepare",
        "Menyediakan data penduduk, UMKM, dan laporan kegiatan",
        "Meningkatkan efisiensi administrasi dan transparansi layanan",
      ],
    },
    {
      title: "Full-Stack Developer | Sobat Dagang",
      place: "Dinas Perdagangan Kota Parepare",
      date: "Mar 2025 – Jun 2025",
      desc: [
        "Membangun sistem informasi perdagangan dari nol",
        "Eksplorasi AI untuk prediksi harga",
      ],
    },
    {
      title: "Data Analysis Intern",
      place: "PT Esaputlii Prakarsa Utama",
      date: "Okt 2025 – Nov 2025",
      desc: [
        "Data cleaning & rekonsiliasi dataset 5 tahun",
        "Analisis pola untuk identifikasi top seller",
      ],
    },
    {
      title: "Front-End Developer | Parepare Dalam Genggaman (PDG)",
      place: "Project Pemkot Parepare",
      date: "-",
      desc: [
        "Aplikasi layanan digital berbasis web untuk masyarakat",
      ],
    },
    {
      title: "Object Detection (Computer Vision)",
      place: "Final Project – Visual Computing",
      date: "Agu 2024",
      desc: [
        "Sistem deteksi objek menggunakan Python",
      ],
    },
    {
      title: "Image Processing Project",
      place: "Python",
      date: "Des 2023",
      desc: [
        "Konversi RGB ke grayscale",
      ],
    },
  ];

  // 🔥 animasi container
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  // 🔥 animasi item
  const item = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div className="min-h-screen px-6 py-20 bg-gray-50 dark:bg-gray-950">

      <h2 className="text-3xl md:text-4xl font-bold text-green-500 text-center mb-14">
        Pengalaman & Project
      </h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >

        {projects.map((itemData, i) => (
          <motion.div
            key={i}
            variants={item}
            className={`
              relative group p-6 rounded-2xl border transition
              bg-white dark:bg-gray-900
              border-gray-200 dark:border-gray-800
              hover:border-green-500
              hover:-translate-y-2 hover:shadow-xl
              ${itemData.featured ? "ring-2 ring-green-500" : ""}
            `}
          >

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-green-400 opacity-0 group-hover:opacity-10 blur-xl transition"></div>

            {/* FEATURED BADGE */}
            {itemData.featured && (
              <span className="absolute top-3 right-3 text-xs bg-green-500 text-white px-2 py-1 rounded-md">
                ⭐ Featured
              </span>
            )}

            {/* TITLE */}
            <h3 className="text-lg font-bold mb-1 leading-snug">
              {itemData.title}
            </h3>

            {/* PLACE */}
            <p className="text-sm text-green-500 mb-1">
              {itemData.place}
            </p>

            {/* DATE */}
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
              {itemData.date}
            </p>

            {/* DESC */}
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
              {itemData.desc.map((d, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="text-green-500">▹</span>
                  {d}
                </li>
              ))}
            </ul>

          </motion.div>
        ))}

      </motion.div>
    </div>
  );
}

export default Projects;