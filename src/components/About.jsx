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
      title: "Tentang Saya",
      desc:
        "Saya adalah fresh graduate Ilmu Komputer yang memiliki ketertarikan pada pengembangan web dan kecerdasan buatan. Saya terbiasa membangun aplikasi berbasis web menggunakan teknologi modern dengan fokus pada fungsionalitas, efisiensi, dan tampilan yang estetis. Selain itu, saya juga mengeksplorasi penggunaan Python dan tools seperti Google Colab untuk eksperimen dan pengembangan berbasis AI.",
      stack: "Tech Stack",
    },

    en: {
      title: "About Me",
      desc:
        "I am a fresh Computer Science graduate with strong interest in web development and artificial intelligence. I am experienced in building web-based applications using modern technologies with focus on functionality, efficiency, and clean visual design. I also explore Python and tools like Google Colab for AI experimentation and development.",
      stack: "Tech Stack",
    },
  };

  const t = text[lang];

  const techStack = [
    {
      name: "HTML",
      icon: <FaHtml5 />,
      class: "hover:text-orange-500",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt />,
      class: "hover:text-blue-500",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      class: "hover:text-yellow-400",
    },
    {
      name: "React",
      icon: <FaReact />,
      class: "hover:text-cyan-400",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      class: "hover:text-green-500",
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss />,
      class: "hover:text-sky-400",
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
      class: "hover:text-red-500",
    },
    {
      name: "MySQL",
      icon: <SiMysql />,
      class: "hover:text-blue-600",
    },
    {
      name: "Laravel",
      icon: <FaLaravel />,
      class: "hover:text-red-600",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      class: "hover:text-blue-500",
    },
    {
      name: "Python",
      icon: <FaPython />,
      class: "hover:text-yellow-500",
    },
    {
      name: "Colab",
      icon: <SiGooglecolab />,
      class: "hover:text-orange-400",
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.8,
    },

    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-white dark:bg-gray-950">
      <div className="max-w-5xl text-center">

        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
          {lang === "id" ? (
            <>
              Tentang <span className="text-green-500">Saya</span>
            </>
          ) : (
            <>
              About <span className="text-green-500">Me</span>
            </>
          )}
        </h2>

        {/* Desc */}
        <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed text-lg">
          {t.desc}
        </p>

        {/* Stack */}
        <div className="mt-14">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-8">
            {t.stack}
          </h3>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-7 justify-items-center"
          >
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                variants={item}
                className="group flex flex-col items-center"
              >
                {/* Icon */}
                <div
                  className={`
                    text-4xl text-gray-400 dark:text-gray-600
                    transition duration-300 transform
                    hover:scale-125 hover:-translate-y-1
                    ${tech.class}
                    hover:drop-shadow-[0_0_12px_rgba(34,197,94,0.45)]
                  `}
                >
                  {tech.icon}
                </div>

                {/* Label */}
                <span className="text-xs mt-2 opacity-0 group-hover:opacity-100 transition text-gray-600 dark:text-gray-400">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default About;