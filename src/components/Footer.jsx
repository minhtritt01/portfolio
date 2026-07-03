import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const year = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="bg-white dark:bg-black border-t border-slate-200 dark:border-gray-800 py-8 text-slate-400 dark:text-gray-500">
      <div className="max-w-screen-lg mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          © {year}{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold">
            Phan Minh Tri
          </span>
          . {t("footer.rights")}
        </p>

        <div className="flex gap-4">
          {[
            { icon: <FaLinkedin size={18} />, href: "https://www.linkedin.com/in/minhtritt01/", label: "LinkedIn" },
            { icon: <FaGithub size={18} />, href: "https://github.com/minhtritt01", label: "GitHub" },
            { icon: <BsFacebook size={18} />, href: "https://www.facebook.com/minhtritt01/", label: "Facebook" },
            { icon: <HiOutlineMail size={18} />, href: "mailto:minhtritt01@gmail.com", label: "Email" },
          ].map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-200"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
