import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import profile from "../assets/profile.png";

function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-24 px-6 relative overflow-hidden bg-white dark:bg-gray-950">

      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-200/20 via-transparent to-green-400/10 dark:from-green-500/10"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-center relative z-10">

        {/* LEFT */}
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
          <p className="text-gray-600 dark:text-gray-400 mb-2">Hi, I'm 👋</p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Andi Magfirah <br />
            <span className="text-green-500">Maqbul</span>
          </h1>

          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-sm">
            Saya adalah mahasiswa Ilmu Komputer Intitut Teknologi Bacharuddin Jusuf Habibie angkatan 1 yang memiliki ketertarikan pada Pengembangan web dan Kecerdasaan buatan.
          </p>

          {/* BUTTON */}
          <Link
            to="projects"
            smooth
            duration={500}
            offset={-80}
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition cursor-pointer"
          >
            🚀 Lihat Project
          </Link>
        </motion.div>

        {/* CENTER FOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex justify-center relative"
        >
          <div className="absolute w-80 h-80 bg-green-400/20 blur-3xl rounded-full"></div>

          <img
            src={profile}
            className="w-64 md:w-80 relative z-10 drop-shadow-[0_0_40px_rgba(34,197,94,0.4)]"
          />
        </motion.div>

        {/* RIGHT */}
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}>
          <h2 className="text-3xl font-bold">
            <TypeAnimation
              sequence={["Front-End Developer", 2000, "Web Developer", 2000]}
              repeat={Infinity}
            />
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mt-4">
            Fokus menciptakan antarmuka digital yang bersih, modern, dan fungsional. Mari bangun sesuatu yang luar biasa bersama.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;