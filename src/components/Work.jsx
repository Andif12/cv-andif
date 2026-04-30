// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useLanguage } from "../context/LanguageContext";

// function Work() {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const { lang } = useLanguage();

//   const text = {
//     id: {
//       tag: "Perjalanan Profesional",
//       title1: "Pengalaman",
//       title2: "Kerja",
//       desc:
//         "Pengalaman membangun produk digital, merancang antarmuka modern, dan mengubah data menjadi keputusan.",
//       button: "Lihat GitHub",
//       featured: "Unggulan",
//     },

//     en: {
//       tag: "Professional Journey",
//       title1: "Work",
//       title2: "Experience",
//       desc:
//         "Experience building digital products, crafting modern interfaces, and turning data into decisions.",
//       button: "View GitHub",
//       featured: "Featured",
//     },
//   };

//   const t = text[lang];

//   const works = [
//     {
//       role:
//         lang === "id"
//           ? "Full-Stack Developer"
//           : "Full-Stack Developer",
//       company: "SIMAK",
//       subtitle:
//         lang === "id"
//           ? "Sistem Manajemen Kelurahan"
//           : "Village Management System",
//       place: "Institut Teknologi BJ Habibie (KKN)",
//       date: "2025",
//       featured: true,
//       github: "https://github.com/Andif12/simak",
//       desc:
//         lang === "id"
//           ? [
//               "Membangun platform digital untuk 22 kelurahan Kota Parepare.",
//               "Mengelola data penduduk, UMKM, surat menyurat.",
//               "Meningkatkan efisiensi layanan publik.",
//             ]
//           : [
//               "Built digital platform for 22 villages in Parepare.",
//               "Managed citizen data, MSMEs, and document services.",
//               "Improved efficiency of public services.",
//             ],
//       docs: [
//         "/images/Works/simak1.jpg",
//         "/images/Works/simak2.jpg",
//         "/images/Works/simak3.jpg",
//       ],
//     },

//     {
//       role: "Full-Stack Developer",
//       company: "Sobat Dagang",
//       subtitle:
//         lang === "id"
//           ? "Sistem Informasi Perdagangan"
//           : "Trade Information System",
//       place: "Dinas Perdagangan Kota Parepare",
//       date: "2025",
//       featured: true,
//       github: "https://github.com/abu2906/Sobat-Dagang-MBKM",
//       desc:
//         lang === "id"
//           ? [
//               "Membangun dashboard pasar dan harga komoditas.",
//               "Manajemen data pedagang dan pasar.",
//               "Eksplorasi prediksi harga berbasis AI.",
//             ]
//           : [
//               "Built market dashboard and commodity prices.",
//               "Managed merchants and market data.",
//               "Explored AI-based price prediction.",
//             ],
//       docs: [
//         "/images/Works/dagang1.jpg",
//         "/images/Works/dagang2.jpg",
//         "/images/Works/dagang3.jpg",
//       ],
//     },

//     {
//       role: "Front-End Developer",
//       company: "PDG",
//       subtitle:
//         lang === "id"
//           ? "Parepare Dalam Genggaman"
//           : "Parepare in Your Hands",
//       place:
//         lang === "id"
//           ? "Pemerintah Kota Parepare"
//           : "Parepare City Government",
//       date: "2024",
//       github: "https://github.com/NasroelLah/pdg-front",
//       desc:
//         lang === "id"
//           ? [
//               "Membangun UI modern dan responsive.",
//               "Digitalisasi layanan masyarakat.",
//               "Fokus pada user experience.",
//             ]
//           : [
//               "Built modern and responsive UI.",
//               "Digitized public services.",
//               "Focused on user experience.",
//             ],
//       docs: [
//         "/images/Works/pdg1.jpg",
//         "/images/Works/pdg2.jpg",
//         "/images/Works/pdg3.jpg",
//       ],
//     },

//     {
//       role: "Data Analyst Intern",
//       company: "PT Esaputlii",
//       subtitle: "Sales Analytics Division",
//       place: "Indonesia",
//       date: "2025",
//       github: "",
//       desc:
//         lang === "id"
//           ? [
//               "Cleaning dataset penjualan 5 tahun.",
//               "Analisis top seller dan tren penjualan.",
//               "Dashboard insight untuk manajemen.",
//             ]
//           : [
//               "Cleaned 5 years sales dataset.",
//               "Analyzed top sellers and trends.",
//               "Built management insight dashboard.",
//             ],
//       docs: [
//         "/images/Works/esaputlii1.jpg",
//         "/images/Works/esaputlii2.jpg",
//         "/images/Works/esaputlii3.jpg",
//       ],
//     },
//   ];

//   return (
//     <section className="py-28 px-6 bg-white dark:bg-gray-950">
//       {/* Header */}
//       <div className="max-w-4xl mx-auto text-center mb-24">
//         <p className="uppercase tracking-[0.3em] text-green-500 text-xs font-semibold mb-4">
//           {t.tag}
//         </p>

//         <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
//           {t.title1} <span className="text-green-500">{t.title2}</span>
//         </h2>

//         <p className="mt-6 text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
//           {t.desc}
//         </p>
//       </div>

//       {/* Grid */}
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
//         {works.map((work, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 70 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.55 }}
//             viewport={{ once: true }}
//             className="group rounded-[32px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(34,197,94,0.08)] transition-all duration-300"
//           >
//             <div className="flex justify-between items-start gap-4">
//               <div>
//                 <p className="text-sm text-green-500 font-semibold mb-3">
//                   {work.date}
//                 </p>

//                 <h3 className="text-2xl font-bold">
//                   {work.role}
//                 </h3>

//                 <p className="text-lg font-semibold mt-1">
//                   {work.company}
//                 </p>

//                 <p className="text-sm text-gray-500 mt-1">
//                   {work.subtitle}
//                 </p>

//                 <p className="text-sm text-gray-500">
//                   {work.place}
//                 </p>
//               </div>

//               {work.featured && (
//                 <span className="text-xs px-3 py-1 rounded-full bg-green-500 text-white">
//                   {t.featured}
//                 </span>
//               )}
//             </div>

//             <div className="h-px bg-gray-200 dark:bg-gray-800 my-6"></div>

//             <div className="space-y-3">
//               {work.desc.map((item, idx) => (
//                 <div
//                   key={idx}
//                   className="flex gap-3 text-sm text-gray-600 dark:text-gray-400"
//                 >
//                   <span className="w-2 h-2 rounded-full bg-green-500 mt-2"></span>
//                   <span>{item}</span>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-7">
//               <a
//                 href={work.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex px-5 py-2.5 rounded-2xl bg-green-500 text-white hover:bg-green-600 transition"
//               >
//                 {t.button}
//               </a>
//             </div>

//             <div className="grid grid-cols-3 gap-3 mt-7">
//               {work.docs.map((img, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => setSelectedImage(img)}
//                   className="overflow-hidden rounded-2xl"
//                 >
//                   <img
//                     src={img}
//                     alt="doc"
//                     className="w-full h-24 object-cover hover:scale-110 transition duration-500"
//                   />
//                 </button>
//               ))}
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Modal */}
//       <AnimatePresence>
//         {selectedImage && (
//           <motion.div
//             onClick={() => setSelectedImage(null)}
//             className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center px-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.img
//               src={selectedImage}
//               alt="preview"
//               className="max-w-6xl max-h-[90vh] rounded-3xl shadow-2xl"
//               initial={{ scale: 0.88 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.88 }}
//             />
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }

// export default Work;

// WORK VERSION TANPA FOTO / TANPA docs / TANPA modal

import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

function Work() {
  const { lang } = useLanguage();

  const text = {
    id: {
      tag: "Perjalanan Profesional",
      title1: "Pengalaman",
      title2: "Kerja",
      desc:
        "Pengalaman membangun produk digital, merancang antarmuka modern, dan mengubah data menjadi keputusan.",
      button: "Lihat GitHub",
      featured: "Unggulan",
    },

    en: {
      tag: "Professional Journey",
      title1: "Work",
      title2: "Experience",
      desc:
        "Experience building digital products, crafting modern interfaces, and turning data into decisions.",
      button: "View GitHub",
      featured: "Featured",
    },
  };

  const t = text[lang];

  const works = [
    {
      role: "Full-Stack Developer",
      company: "SIMAK",
      subtitle:
        lang === "id"
          ? "Sistem Manajemen Kelurahan"
          : "Village Management System",
      place: "Institut Teknologi BJ Habibie (KKN)",
      date: "2025",
      featured: true,
      github: "https://github.com/Andif12/simak",
      desc:
      lang === "id"
        ? [
            "Membangun platform digital untuk 22 kelurahan Kota Parepare.",
            "Menampilkan potensi dan sejarah tiap kelurahan.",
            "Menyediakan informasi kontak tiap kelurahan.",
          ]
        : [
            "Built a digital platform for 22 villages in Parepare.",
            "Displayed each village's potential and history.",
            "Provided contact information for each village.",
          ],
    },

    {
      role: "Full-Stack Developer",
      company: "Sobat Dagang",
      subtitle:
        lang === "id"
          ? "Sistem Informasi Perdagangan"
          : "Trade Information System",
      place: "Dinas Perdagangan Kota Parepare",
      date: "2025",
      featured: true,
      github: "https://github.com/abu2906/Sobat-Dagang-MBKM",
      desc:
        lang === "id"
          ? [
              "Membangun dashboard pasar dan harga komoditas.",
              "Manajemen data pedagang dan pasar.",
              "Eksplorasi prediksi harga berbasis AI.",
            ]
          : [
              "Built market dashboard and commodity prices.",
              "Managed merchants and market data.",
              "Explored AI-based price prediction.",
            ],
    },

    {
      role: "Front-End Developer",
      company: "PDG",
      subtitle:
        lang === "id"
          ? "Parepare Dalam Genggaman"
          : "Parepare in Your Hands",
      place:
        lang === "id"
          ? "Pemerintah Kota Parepare"
          : "Parepare City Government",
      date: "2024",
      github: "https://github.com/NasroelLah/pdg-front",
      desc:
        lang === "id"
          ? [
              "Membangun UI modern dan responsive.",
              "Digitalisasi layanan masyarakat.",
              "Fokus pada user experience.",
            ]
          : [
              "Built modern and responsive UI.",
              "Digitized public services.",
              "Focused on user experience.",
            ],
    },

    {
        role:
        lang === "id"
          ? "Data Analysis Intern"
          : "Data Analysis Intern",

      company: "PT Esaputlii Prakarsa Utama",

      subtitle:
        lang === "id"
          ? "Divisi Pemasaran, Penjualan & Distribusi"
          : "Marketing, Sales & Delivery Division",

      place: "Kabupaten Barru",

      date: "2025",

      github: "https://github.com/Andif12/Rekap-data",

      desc:
        lang === "id"
        ? [
            "Cleaning dataset penjualan 5 tahun terakhir.",
            "Analisis produk penjualan terbaik bulanan.",
            "Membuat dashboard insight untuk kebutuhan manajemen.",
          ]
        : [
            "Cleaned 5 years of sales dataset.",
            "Analyzed monthly best-selling products.",
            "Built insight dashboard for management needs.",
          ],
    },
  ];

  return (
    <section className="py-28 px-6 bg-white dark:bg-gray-950">
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
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {works.map((work, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="group rounded-[32px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(34,197,94,0.08)] transition-all duration-300"
          >
            <div className="flex justify-between items-start gap-4">
              <div>
                <p className="text-sm text-green-500 font-semibold mb-3">
                  {work.date}
                </p>

                <h3 className="text-2xl font-bold">
                  {work.role}
                </h3>

                <p className="text-lg font-semibold mt-1">
                  {work.company}
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  {work.subtitle}
                </p>

                <p className="text-sm text-gray-500">
                  {work.place}
                </p>
              </div>

              {work.featured && (
                <span className="text-xs px-3 py-1 rounded-full bg-green-500 text-white">
                  {t.featured}
                </span>
              )}
            </div>

            <div className="h-px bg-gray-200 dark:bg-gray-800 my-6"></div>

            <div className="space-y-3">
              {work.desc.map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-3 text-sm text-gray-600 dark:text-gray-400"
                >
                  <span className="w-2 h-2 rounded-full bg-green-500 mt-2"></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {work.github && (
              <div className="mt-7">
                <a
                  href={work.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex px-5 py-2.5 rounded-2xl bg-green-500 text-white hover:bg-green-600 transition"
                >
                  {t.button}
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Work;