import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaTimes, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsChatDotsFill, BsFillPersonLinesFill } from "react-icons/bs";

const SESSION_KEY = "visitorPopupShown";
const DELAY_MS = 45000;

const trackEvent = (name, params) => {
  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
};

const ContactPopup = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    const timer = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem(SESSION_KEY, "1");
      trackEvent("popup_shown");
    }, DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const handleCtaClick = (cta) => trackEvent("popup_cta_click", { cta });

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="popup-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40"
          />
          <motion.div
            key="popup-card"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-4 right-4 z-50 w-[90vw] max-w-sm rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b0b16] shadow-2xl p-5 sm:p-6"
          >
            <button
              onClick={() => setOpen(false)}
              aria-label={t("popup.close")}
              className="absolute top-3 right-3 p-1.5 rounded-full text-slate-400 dark:text-gray-500 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors duration-200"
            >
              <FaTimes size={16} />
            </button>

            <h3 className="text-lg font-bold text-slate-800 dark:text-white pr-6 mb-2">
              {t("popup.heading")}
            </h3>
            <p className="text-sm text-slate-500 dark:text-gray-400 leading-relaxed mb-4">
              {t("popup.body")}
            </p>

            <div className="flex flex-col gap-2">
              <a
                href="mailto:minhtritt01@gmail.com"
                onClick={() => handleCtaClick("email")}
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-medium bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white transition-all duration-300"
              >
                <HiOutlineMail size={16} /> {t("popup.emailCta")}
              </a>
              <a
                href="https://www.linkedin.com/in/minhtritt01/"
                target="_blank"
                rel="noreferrer"
                onClick={() => handleCtaClick("linkedin")}
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-medium bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.06] dark:hover:bg-white/[0.1] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-gray-300 transition-all duration-200"
              >
                <FaLinkedin size={16} /> {t("popup.linkedinCta")}
              </a>
              <div className="flex gap-2">
                <a
                  href="https://wa.me/840834790997"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => handleCtaClick("whatsapp")}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-lg text-sm font-medium bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.06] dark:hover:bg-white/[0.1] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-gray-300 transition-all duration-200"
                >
                  <FaWhatsapp size={16} /> {t("popup.whatsappCta")}
                </a>
                <a
                  href="https://zalo.me/0834790997"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => handleCtaClick("zalo")}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-lg text-sm font-medium bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.06] dark:hover:bg-white/[0.1] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-gray-300 transition-all duration-200"
                >
                  <BsChatDotsFill size={16} /> {t("popup.zaloCta")}
                </a>
              </div>
              <a
                href="./PhanMinhTri_CV.pdf"
                download
                onClick={() => handleCtaClick("cv")}
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-medium bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.06] dark:hover:bg-white/[0.1] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-gray-300 transition-all duration-200"
              >
                <BsFillPersonLinesFill size={16} /> {t("popup.cvCta")}
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactPopup;
