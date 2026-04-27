import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaNodeJs, FaGitAlt, FaLaravel, FaPython,
} from "react-icons/fa";
import {
  SiTailwindcss, SiMysql, SiTypescript, SiGooglecolab,
} from "react-icons/si";

function About() {
  const techStack = [
    { name: "HTML", icon: <FaHtml5 />, class: "hover:text-orange-500 dark:hover:text-orange-500" },
    { name: "CSS", icon: <FaCss3Alt />, class: "hover:text-blue-500 dark:hover:text-blue-500" },
    { name: "JavaScript", icon: <FaJs />, class: "hover:text-yellow-400 dark:hover:text-yellow-400" },
    { name: "React", icon: <FaReact />, class: "hover:text-cyan-400 dark:hover:text-cyan-400" },
    { name: "Node.js", icon: <FaNodeJs />, class: "hover:text-green-500 dark:hover:text-green-500" },
    { name: "Tailwind", icon: <SiTailwindcss />, class: "hover:text-sky-400 dark:hover:text-sky-400" },
    { name: "Git", icon: <FaGitAlt />, class: "hover:text-red-500 dark:hover:text-red-500" },
    { name: "MySQL", icon: <SiMysql />, class: "hover:text-blue-600 dark:hover:text-blue-600" },
    { name: "Laravel", icon: <FaLaravel />, class: "hover:text-red-600 dark:hover:text-red-600" },
    { name: "TypeScript", icon: <SiTypescript />, class: "hover:text-blue-500 dark:hover:text-blue-500" },
    { name: "Python", icon: <FaPython />, class: "hover:text-yellow-500 dark:hover:text-yellow-500" },
    { name: "Colab", icon: <SiGooglecolab />, class: "hover:text-orange-400 dark:hover:text-orange-400" },
  ];

  // 🔥 container (atur delay antar item)
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1, // ⬅️ jeda antar icon
      },
    },
  };

  // 🔥 item animasi
  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-2 bg-white dark:bg-gray-950">

      <div className="max-w-5xl text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-6">
          About Me
        </h2>

       <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Saya adalah fresh graduate Ilmu Komputer yang memiliki ketertarikan pada 
          pengembangan web dan kecerdasan buatan. Saya terbiasa membangun aplikasi 
          berbasis web menggunakan teknologi modern dengan fokus pada fungsionalitas, 
          efisiensi, dan tampilan yang estetis. Selain itu, saya juga mengeksplorasi 
          penggunaan Python dan tools seperti Google Colab untuk eksperimen dan 
          pengembangan berbasis AI.
        </p>

        {/* TECH STACK */}
        <div className="mt-12">
          <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-200">
            Tech Stack
          </h3>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-3 sm:grid-cols-6 gap-6 justify-items-center"
          >

            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                variants={item}
                className="group flex flex-col items-center"
              >

                {/* ICON */}
                <div
                  className={`
                    text-4xl 
                    text-gray-400 dark:text-gray-600
                    transition duration-300 transform
                    hover:scale-125 hover:-translate-y-1
                    ${tech.class}
                    hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.6)]
                  `}
                >
                  {tech.icon}
                </div>

                {/* LABEL */}
                <span className="text-xs mt-2 opacity-0 group-hover:opacity-100 transition text-gray-600 dark:text-gray-400">
                  {tech.name}
                </span>

              </motion.div>
            ))}

          </motion.div>
        </div>

      </div>
    </div>
  );
}

export default About;