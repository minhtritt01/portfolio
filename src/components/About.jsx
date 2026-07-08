import HeroImage from "../assets/heroImage.png";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AnimatedSection from "./AnimatedSection";

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
      <p className="text-4xl font-bold text-gradient-theme">
        {count}
        {suffix}
      </p>
      <p className="text-muted-foreground text-sm mt-1">{label}</p>
    </div>
  );
};

const About = () => {
  const { t } = useTranslation();

  return (
    <div
      name="about"
      className="w-full min-h-screen bg-muted/30 dot-grid text-foreground py-20"
    >
      <div className="max-w-5xl p-4 mx-auto flex flex-col justify-center w-full">
        <AnimatedSection className="pb-10">
          <h2 className="font-display text-4xl font-bold inline-block text-gradient-theme">
            {t("about.heading")}
          </h2>
          <div className="h-1 w-16 bg-gradient-theme-r mt-2 rounded-full" />
        </AnimatedSection>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          <AnimatedSection className="hidden md:block flex-1" delay={0.1} y={0} margin="-100px">
            <div className="relative w-fit mx-auto">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-theme-r opacity-40 blur-md" />
              <img
                src={HeroImage}
                alt="Phan Minh Tri"
                className="relative rounded-2xl w-64 object-cover"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection className="flex-1 flex flex-col gap-5" delay={0.2} y={0} margin="-100px">
            <p className="text-foreground/80 text-lg leading-relaxed">
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
                  <span className="text-muted-foreground text-sm uppercase tracking-wide">
                    {label}
                  </span>
                  <span className="text-foreground font-medium">{value}</span>
                </div>
              ))}
            </div>

            <a
              href="/PhanMinhTri_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit mt-2 items-center gap-2 bg-gradient-theme-r text-primary-foreground font-medium py-3 px-6 rounded-lg shadow-lg shadow-primary/30 transition-all duration-300"
            >
              {t("about.viewResume")}
            </a>
          </AnimatedSection>
        </div>

        {/* Stats */}
        <AnimatedSection
          className="mt-16 grid grid-cols-3 gap-6 border border-border rounded-2xl p-8 bg-card/50 backdrop-blur-sm"
          delay={0.4}
          margin="-100px"
        >
          <StatCounter end={3} label={t("about.stats.years")} />
          <StatCounter end={10} label={t("about.stats.projects")} />
          <StatCounter end={3} label={t("about.stats.stores")} />
        </AnimatedSection>
      </div>
    </div>
  );
};

export default About;
