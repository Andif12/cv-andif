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
      short: "SiSatu",
      full:
        lang === "id"
          ? "Sistem Identifikasi dan Surveillance untuk Tindakan Urgent"
          : "Identification & Surveillance for Urgent Action",
      year: "2025",
      featured: true,
      github: "https://github.com/Andif12/PTC",
      stack: "Python • Colab • CV",
      desc:
        lang === "id"
          ? "Deteksi gerakan anomali ruang kelas."
          : "Classroom anomaly movement detection.",
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
      stack: "Laravel • MySQL",
      desc:
        lang === "id"
          ? "Digitalisasi sistem surat menyurat kampus."
          : "Campus correspondence digitalization.",
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
          ? "Simulasi portal akademik mahasiswa."
          : "Student academic portal simulation.",
    },

    {
      short: "VanameCounting",
      full:
        lang === "id"
          ? "AI Shrimp Counting System"
          : "AI Shrimp Counting System",
      year: "2026",
      featured: true,
      github: "https://github.com/Andif12/VanameCounting",
      stack: "YOLOv11 • ByteTrack • EfficientNet-Lite",
      desc:
        lang === "id"
          ? "Project skripsi menghitung udang vaname otomatis."
          : "Thesis project for automatic shrimp counting.",
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
            className="group relative rounded-[30px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(34,197,94,0.08)] transition-all duration-300"
          >
            {/* Badge */}
            <div className="flex justify-between items-center mb-5">
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
            <h3 className="text-2xl font-bold tracking-tight">
              {project.short}
            </h3>

            {/* Full Name */}
            <p className="text-sm text-gray-500 mt-2 leading-relaxed min-h-[40px]">
              {project.full}
            </p>

            {/* Stack */}
            <p className="mt-4 text-sm font-medium text-gray-700 dark:text-gray-300">
              {project.stack}
            </p>

            {/* Desc */}
            <p className="mt-5 text-gray-600 dark:text-gray-400 leading-relaxed min-h-[60px]">
              {project.desc}
            </p>

            {/* Button */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-7 px-5 py-2.5 rounded-2xl bg-green-500 text-white hover:bg-green-600 transition"
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