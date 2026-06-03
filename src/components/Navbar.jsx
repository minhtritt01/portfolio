import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "../assets/logo.svg";

const links = [
  { id: 1, link: "home" },
  { id: 2, link: "about" },
  { id: 3, link: "portfolio" },
  { id: 4, link: "experience" },
  { id: 5, link: "contact" },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`flex justify-between items-center w-full h-20 px-6 text-white fixed z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/60 backdrop-blur-md shadow-lg shadow-black/40"
          : "bg-transparent"
      }`}
    >
      <Link to="home" smooth duration={500} className="cursor-pointer">
        <img src={logo} alt="Tri Dev" className="h-8 w-auto" />
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
                active === link ? "text-cyan-400" : "text-gray-400 hover:text-white"
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

      <button
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-10 text-gray-400 md:hidden"
        aria-label="Toggle menu"
      >
        {nav ? <FaTimes size={26} /> : <FaBars size={26} />}
      </button>

      {nav && (
        <ul className="z-10 fixed top-0 right-0 p-8 w-[70vw] h-screen shadow-2xl md:hidden flex flex-col justify-center items-end gap-6 bg-black/90 backdrop-blur-lg">
          <button
            className="absolute top-6 right-6 text-gray-400"
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
                className="text-2xl font-semibold capitalize text-gray-200 hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
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
