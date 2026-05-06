import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

function Projects() {
  const { lang } = useLanguage();

  const text = {
    id: {
      tag: "Portofolio Pilihan",
      title1: "Project",
      title2: "Saya",
      desc:
        "Kumpulan project unggulan dalam software engineering, computer vision, dan artificial intelligence.",
      featured: "Unggulan",
      github: "Lihat GitHub",
    },

    en: {
      tag: "Selected Portfolio",
      title1: "My",
      title2: "Projects",
      desc:
        "Featured projects in software engineering, computer vision, and artificial intelligence.",
      featured: "Featured",
      github: "View GitHub",
    },
  };

  const t = text[lang];

  const projects = [
    {
      short: "ASCEND AI",
      full:
        lang === "id"
          ? "Asisten AI untuk Diri Masa Depan & Kehidupan"
          : "AI Future Self & Life Assistant",
      year: "2026",
      featured: true,
      github: "https://github.com/Andif12/ascend-ai",
      stack: "Next.js • GPT-4o Mini • NLP • Tailwind",
      desc:
        lang === "id"
          ? "Platform AI interaktif untuk memberikan motivasi, refleksi diri, dan saran personal berbasis future self."
          : "Interactive AI platform for motivation, self-reflection, and personalized future-self advice.",
    },

    {
      short: "VanameCounting",
      full:
        lang === "id"
          ? "Deteksi dan Penghitungan Benur Udang Vaname"
          : "Detection and Counting of Vaname Shrimp Fry",
      year: "2026",
      featured: true,
      github: "https://github.com/Andif12/VanameCounting",
      stack: "YOLOv11 • ByteTrack • EfficientNet-Lite",
      desc:
        lang === "id"
          ? "Project skripsi untuk menghitung udang vaname secara otomatis menggunakan computer vision dan object tracking."
          : "Thesis project for automatic shrimp counting using computer vision and object tracking.",
    },

    {
      short: "SiSatu",
      full:
        lang === "id"
          ? "Sistem Identifikasi dan Surveillance untuk Tindakan Urgent"
          : "Identification & Surveillance for Urgent Action",
      year: "2025",
      featured: true,
      github: "https://github.com/Andif12/PTC",
      stack: "Python • Colab • OpenCV",
      desc:
        lang === "id"
          ? "Sistem deteksi gerakan anomali pada ruang kelas berbasis computer vision."
          : "Computer vision system for classroom anomaly movement detection.",
    },

    {
      short: "SURAT ITH",
      full:
        lang === "id"
          ? "Sistem Urusan Resmi Administrasi Tertulis"
          : "Official Written Administration System",
      year: "2025",
      featured: true,
      github: "https://github.com/robertsmithy185/surat-ith",
      stack: "Laravel • MySQL • Bootstrap",
      desc:
        lang === "id"
          ? "Digitalisasi sistem administrasi dan surat menyurat kampus."
          : "Digitalization of campus administration and correspondence system.",
    },

    {
      short: "Portal Akademik",
      full:
        lang === "id"
          ? "Portal Akademik Sederhana"
          : "Simple Academic Portal",
      year: "2024",
      github: "https://github.com/Andif12/Portal-Akademik-Sederhana",
      stack: "Java • OOP",
      desc:
        lang === "id"
          ? "Simulasi portal akademik mahasiswa berbasis object-oriented programming."
          : "Student academic portal simulation using object-oriented programming.",
    },

    {
      short: "Deteksi Objek",
      full:
        lang === "id"
          ? "Sistem Deteksi Objek dengan Dataset Kaggle"
          : "Object Detection with Public Dataset",
      year: "2025",
      github: "https://github.com/Andif12/Deteksi-Objek",
      stack: "Python • YOLO • CV",
      desc:
        lang === "id"
          ? "Implementasi model deteksi objek menggunakan dataset publik untuk eksperimen computer vision."
          : "Object detection implementation using public datasets for computer vision experiments.",
    },

    {
      short: "Alien Project",
      full:
        lang === "id"
          ? "Konversi RGB ke Grayscale"
          : "RGB to Grayscale Conversion",
      year: "2023",
      github: "https://github.com/Andif12/Tugas-Project-Alien",
      stack: "Python • Linear Algebra",
      desc:
        lang === "id"
          ? "Implementasi konsep aljabar linear pada pengolahan citra digital."
          : "Linear algebra implementation for digital image processing.",
    },
  ];

  return (
    <section className="py-28 px-6 bg-gray-50 dark:bg-gray-950">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-24">
        <p className="uppercase tracking-[0.3em] text-green-500 text-xs font-semibold mb-4">
          {t.tag}
        </p>

        <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
          {t.title1} <span className="text-green-500">{t.title2}</span>
        </h2>

        <p className="mt-6 text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          {t.desc}
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className="group relative rounded-[30px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 hover:-translate-y-2 hover:border-green-500/30 hover:shadow-[0_25px_70px_rgba(34,197,94,0.08)] transition-all duration-300"
          >
            {/* Glow Hover */}
            <div className="absolute inset-0 rounded-[30px] bg-gradient-to-br from-green-500/0 via-transparent to-green-500/0 group-hover:from-green-500/5 group-hover:to-green-500/5 transition"></div>

            {/* Badge */}
            <div className="flex justify-between items-center mb-5 relative z-10">
              <p className="text-sm text-green-500 font-semibold">
                {project.year}
              </p>

              {project.featured && (
                <span className="text-[11px] px-3 py-1 rounded-full bg-green-500 text-white">
                  {t.featured}
                </span>
              )}
            </div>

            {/* Short Name */}
            <h3 className="text-2xl font-bold tracking-tight relative z-10">
              {project.short}
            </h3>

            {/* Full Name */}
            <p className="text-sm text-gray-500 mt-2 leading-relaxed min-h-[42px] relative z-10">
              {project.full}
            </p>

            {/* Stack */}
            <div className="mt-5 relative z-10">
              <span className="inline-flex px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-300">
                {project.stack}
              </span>
            </div>

            {/* Desc */}
            <p className="mt-6 text-gray-600 dark:text-gray-400 leading-relaxed min-h-[90px] relative z-10">
              {project.desc}
            </p>

            {/* Button */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-7 px-5 py-2.5 rounded-2xl bg-green-500 text-white hover:bg-green-600 transition relative z-10"
            >
              {t.github}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;