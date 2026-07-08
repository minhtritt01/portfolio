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
      {/* Mobile top bar: floating iOS-style glass capsule. Desktop nav is handled by SideNav. */}
      <nav
        className={`md:hidden inline-flex items-center gap-1 fixed top-3 right-3 z-50 h-14 px-1.5 rounded-full border transition-all duration-300 ${
          scrolled
            ? "bg-card/70 backdrop-blur-xl border-border/70 shadow-lg shadow-black/10 dark:shadow-black/40"
            : "bg-card/40 backdrop-blur-lg border-border/40 shadow-sm"
        }`}
      >
        <button
          onClick={toggleLang}
          aria-label={t("navbar.toggleLanguage")}
          className="w-9 h-9 flex items-center justify-center rounded-full text-xs font-semibold text-muted-foreground hover:text-primary hover:bg-muted active:scale-90 transition-all duration-150"
        >
          {lang === "en" ? "VI" : "EN"}
        </button>

        <button
          onClick={toggle}
          aria-label={t("navbar.toggleTheme")}
          className="w-9 h-9 flex items-center justify-center rounded-full text-muted-foreground hover:text-primary hover:bg-muted active:scale-90 transition-all duration-150"
        >
          {dark ? <FaSun size={16} /> : <FaMoon size={16} />}
        </button>

        <button
          onClick={() => setNav(true)}
          className="w-10 h-10 flex items-center justify-center rounded-full text-foreground bg-muted/70 active:scale-90 transition-all duration-150"
          aria-label={t("navbar.openMenu")}
        >
          <FaBars size={16} />
        </button>
      </nav>

      {/* Desktop utility corner: SideNav covers section links, this keeps theme/language reachable */}
      <div className="hidden md:inline-flex items-center gap-1 fixed top-5 right-6 z-50 h-12 px-1.5 rounded-full border bg-card/70 backdrop-blur-xl border-border/70 shadow-lg shadow-black/10 dark:shadow-black/40">
        <button
          onClick={toggleLang}
          aria-label={t("navbar.toggleLanguage")}
          className="w-9 h-9 flex items-center justify-center rounded-full text-xs font-semibold text-muted-foreground hover:text-primary hover:bg-muted transition-all duration-200"
        >
          {lang === "en" ? "VI" : "EN"}
        </button>

        <button
          onClick={toggle}
          aria-label={t("navbar.toggleTheme")}
          className="w-9 h-9 flex items-center justify-center rounded-full text-muted-foreground hover:text-primary hover:bg-muted transition-all duration-200"
        >
          {dark ? <FaSun size={18} /> : <FaMoon size={18} />}
        </button>
      </div>

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
              className="fixed inset-0 z-40 bg-foreground/60 md:hidden"
            />
            <motion.div
              key="panel"
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{ willChange: "transform" }}
              className="z-50 fixed top-2 right-2 bottom-2 w-[82vw] max-w-sm shadow-2xl md:hidden flex flex-col overflow-hidden rounded-3xl bg-card border border-border"
            >
              {/* Decorative glow (plain gradients, no filter — cheap to composite while animating) */}
              <div
                className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-70 dark:opacity-50"
                style={{
                  background:
                    "radial-gradient(circle, hsl(var(--gradient-from) / 0.35) 0%, hsl(var(--gradient-from) / 0) 70%)",
                }}
              />
              <div
                className="pointer-events-none absolute bottom-0 -left-16 w-48 h-48 rounded-full opacity-60 dark:opacity-40"
                style={{
                  background:
                    "radial-gradient(circle, hsl(var(--gradient-to) / 0.3) 0%, hsl(var(--gradient-to) / 0) 70%)",
                }}
              />

              {/* Header */}
              <div className="relative flex items-center justify-end px-6 pt-6 pb-4 border-b border-border">
                <button
                  className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-200"
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
                            ? "text-primary-foreground bg-gradient-theme-r shadow-md shadow-primary/30"
                            : "text-foreground/80 hover:bg-muted"
                        }`}
                      >
                        <span
                          className={`flex items-center justify-center w-9 h-9 rounded-lg shrink-0 transition-colors duration-200 ${
                            isActive
                              ? "bg-white/20"
                              : "bg-muted text-primary group-hover:bg-primary/10"
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
              <div className="relative px-6 py-5 border-t border-border">
                <Link
                  to="contact"
                  smooth
                  duration={500}
                  onClick={() => setNav(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-primary-foreground bg-gradient-theme-r shadow-lg shadow-primary/30 transition-all duration-300 cursor-pointer"
                >
                  {t("navbar.letsTalk")}
                </Link>
                <button
                  onClick={toggleLang}
                  aria-label={t("navbar.toggleLanguage")}
                  className="flex items-center justify-center gap-1.5 w-full mt-3 py-2 rounded-xl text-sm font-semibold text-muted-foreground hover:text-primary hover:bg-muted border border-border transition-all duration-200"
                >
                  {lang === "en" ? "Tiếng Việt (VI)" : "English (EN)"}
                </button>
                <div className="flex items-center justify-center gap-4 mt-4">
                  <a
                    href="https://github.com/minhtritt01"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    <FaGithub size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/minhtritt01/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
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
