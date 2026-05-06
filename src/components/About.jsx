import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaLaravel,
  FaPython,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMysql,
  SiTypescript,
  SiGooglecolab,
} from "react-icons/si";

function About() {
  const { lang } = useLanguage();

  const text = {
    id: {
      title1: "Tentang",
      title2: "Saya",
      desc:
        "Saya adalah fresh graduate Ilmu Komputer yang memiliki ketertarikan pada pengembangan web dan kecerdasan buatan. Terbiasa membangun aplikasi modern dengan fokus pada fungsionalitas, efisiensi, dan tampilan yang bersih.",
      stack: "Tech Stack",
    },

    en: {
      title1: "About",
      title2: "Me",
      desc:
        "I am a fresh Computer Science graduate with strong interest in web development and artificial intelligence. Experienced in building modern applications with focus on functionality, efficiency, and clean design.",
      stack: "Tech Stack",
    },
  };

  const t = text[lang];

  const techStack = [
    { name: "HTML", icon: <FaHtml5 />, class: "hover:text-orange-500" },
    { name: "CSS", icon: <FaCss3Alt />, class: "hover:text-blue-500" },
    { name: "JavaScript", icon: <FaJs />, class: "hover:text-yellow-400" },
    { name: "React", icon: <FaReact />, class: "hover:text-cyan-400" },
    { name: "Node.js", icon: <FaNodeJs />, class: "hover:text-green-500" },
    { name: "Tailwind", icon: <SiTailwindcss />, class: "hover:text-sky-400" },
    { name: "Git", icon: <FaGitAlt />, class: "hover:text-red-500" },
    { name: "MySQL", icon: <SiMysql />, class: "hover:text-blue-600" },
    { name: "Laravel", icon: <FaLaravel />, class: "hover:text-red-600" },
    { name: "TypeScript", icon: <SiTypescript />, class: "hover:text-blue-500" },
    { name: "Python", icon: <FaPython />, class: "hover:text-yellow-500" },
    { name: "Colab", icon: <SiGooglecolab />, class: "hover:text-orange-400" },
  ];

  return (
    <section className="relative py-32 px-6 bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">

      {/* top blur pemisah dari hero */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white dark:from-gray-950 to-transparent"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">

        {/* Title */}
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
          {t.title1} <span className="text-green-500">{t.title2}</span>
        </h2>

        {/* Desc */}
        <p className="mt-7 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          {t.desc}
        </p>

        {/* Stack */}
        <div className="mt-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800 dark:text-gray-200">
            {t.stack}
          </h3>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center">
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                viewport={{ once: true }}
                className="group flex flex-col items-center"
              >
                <div
                  className={`
                    text-4xl text-gray-400 dark:text-gray-600
                    transition duration-300
                    hover:scale-125 hover:-translate-y-1
                    ${tech.class}
                    hover:drop-shadow-[0_0_14px_rgba(34,197,94,0.45)]
                  `}
                >
                  {tech.icon}
                </div>

                <span className="text-xs mt-2 opacity-0 group-hover:opacity-100 transition text-gray-600 dark:text-gray-400">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;