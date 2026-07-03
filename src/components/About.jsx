import HeroImage from "../assets/heroImage.png";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const StatCounter = ({ end, label, suffix = "+" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(duration / end);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        {count}
        {suffix}
      </p>
      <p className="text-slate-500 dark:text-gray-400 text-sm mt-1">{label}</p>
    </div>
  );
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  return (
    <div
      name="about"
      className="w-full min-h-screen bg-[#eaedfa] dark:bg-[#0d0d1a] dot-grid text-slate-800 dark:text-white py-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="pb-10"
        >
          <h2 className="text-4xl font-bold inline-block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {t("about.heading")}
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-blue-500 mt-2 rounded-full" />
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          <motion.div
            className="hidden md:block flex-1"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="relative w-fit mx-auto">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 opacity-40 blur-md" />
              <img
                src={HeroImage}
                alt="Phan Minh Tri"
                className="relative rounded-2xl w-64 object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            className="flex-1 flex flex-col gap-5"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-slate-600 dark:text-gray-300 text-lg leading-relaxed">
              {t("about.bio")}
            </p>

            <div className="grid grid-cols-2 gap-4 text-base">
              {[
                [t("about.fields.name"), "Phan Minh Tri"],
                [t("about.fields.location"), t("about.values.location")],
                [t("about.fields.email"), "minhtritt01@gmail.com"],
                [t("about.fields.phone"), "(+84) 834 790 997"],
                [t("about.fields.availability"), t("about.values.availability")],
              ].map(([label, value]) => (
                <div key={label} className="flex flex-col gap-0.5">
                  <span className="text-slate-400 dark:text-gray-500 text-sm uppercase tracking-wide">
                    {label}
                  </span>
                  <span className="text-slate-800 dark:text-white font-medium">{value}</span>
                </div>
              ))}
            </div>

            <a
              href="/PhanMinhTri_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit mt-2 items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium py-3 px-6 rounded-lg shadow-lg shadow-cyan-500/30 transition-all duration-300"
            >
              {t("about.viewResume")}
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="mt-16 grid grid-cols-3 gap-6 border border-slate-200 dark:border-gray-700/50 rounded-2xl p-8 bg-slate-50 dark:bg-white/5 backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <StatCounter end={3} label={t("about.stats.years")} />
          <StatCounter end={10} label={t("about.stats.projects")} />
          <StatCounter end={3} label={t("about.stats.stores")} />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
