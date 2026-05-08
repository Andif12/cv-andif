import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { useState } from "react";

function Organization() {
  const { lang } = useLanguage();

  const [selectedGallery, setSelectedGallery] = useState(null);

  const text = {
    id: {
      tag: "Leadership & Organisasi",
      title1: "Pengalaman",
      title2: "Organisasi",
      desc:
        "Pengalaman organisasi, kepemimpinan, dan koordinasi kegiatan kampus selama masa perkuliahan.",
      featured: "Utama",
      button: "Lihat Dokumentasi",
      close: "Tutup",
    },

    en: {
      tag: "Leadership & Organization",
      title1: "Organization",
      title2: "Experience",
      desc:
        "Leadership, committee, and organizational experiences throughout academic journey.",
      featured: "Featured",
      button: "View Documentation",
      close: "Close",
    },
  };

  const t = text[lang];

  const organizations = [
    {
      role:
        lang === "id"
          ? "Sekretaris Umum BEM"
          : "General Secretary — Student Executive Board",

      org:
        lang === "id"
          ? "BEM Institut Teknologi BJ Habibie"
          : "Student Executive Board of ITBJ Habibie",

      year: "2024",

      featured: true,

      cover: "/docs/bem/bem1.jpg",

      gallery: [
        "/docs/bem/bem1.jpg",
        "/docs/bem/bem2.jpg",
        "/docs/bem/bem3.jpg",
        "/docs/bem/bem4.jpg",
        "/docs/bem/bem5.jpg",
        "/docs/bem/bem6.jpg",
      ],

      desc:
        lang === "id"
          ? [
              "Mengelola administrasi organisasi dan surat menyurat.",
              "Mengkoordinasikan komunikasi internal organisasi.",
              "Membantu penyusunan agenda dan dokumentasi kegiatan.",
            ]
          : [
              "Managed organizational administration and correspondence.",
              "Coordinated internal organizational communication.",
              "Assisted agenda planning and activity documentation.",
            ],
    },

    {
      role:
        lang === "id"
          ? "Steering Committee Festival Seni"
          : "Arts Festival Steering Committee",

      org:
        lang === "id"
          ? "Festival Seni 2025"
          : "Arts Festival 2025",

      year: "2025",

      featured: true,

      cover: "/docs/festival/festival (1).jpg",

      gallery: [
        "/docs/festival/festival (1).jpg",
        "/docs/festival/festival (3).jpg",
        "/docs/festival/festival (4).jpg",
        "/docs/festival/festival (5).jpg",
        "/docs/festival/festival (6).jpg",
        "/docs/festival/festival (7).jpg",
        "/docs/festival/festival (8).jpg",
        "/docs/festival/festival (9).jpg",
        "/docs/festival/festival (10).jpg",
      ],

      desc:
        lang === "id"
          ? [
              "Mengawasi jalannya kepanitiaan dan pelaksanaan acara.",
              "Membantu pengambilan keputusan strategis kegiatan.",
              "Mengkoordinasikan komunikasi antar divisi.",
            ]
          : [
              "Supervised committee workflow and event execution.",
              "Assisted strategic decision making during event preparation.",
              "Coordinated communication between divisions.",
            ],
    },

    {
      role:
        lang === "id"
          ? "Ketua Liaison Officer"
          : "Liaison Officer Lead",

      org:
        lang === "id"
          ? "PKKMB Mahasiswa 2024"
          : "Student Orientation Committee 2024",

      year: "2024",

      featured: true,

      cover: "/docs/pkkmb/PKKMB (1).jpg",

      gallery: [
        "/docs/pkkmb/PKKMB (1).jpg",
        "/docs/pkkmb/PKKMB (2).jpg",
        "/docs/pkkmb/PKKMB (3).jpg",
        "/docs/pkkmb/PKKMB (4).jpg",
        "/docs/pkkmb/PKKMB (5).jpg",
        "/docs/pkkmb/PKKMB (6).jpg",
      ],

      desc:
        lang === "id"
          ? [
              "Mengkoordinasikan tim liaison officer mahasiswa.",
              "Menjalin komunikasi antara dosen dan mahasiswa.",
              "Membantu kelancaran pelaksanaan PKKMB.",
            ]
          : [
              "Coordinated student liaison officer team.",
              "Bridged communication between lecturers and students.",
              "Supported smooth execution of orientation activities.",
            ],
    },

    {
      role:
        lang === "id"
          ? "Koordinator Steering Committee"
          : "Steering Committee Coordinator",

      org:
        lang === "id"
          ? "LKMM-TM 2024"
          : "LKMM-TM 2024",

      year: "2024",

      featured: true,

      cover: "/docs/lkmm/lkmm (1).jpg",

      gallery: [
        "/docs/lkmm/lkmm (1).jpg",
        "/docs/lkmm/lkmm (2).jpg",
        "/docs/lkmm/lkmm (3).jpg",
      ],

      desc:
        lang === "id"
          ? [
              "Mengawasi pelaksanaan kegiatan pelatihan manajemen mahasiswa.",
              "Membantu evaluasi dan koordinasi antar panitia.",
              "Mendukung pengambilan keputusan kegiatan.",
            ]
          : [
              "Supervised student management training activities.",
              "Assisted committee evaluation and coordination.",
              "Supported strategic decision-making process.",
            ],
    },

    {
      role:
        lang === "id"
          ? "Tim Penyusun & Pengkaji AD/ART"
          : "AD/ART Drafting & Review Team",

      org:
        lang === "id"
          ? "BEM Institut Teknologi BJ Habibie"
          : "Student Executive Board of ITH",

      year: "2024",

      hasGallery: false,

      desc:
        lang === "id"
          ? [
              "Membantu penyusunan dan pengkajian aturan organisasi.",
              "Melakukan evaluasi terhadap AD/ART organisasi.",
              "Mendukung pengembangan tata kelola organisasi.",
            ]
          : [
              "Assisted drafting and reviewing organizational regulations.",
              "Evaluated organizational constitution and bylaws.",
              "Supported organizational governance development.",
            ],
    },

    {
      role:
        lang === "id"
          ? "Sekretaris Presidium"
          : "Secretary Presidium",

      org:
        lang === "id"
          ? "Maperwa 2022"
          : "Student Representative Assembly 2022",

      year: "2022",

      cover: "/docs/maperwa/presidium (1).jpeg",

      gallery: [
        "/docs/maperwa/presidium (1).jpeg",
        "/docs/maperwa/presidium (2).jpeg",
        "/docs/maperwa/presidium (3).jpeg",
        "/docs/maperwa/presidium (4).jpeg",
        "/docs/maperwa/presidium (5).jpeg",
        "/docs/maperwa/presidium (6).jpeg",
      ],

      desc:
        lang === "id"
          ? [
              "Mengelola administrasi dan dokumentasi persidangan.",
              "Membantu penyusunan agenda rapat organisasi.",
              "Mendukung komunikasi internal kelembagaan.",
            ]
          : [
              "Managed assembly administration and documentation.",
              "Assisted meeting agenda preparation.",
              "Supported institutional internal communication.",
            ],
    },
  ];

  return (
    <section className="py-28 px-6 bg-white dark:bg-gray-950">

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-24">

        <p className="uppercase tracking-[0.3em] text-green-500 text-xs font-semibold mb-4">
          {t.tag}
        </p>

        <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
          {t.title1}{" "}
          <span className="text-green-500">
            {t.title2}
          </span>
        </h2>

        <p className="mt-6 text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          {t.desc}
        </p>

      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        {organizations.map((item, i) => (

          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className="
              group overflow-hidden
              rounded-[32px]
              border border-gray-200 dark:border-gray-800
              bg-gray-50 dark:bg-gray-900
              hover:-translate-y-2
              hover:border-green-500/30
              hover:shadow-[0_25px_70px_rgba(34,197,94,0.08)]
              transition-all duration-500
            "
          >

            {/* COVER */}
            {item.hasGallery !== false && (

              <div className="relative h-64 overflow-hidden">

                <img
                  src={item.cover}
                  alt={item.role}
                  className="
                    w-full h-full object-cover
                    transition duration-700
                    group-hover:scale-110
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {item.featured && (
                  <span className="
                    absolute top-4 right-4
                    text-[11px]
                    px-3 py-1
                    rounded-full
                    bg-green-500
                    text-white
                  ">
                    {t.featured}
                  </span>
                )}

                <div className="absolute bottom-0 left-0 p-6 z-10">

                  <p className="text-sm text-green-400 font-semibold mb-2">
                    {item.year}
                  </p>

                  <h3 className="text-2xl font-bold text-white leading-snug">
                    {item.role}
                  </h3>

                  <p className="text-sm text-gray-200 mt-2">
                    {item.org}
                  </p>

                </div>

              </div>

            )}

            {/* NON GALLERY */}
            {item.hasGallery === false && (

              <div className="p-8 pb-0">

                <p className="text-sm text-green-500 font-semibold mb-2">
                  {item.year}
                </p>

                <h3 className="text-2xl font-bold leading-snug">
                  {item.role}
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  {item.org}
                </p>

              </div>

            )}

            {/* CONTENT */}
            <div className="p-8">

              {/* DESC */}
              <div className="space-y-4">

                {item.desc.map((point, idx) => (
                  <div
                    key={idx}
                    className="flex gap-3 text-sm text-gray-600 dark:text-gray-400"
                  >

                    <span className="w-2 h-2 rounded-full bg-green-500 mt-2"></span>

                    <span>{point}</span>

                  </div>
                ))}

              </div>

              {/* PREVIEW */}
              {item.hasGallery !== false && (

                <div className="flex gap-3 mt-7">

                  {item.gallery.slice(0, 4).map((img, idx) => (

                    <div key={idx} className="relative">

                      <img
                        src={img}
                        alt=""
                        className="
                          w-16 h-16 rounded-2xl
                          object-cover
                          border border-gray-200 dark:border-gray-700
                        "
                      />

                      {idx === 3 && item.gallery.length > 4 && (
                        <div className="
                          absolute inset-0
                          bg-black/70
                          rounded-2xl
                          flex items-center justify-center
                          text-white text-sm font-semibold
                        ">
                          +{item.gallery.length - 4}
                        </div>
                      )}

                    </div>

                  ))}

                </div>

              )}

              {/* BUTTON */}
              {item.hasGallery !== false && (

                <button
                  onClick={() => setSelectedGallery(item)}
                  className="
                    mt-7
                    w-full
                    py-3
                    rounded-2xl
                    bg-green-500
                    text-white
                    hover:bg-green-600
                    transition
                  "
                >
                  {t.button}
                </button>

              )}

            </div>

          </motion.div>

        ))}

      </div>

      {/* MODAL */}
      {selectedGallery && (
        <div className="
          fixed inset-0 z-[100]
          bg-black/80 backdrop-blur-md
          overflow-y-auto
          p-6
        ">

          <div className="max-w-7xl mx-auto">

            {/* TOP */}
            <div className="flex justify-between items-center mb-10">

              <div>

                <h2 className="text-3xl font-bold text-white">
                  {selectedGallery.role}
                </h2>

                <p className="text-gray-400 mt-2">
                  {selectedGallery.org}
                </p>

              </div>

              <button
                onClick={() => setSelectedGallery(null)}
                className="
                  px-5 py-2 rounded-xl
                  bg-white/10
                  text-white
                  hover:bg-white/20
                  transition
                "
              >
                {t.close}
              </button>

            </div>

            {/* GALLERY */}
            <div className="
              grid
              md:grid-cols-2
              xl:grid-cols-3
              gap-6
            ">

              {selectedGallery.gallery.map((img, idx) => (

                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="overflow-hidden rounded-3xl"
                >

                  <img
                    src={img}
                    alt=""
                    className="
                      w-full
                      h-full
                      object-cover
                      hover:scale-105
                      transition duration-500
                    "
                  />

                </motion.div>

              ))}

            </div>

          </div>

        </div>
      )}

    </section>
  );
}

export default Organization;