import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "../assets/logo.svg";
import { useTheme } from "../context/ThemeContext";

const links = [
  { id: 1, link: "home" },
  { id: 2, link: "about" },
  { id: 3, link: "work" },
  { id: 4, link: "portfolio" },
  { id: 5, link: "experience" },
  { id: 6, link: "contact" },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const { dark, toggle } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`flex justify-between items-center w-full h-20 px-6 fixed z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-black/60 backdrop-blur-md shadow-lg shadow-slate-200/60 dark:shadow-black/40"
          : "bg-transparent backdrop-blur-none"
      }`}
    >
      <Link to="home" smooth duration={500} className="cursor-pointer">
        <img
          src={logo}
          alt="Tri Dev"
          className="h-8 w-auto invert dark:invert-0"
        />
      </Link>

      <ul className="hidden md:flex items-center gap-1">
        {links.map(({ link, id }) => (
          <li key={id}>
            <Link
              to={link}
              smooth
              duration={500}
              spy
              onSetActive={() => setActive(link)}
              className={`relative px-4 py-2 cursor-pointer capitalize font-medium transition-colors duration-200 rounded-md group ${
                active === link
                  ? "text-cyan-500 dark:text-cyan-400"
                  : "text-slate-500 dark:text-gray-400 hover:text-slate-800 dark:hover:text-white"
              }`}
            >
              {link}
              <span
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-300 ${
                  active === link ? "w-4/5" : "w-0 group-hover:w-4/5"
                }`}
              />
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3">
        <button
          onClick={toggle}
          aria-label="Toggle theme"
          className="p-2 rounded-full text-slate-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-white/10 transition-all duration-200"
        >
          {dark ? <FaSun size={18} /> : <FaMoon size={18} />}
        </button>

        <button
          onClick={() => setNav(!nav)}
          className="cursor-pointer z-10 text-slate-500 dark:text-gray-400 md:hidden"
          aria-label="Toggle menu"
        >
          {nav ? <FaTimes size={26} /> : <FaBars size={26} />}
        </button>
      </div>

      {nav && (
        <ul className="z-10 fixed top-0 right-0 p-8 w-[70vw] h-screen shadow-2xl md:hidden flex flex-col justify-center items-end gap-6 bg-white/95 dark:bg-black/90 backdrop-blur-lg">
          <button
            className="absolute top-6 right-6 text-slate-500 dark:text-gray-400"
            onClick={() => setNav(false)}
          >
            <FaTimes size={24} />
          </button>
          {links.map(({ link, id }) => (
            <li key={id}>
              <Link
                to={link}
                smooth
                duration={500}
                onClick={() => setNav(false)}
                className="text-2xl font-semibold capitalize text-slate-700 dark:text-gray-200 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
