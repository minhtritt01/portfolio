import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const year = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="bg-background border-t border-border py-8 text-muted-foreground">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          © {year}{" "}
          <span className="text-gradient-theme font-display font-semibold">
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
              className="hover:text-primary transition-colors duration-200"
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
