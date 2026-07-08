import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const sections = [
  { id: 1, link: "about" },
  { id: 2, link: "work" },
  { id: 3, link: "portfolio" },
  { id: 4, link: "experience" },
  { id: 5, link: "contact" },
];

const SideNav = () => {
  const [active, setActive] = useState("about");
  const { t } = useTranslation();

  return (
    <nav className="hidden md:flex flex-col fixed left-16 lg:left-20 top-1/2 -translate-y-1/2 z-30">
      <ul className="relative flex flex-col gap-8">
        <div className="absolute left-[5px] top-1 bottom-1 w-px bg-slate-300 dark:bg-white/15" />
        {sections.map(({ id, link }) => {
          const isActive = active === link;
          return (
            <li key={id} className="relative flex items-center group/side">
              <Link
                to={link}
                smooth
                duration={500}
                spy
                onSetActive={() => setActive(link)}
                className="flex items-center gap-3 cursor-pointer"
                aria-current={isActive ? "true" : undefined}
              >
                <span className="relative flex items-center justify-center w-[11px] h-[11px]">
                  {isActive && (
                    <motion.span
                      layoutId="sideNavActiveGlow"
                      className="absolute inset-[-6px] rounded-full bg-cyan-400/30 dark:bg-cyan-400/40 blur-[6px]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <motion.span
                    animate={{ scale: isActive ? 1 : 0.6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className={`block rounded-full w-[9px] h-[9px] transition-colors duration-300 ${
                      isActive
                        ? "bg-cyan-400 shadow-[0_0_10px_2px_rgba(34,211,238,0.7)]"
                        : "bg-slate-400 dark:bg-white/30 group-hover/side:bg-cyan-400"
                    }`}
                  />
                </span>
                <span
                  className={`text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? "opacity-100 translate-x-0 text-cyan-500 dark:text-cyan-400"
                      : "opacity-0 -translate-x-1 group-hover/side:opacity-70 group-hover/side:translate-x-0 text-slate-500 dark:text-gray-400"
                  }`}
                >
                  {t(`navbar.${link}`)}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SideNav;
