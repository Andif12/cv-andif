import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      title: "Full-Stack Developer | Sistem Manajemen Kelurahan (SIMAK)",
      place: "Institut Teknologi BJ Habibie (KKN)",
      date: "Jul 2025 – Agu 2025",
      featured: true,
      desc: [
        "Mengembangkan platform web untuk 22 kelurahan Kota Parepare.",
        "Menyediakan data penduduk, UMKM, surat menyurat, dan laporan kegiatan.",
        "Meningkatkan efisiensi administrasi dan transparansi layanan publik.",
      ],
      docs: [
        "/images/projects/simak1.jpg",
        "/images/projects/simak2.jpg",
        "/images/projects/simak3.jpg",
      ],
    },
    {
      title: "Full-Stack Developer | Sobat Dagang",
      place: "Dinas Perdagangan Kota Parepare",
      date: "Mar 2025 – Jun 2025",
      featured: true,
      desc: [
        "Membangun sistem informasi perdagangan dari nol.",
        "Dashboard data pasar, pedagang, dan harga komoditas.",
        "Eksplorasi AI untuk prediksi harga kebutuhan pokok.",
      ],
      docs: [
        "/images/projects/dagang1.jpg",
        "/images/projects/dagang2.jpg",
        "/images/projects/dagang3.jpg",
      ],
    },
    {
      title: "Data Analyst Intern",
      place: "PT Esaputlii Prakarsa Utama",
      date: "Okt 2025 – Nov 2025",
      desc: [
        "Data cleaning dan rekonsiliasi dataset 5 tahun.",
        "Analisis pola penjualan untuk identifikasi top seller.",
        "Membuat dashboard insight untuk manajemen.",
      ],
      docs: [
        "/images/projects/esaputlii1.jpg",
        "/images/projects/esaputlii2.jpg",
        "/images/projects/esaputlii3.jpg",
      ],
    },
    {
      title: "Front-End Developer | Parepare Dalam Genggaman (PDG)",
      place: "Project Pemerintah Kota Parepare",
      date: "2024",
      desc: [
        "Mengembangkan tampilan aplikasi layanan digital masyarakat.",
        "UI/UX modern, responsive, dan user friendly.",
        "Mendukung layanan publik berbasis web.",
      ],
      docs: [
        "/images/projects/pdg1.jpg",
        "/images/projects/pdg2.jpg",
        "/images/projects/pdg3.jpg",
      ],
    },
    {
      title: "Computer Vision | Object Detection",
      place: "Final Project - Visual Computing",
      date: "Agu 2024",
      desc: [
        "Membangun sistem deteksi objek menggunakan Python.",
        "Menggunakan OpenCV dan machine learning.",
        "Implementasi real-time detection berbasis kamera.",
      ],
      docs: [
        "/images/projects/cv1.jpg",
        "/images/projects/cv2.jpg",
        "/images/projects/cv3.jpg",
      ],
    },
    {
      title: "Image Processing Project",
      place: "Python",
      date: "Des 2023",
      desc: [
        "Pengolahan citra digital menggunakan Python.",
        "Konversi RGB ke grayscale.",
        "Filtering dan image enhancement.",
      ],
      docs: [
        "/images/projects/img1.jpg",
        "/images/projects/img2.jpg",
        "/images/projects/img3.jpg",
      ],
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.45 },
    },
  };

  return (
    <section className="min-h-screen px-6 py-20 bg-gray-50 dark:bg-gray-950">
      <h2 className="text-3xl md:text-4xl font-bold text-green-500 text-center mb-14">
        Projects
      </h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        {projects.map((project, i) => (
          <motion.div
            key={i}
            variants={item}
            className={`
              relative group p-6 rounded-2xl border transition-all duration-300
              bg-white dark:bg-gray-900
              border-gray-200 dark:border-gray-800
              hover:border-green-500
              hover:-translate-y-2 hover:shadow-2xl
              ${project.featured ? "ring-2 ring-green-500" : ""}
            `}
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl bg-green-400 opacity-0 group-hover:opacity-10 blur-xl transition"></div>

            {/* Badge */}
            {project.featured && (
              <span className="absolute top-3 right-3 text-xs bg-green-500 text-white px-2 py-1 rounded-md">
                ⭐ Featured
              </span>
            )}

            {/* Title */}
            <h3 className="text-lg font-bold leading-snug mb-2 relative z-10">
              {project.title}
            </h3>

            {/* Place */}
            <p className="text-sm text-green-500 mb-1 relative z-10">
              {project.place}
            </p>

            {/* Date */}
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 relative z-10">
              {project.date}
            </p>

            {/* Description */}
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-5 relative z-10">
              {project.desc.map((text, index) => (
                <li key={index} className="flex gap-2">
                  <span className="text-green-500">▹</span>
                  {text}
                </li>
              ))}
            </ul>

            {/* Documentation */}
            <div className="grid grid-cols-3 gap-2 relative z-10">
              {project.docs.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className="overflow-hidden rounded-xl group/img"
                >
                  <img
                    src={img}
                    alt={`Documentation ${idx + 1}`}
                    className="w-full h-20 object-cover rounded-xl border border-gray-200 dark:border-gray-700 transition duration-300 group-hover/img:scale-110"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal Image Viewer */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative"
            >
              <img
                src={selectedImage}
                alt="Preview"
                className="max-w-5xl max-h-[90vh] rounded-2xl shadow-2xl"
              />

              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-4 -right-4 bg-white text-black w-10 h-10 rounded-full text-xl font-bold shadow-lg"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;