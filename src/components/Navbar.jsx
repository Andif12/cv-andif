import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);

  // INIT THEME
  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved === "light") {
      document.documentElement.classList.remove("dark");
      setDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  // TOGGLE
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

  const menu = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        <h1 className="text-xl font-bold text-green-500">
          My Portofolio
        </h1>

        {/* DESKTOP */}
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

          {/* TOGGLE */}
          <button
            onClick={toggleTheme}
            className="text-green-500 text-lg"
          >
            {dark ? <FaSun /> : <FaMoon />}
          </button>
        </nav>

        {/* MOBILE BTN */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-green-500 text-xl"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-4 pb-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          {menu.map((item, i) => (
            <Link
              key={i}
              to={item.to}
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setOpen(false)}
              activeClass="text-green-500"
              className="block py-2 cursor-pointer text-gray-700 dark:text-gray-300"
            >
              {item.name}
            </Link>
          ))}

          <button
            onClick={toggleTheme}
            className="mt-4 text-green-500 text-lg"
          >
            {dark ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      )}
    </header>
  );
}

export default Navbar;