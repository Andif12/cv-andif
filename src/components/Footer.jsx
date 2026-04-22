import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">

        {/* KIRI */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold text-White-500">
            Andi Magfirah Maqbul.
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
             © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* KANAN (SOCIAL ICON) */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/Andif12"
            target="_blank"
            className="text-gray-600 dark:text-gray-400 hover:text-green-500 hover:scale-125 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/andi-magfirah-maqbul/"
            target="_blank"
            className="text-gray-600 dark:text-gray-400 hover:text-green-500 hover:scale-125 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:andifff12@gmail.com"
            className="text-gray-600 dark:text-gray-400 hover:text-green-500 hover:scale-125 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* COPYRIGHT */}
      {/* <div className="text-center text-gray-500 text-sm pb-4">
        © {new Date().getFullYear()} Andi Magfirah. All rights reserved.
      </div> */}
    </footer>
  );
}

export default Footer;