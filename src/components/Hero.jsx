import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import { useLanguage } from "../context/LanguageContext";
import profile from "../assets/profile.png";

function Hero() {
  const { lang } = useLanguage();

  const text = {
    id: {
      hello: "Hi, I'm 👋",
      desc: "Saya adalah fresh graduate Ilmu Komputer Institut Teknologi Bacharuddin Jusuf Habibie angkatan pertama yang memiliki ketertarikan pada pengembangan web dan kecerdasan buatan.",
      button: "🚀 Lihat Project",
      roles: [
        "Front-End Developer",
        2000,
        "Web Developer",
        2000,
        "AI Enthusiast",
        2000,
      ],
      rightDesc:
        "Fokus menciptakan antarmuka digital yang bersih, modern, dan fungsional. Mari bangun sesuatu yang luar biasa bersama.",
    },

    en: {
      hello: "Hi, I'm 👋",
      desc: "I am a fresh graduate in Computer Science from Institut Teknologi Bacharuddin Jusuf Habibie, first generation, with strong interest in web development and artificial intelligence.",
      button: "🚀 View Projects",
      roles: [
        "Front-End Developer",
        2000,
        "Web Developer",
        2000,
        "AI Enthusiast",
        2000,
      ],
      rightDesc:
        "Focused on building clean, modern, and functional digital interfaces. Let's create something extraordinary together.",
    },
  };

  const t = text[lang];

  return (
    <section className="min-h-screen flex items-center pt-24 px-6 relative overflow-hidden bg-white dark:bg-gray-950">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-200/20 via-transparent to-green-400/10 dark:from-green-500/10"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-center relative z-10">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            {t.hello}
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Andi Magfirah <br />
            <span className="text-green-500">Maqbul</span>
          </h1>

          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-sm leading-relaxed">
            {t.desc}
          </p>

          <Link
            to="projects"
            smooth
            duration={500}
            offset={-80}
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition cursor-pointer"
          >
            {t.button}
          </Link>
        </motion.div>

        {/* CENTER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center relative"
        >
          <div className="absolute w-80 h-80 bg-green-400/20 blur-3xl rounded-full"></div>

          <img
            src={profile}
            alt="Andi Magfirah Maqbul"
            className="w-64 md:w-80 relative z-10 drop-shadow-[0_0_40px_rgba(34,197,94,0.35)]"
          />
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold min-h-[80px]">
            <TypeAnimation
              sequence={t.roles}
              repeat={Infinity}
            />
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
            {t.rightDesc}
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;