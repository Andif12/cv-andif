import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useLanguage } from "../context/LanguageContext";
import {
  FaBars,
  FaTimes,
  FaSun,
  FaMoon,
  FaGlobe,
} from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);

  // ambil global language context
  const { lang, toggleLang } = useLanguage();

  // INIT THEME
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  // TOGGLE THEME
  const toggleTheme = () => {
    const html = document.documentElement;

    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDark(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDark(true);
    }
  };

  // TEXT LANGUAGE
  const text = {
    id: {
      title: "Portofolio Saya",
      menu: [
        { name: "Beranda", to: "home" },
        { name: "Tentang", to: "about" },
        { name: "Pengalaman", to: "work" },
        { name: "Proyek", to: "projects" },
        { name: "Kontak", to: "contact" },
      ],
    },

    en: {
      title: "My Portfolio",
      menu: [
        { name: "Home", to: "home" },
        { name: "About", to: "about" },
        { name: "Work Experience", to: "work" },
        { name: "Projects", to: "projects" },
        { name: "Contact", to: "contact" },
      ],
    },
  };

  const menu = text[lang].menu;

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <h1 className="text-xl font-bold text-green-500">
          {text[lang].title}
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          {menu.map((item, i) => (
            <Link
              key={i}
              to={item.to}
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              activeClass="text-green-500 border-b-2 border-green-500 pb-1"
              className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-green-500 transition"
            >
              {item.name}
            </Link>
          ))}

          {/* Language */}
          <button
            onClick={toggleLang}
            className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-green-500 hover:scale-110 transition"
          >
            <FaGlobe />
          </button>

          {/* Theme */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-green-500 hover:scale-110 transition"
          >
            {dark ? <FaSun /> : <FaMoon />}
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-green-500 text-xl"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-5 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          {menu.map((item, i) => (
            <Link
              key={i}
              to={item.to}
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setOpen(false)}
              className="block py-3 text-gray-700 dark:text-gray-300 hover:text-green-500 transition"
            >
              {item.name}
            </Link>
          ))}

          <div className="flex gap-3 mt-4">
            <button
              onClick={toggleLang}
              className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-green-500"
            >
              <FaGlobe />
            </button>

            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-green-500"
            >
              {dark ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;