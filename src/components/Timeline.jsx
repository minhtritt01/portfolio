import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import AnimatedSection from "./AnimatedSection";

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.45, delay: index * 0.08 }}
    className="rounded-xl border border-border bg-muted/40 p-4 sm:p-5"
  >
    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 mb-2">
      <h4 className="font-semibold text-foreground">
        {project.name}
      </h4>
      <span className="text-xs text-muted-foreground">
        {project.period}
      </span>
    </div>
    <p className="text-sm text-foreground/80 leading-relaxed">
      {project.description}
    </p>
    {project.tech.length > 0 && (
      <div className="flex flex-wrap gap-1.5 mt-3">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-[11px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20"
          >
            {t}
          </span>
        ))}
      </div>
    )}
    {project.bullets.length > 0 && (
      <ul className="mt-3 flex flex-col gap-1.5">
        {project.bullets.map((b, i) => (
          <li
            key={i}
            className="text-sm text-foreground/80 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-gradient-theme-r"
          >
            {b}
          </li>
        ))}
      </ul>
    )}
  </motion.div>
);

const JobEntry = ({ job, index, isLast }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  return (
    <div ref={ref} className="relative pl-10 sm:pl-14">
      {/* Timeline rail */}
      <div className="absolute left-[13px] sm:left-[19px] top-1 bottom-0 w-px bg-gradient-to-b from-primary/60 via-accent/30 to-transparent" />

      {/* Node */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.1 }}
        className={`absolute left-0 sm:left-1.5 top-0 w-7 h-7 rounded-full flex items-center justify-center border-2 ${
          job.current
            ? "bg-gradient-theme border-primary/60 shadow-lg shadow-primary/40"
            : "bg-muted border-border"
        }`}
      >
        <FaBriefcase
          className={`w-3 h-3 ${
            job.current ? "text-primary-foreground" : "text-muted-foreground"
          }`}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        className={`rounded-2xl border border-border bg-card/70 backdrop-blur-sm p-5 sm:p-6 shadow-sm dark:shadow-none ${
          isLast ? "" : "mb-8"
        }`}
      >
        <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2 mb-1">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-foreground">
              {job.role}
            </h3>
            <p className="font-medium text-gradient-theme">
              {job.company}
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-muted-foreground whitespace-nowrap">
            <FaCalendarAlt className="w-3 h-3" />
            {job.period}
            {job.current && (
              <span className="ml-1 px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/30 text-[10px] uppercase tracking-wide">
                {t("timeline.current")}
              </span>
            )}
          </span>
        </div>

        <div className="flex flex-col gap-4 mt-5">
          {job.projects.map((project, pi) => (
            <ProjectCard key={project.name} project={project} index={pi} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const Timeline = () => {
  const { t } = useTranslation();
  const jobs = t("timeline.jobs", { returnObjects: true });

  return (
    <div
      name="work"
      className="bg-background dot-grid w-full min-h-screen py-20"
    >
      <div className="max-w-5xl mx-auto px-4 text-foreground">
        <AnimatedSection className="mb-12">
          <h2 className="font-display text-4xl font-bold inline-block text-gradient-theme">
            {t("timeline.heading")}
          </h2>
          <div className="h-1 w-16 bg-gradient-theme-r mt-2 rounded-full" />
          <p className="text-muted-foreground mt-4">
            {t("timeline.subheading")}
          </p>
        </AnimatedSection>

        <div>
          {jobs.map((job, i) => (
            <JobEntry
              key={job.company}
              job={job}
              index={i}
              isLast={i === jobs.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
