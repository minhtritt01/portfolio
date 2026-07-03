import { useState, useEffect, Fragment } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaSun,
  FaMoon,
  FaHome,
  FaUser,
  FaBriefcase,
  FaImages,
  FaCode,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.svg";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

const links = [
  { id: 1, link: "home", icon: FaHome },
  { id: 2, link: "about", icon: FaUser },
  { id: 3, link: "work", icon: FaBriefcase },
  { id: 4, link: "portfolio", icon: FaImages },
  { id: 5, link: "experience", icon: FaCode },
  { id: 6, link: "contact", icon: FaEnvelope },
];

const panelVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 380, damping: 38, mass: 0.9 },
  },
  exit: {
    x: "100%",
    transition: { type: "tween", duration: 0.22, ease: "easeIn" },
  },
};

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2, ease: "easeOut" } },
};

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const { dark, toggle } = useTheme();
  const { lang, toggle: toggleLang } = useLanguage();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = nav ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [nav]);

  return (
    <Fragment>
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
              className={`relative px-4 py-2 cursor-pointer font-medium transition-colors duration-200 rounded-md group ${
                active === link
                  ? "text-cyan-500 dark:text-cyan-400"
                  : "text-slate-500 dark:text-gray-400 hover:text-slate-800 dark:hover:text-white"
              }`}
            >
              {t(`navbar.${link}`)}
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
          onClick={toggleLang}
          aria-label={t("navbar.toggleLanguage")}
          className="px-2.5 py-1.5 rounded-full text-xs font-semibold text-slate-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-white/10 transition-all duration-200"
        >
          {lang === "en" ? "VI" : "EN"}
        </button>

        <button
          onClick={toggle}
          aria-label={t("navbar.toggleTheme")}
          className="p-2 rounded-full text-slate-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-white/10 transition-all duration-200"
        >
          {dark ? <FaSun size={18} /> : <FaMoon size={18} />}
        </button>

        <button
          onClick={() => setNav(true)}
          className="cursor-pointer text-slate-500 dark:text-gray-400 md:hidden p-2 -mr-2"
          aria-label={t("navbar.openMenu")}
        >
          <FaBars size={22} />
        </button>
      </div>
      </nav>

      <AnimatePresence>
        {nav && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setNav(false)}
              className="fixed inset-0 z-40 bg-slate-900/60 dark:bg-black/80 md:hidden"
            />
            <motion.div
              key="panel"
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{ willChange: "transform" }}
              className="z-50 fixed top-0 right-0 bottom-0 w-[82vw] max-w-sm shadow-2xl md:hidden flex flex-col overflow-hidden bg-white dark:bg-[#0b0b16] border-l border-slate-200 dark:border-white/10"
            >
              {/* Decorative glow (plain gradients, no filter — cheap to composite while animating) */}
              <div
                className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-70 dark:opacity-50"
                style={{
                  background:
                    "radial-gradient(circle, rgba(34,211,238,0.35) 0%, rgba(34,211,238,0) 70%)",
                }}
              />
              <div
                className="pointer-events-none absolute bottom-0 -left-16 w-48 h-48 rounded-full opacity-60 dark:opacity-40"
                style={{
                  background:
                    "radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(59,130,246,0) 70%)",
                }}
              />

              {/* Header */}
              <div className="relative flex items-center justify-between px-6 pt-6 pb-4 border-b border-slate-200 dark:border-white/10">
                <img
                  src={logo}
                  alt="Tri Dev"
                  className="h-7 w-auto invert dark:invert-0"
                />
                <button
                  className="p-2 rounded-full text-slate-500 dark:text-gray-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors duration-200"
                  onClick={() => setNav(false)}
                  aria-label={t("navbar.closeMenu")}
                >
                  <FaTimes size={18} />
                </button>
              </div>

              {/* Links */}
              <motion.ul
                variants={listVariants}
                initial="hidden"
                animate="visible"
                className="relative flex-1 flex flex-col gap-1.5 px-4 py-6 overflow-y-auto"
              >
                {links.map(({ link, id, icon: Icon }) => {
                  const isActive = active === link;
                  return (
                    <motion.li key={id} variants={itemVariants}>
                      <Link
                        to={link}
                        smooth
                        duration={500}
                        spy
                        onSetActive={() => setActive(link)}
                        onClick={() => setNav(false)}
                        className={`group relative flex items-center gap-3.5 py-3.5 pl-4 pr-3 rounded-xl font-medium transition-all duration-200 cursor-pointer ${
                          isActive
                            ? "text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-md shadow-cyan-500/30"
                            : "text-slate-600 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-white/5"
                        }`}
                      >
                        <span
                          className={`flex items-center justify-center w-9 h-9 rounded-lg shrink-0 transition-colors duration-200 ${
                            isActive
                              ? "bg-white/20"
                              : "bg-slate-100 dark:bg-white/5 text-cyan-500 dark:text-cyan-400 group-hover:bg-cyan-50 dark:group-hover:bg-cyan-400/10"
                          }`}
                        >
                          <Icon size={15} />
                        </span>
                        <span className="text-base">{t(`navbar.${link}`)}</span>
                      </Link>
                    </motion.li>
                  );
                })}
              </motion.ul>

              {/* Footer */}
              <div className="relative px-6 py-5 border-t border-slate-200 dark:border-white/10">
                <Link
                  to="contact"
                  smooth
                  duration={500}
                  onClick={() => setNav(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/30 transition-all duration-300 cursor-pointer"
                >
                  {t("navbar.letsTalk")}
                </Link>
                <button
                  onClick={toggleLang}
                  aria-label={t("navbar.toggleLanguage")}
                  className="flex items-center justify-center gap-1.5 w-full mt-3 py-2 rounded-xl text-sm font-semibold text-slate-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-slate-50 dark:hover:bg-white/5 border border-slate-200 dark:border-white/10 transition-all duration-200"
                >
                  {lang === "en" ? "Tiếng Việt (VI)" : "English (EN)"}
                </button>
                <div className="flex items-center justify-center gap-4 mt-4">
                  <a
                    href="https://github.com/minhtritt01"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="text-slate-400 dark:text-gray-500 hover:text-slate-800 dark:hover:text-white transition-colors duration-200"
                  >
                    <FaGithub size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/minhtritt01/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="text-slate-400 dark:text-gray-500 hover:text-slate-800 dark:hover:text-white transition-colors duration-200"
                  >
                    <FaLinkedin size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Fragment>
  );
};

export default Navbar;
