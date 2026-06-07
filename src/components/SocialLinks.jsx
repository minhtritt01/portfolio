import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill, BsFacebook } from "react-icons/bs";

const links = [
  { id: 1, icon: <FaLinkedin size={17} />, label: "LinkedIn", href: "https://www.linkedin.com/in/minhtritt01/" },
  { id: 2, icon: <FaGithub size={17} />, label: "GitHub", href: "https://github.com/minhtritt01" },
  { id: 3, icon: <BsFacebook size={17} />, label: "Facebook", href: "https://www.facebook.com/minhtritt01/" },
  { id: 4, icon: <HiOutlineMail size={17} />, label: "Email", href: "mailto:minhtritt01@gmail.com" },
  { id: 5, icon: <BsFillPersonLinesFill size={17} />, label: "Resume", href: "./PhanMinhTri_CV.pdf", download: true },
];

const SocialLinks = () => (
  <div className="hidden lg:flex flex-col gap-3 top-1/2 -translate-y-1/2 left-4 fixed z-40">
    {links.map(({ id, icon, label, href, download }) => (
      <div key={id} className="relative group/link">
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          download={download}
          aria-label={label}
          className="w-9 h-9 rounded-full flex items-center justify-center bg-white/90 dark:bg-gray-900/80 border border-slate-300 dark:border-gray-700/60 text-slate-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-500/60 hover:bg-slate-50 dark:hover:bg-gray-800/80 backdrop-blur-sm transition-all duration-200 shadow-lg"
        >
          {icon}
        </a>
        <span className="pointer-events-none absolute left-11 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-700 text-slate-700 dark:text-gray-200 text-xs px-2 py-1 rounded-md opacity-0 group-hover/link:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-xl">
          {label}
        </span>
      </div>
    ))}
  </div>
);

export default SocialLinks;
