import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const jobs = [
  {
    company: "Galaxy Technology Services",
    role: "Software Engineer",
    period: "Apr 2026 – Present",
    current: true,
    projects: [
      {
        name: "SkyJoy",
        period: "4/2026 – Present · Team 30",
        description:
          "A loyalty & banking app — SkyPoint accumulation, redemption across 250+ brands, and an integrated wallet (SkyPay / Galaxy Pay). Partners: VPBank YOYO, HDBank, Vikki, HD Insurance, Furama Resort, bTaskee.",
        tech: [
          "Flutter",
          "Dart",
          "Bloc",
          "flutter_bloc",
          "go_router",
          "Clean Architecture",
          "get_it",
          "injectable",
          "Adjust SDK",
          "Firebase FCM & Analytics",
          "Jenkins",
          "Fastlane",
        ],
        bullets: [
          "Built cross-platform loyalty & banking features (iOS & Android).",
          "Integrated multi-partner APIs for point conversion & tier management (Sky+, Gold Plus).",
        ],
      },
    ],
  },
  {
    company: "Quoc Viet Trading and Engineering Co., Ltd",
    role: "Software Engineer",
    period: "Oct 2024 – Apr 2026",
    projects: [
      {
        name: "Syrup Mixing System",
        period: "5/2025 – 4/2026 · Team 10",
        description:
          "Web & cross-platform system for Suntory PepsiCo factories that automates the syrup mixing process — accurate ingredient control, batch tracking, and efficient production operations.",
        tech: [
          "Flutter",
          "Dart",
          "Bloc",
          "go_router",
          "Clean Architecture",
          "get_it",
          "dio",
          "drift",
          "REST",
          "excel",
          "pdf",
          "printing",
          "zebra/QR Code",
          "rxdart",
          "Jenkins",
          "Fastlane",
          "MSIX",
        ],
        bullets: [],
      },
      {
        name: "Smart Form Interface",
        period: "10/2024 – 4/2025 · Team 10",
        description:
          "Multi-platform solution streamlining report generation through digitized forms, automated workflows, and operational data visualization.",
        tech: [
          "Flutter",
          "Dart",
          "Bloc",
          "go_router",
          "Clean Architecture",
          "get_it",
          "dio",
          "drift",
          "REST",
          "excel",
          "rxdart",
          "Jenkins",
          "Fastlane",
          "MSIX",
        ],
        bullets: [
          "Release management: owned merging, versioning & publishing to App Store, Google Play, Microsoft Store; mentored 1 developer.",
          "CI/CD & DevOps: built and maintained Jenkins / Fastlane / PowerShell pipelines for automated testing & deployment.",
          "Quality & stakeholders: wrote unit tests for stability; ran onsite user training and gathered requirements directly with clients.",
        ],
      },
    ],
  },
  {
    company: "Onsky Health International",
    role: "Software Engineer",
    period: "Jan 2023 – Oct 2024",
    projects: [
      {
        name: "Onsky SkyHealth",
        period: "1/2023 – 10/2024 · Team 9",
        description:
          "Healthcare monitoring mobile app for remote patient & child observation, integrating IoT device management and live camera streaming.",
        tech: [
          "Android Native (Java/Kotlin)",
          "Flutter (Add-to-App)",
          "Retrofit",
          "MQTT",
          "REST",
          "VStarCam camera SDK",
          "Firebase",
          "WebView",
        ],
        bullets: [
          "Native Android: maintained & optimized the codebase, resolving complex issues for app stability.",
          "Camera integration: integrated specialized third-party SDKs (VStarCam) for robust live streaming and remote control.",
          "Hybrid architecture: embedded Flutter modules into the native Android app.",
        ],
      },
      {
        name: "Onsky SkyCare",
        period: "1/2023 – 10/2024 · Team 9",
        description:
          "Web & mobile apps integrated with IoT medical devices for healthcare monitoring and device management.",
        tech: [
          "Flutter",
          "Dart",
          "Provider",
          "go_router",
          "HTTP",
          "Chopper",
          "MQTT",
          "WebSocket",
          "Firebase",
          "Push",
          "fl_chart",
          "Fastlane",
          "CI/CD",
        ],
        bullets: [
          "Feature development: delivered mobile features in Flutter; authored unit tests and built CI/CD pipelines.",
          "Release management: managed end-to-end publishing to Google Play and the App Store.",
        ],
      },
    ],
  },
];

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.45, delay: index * 0.08 }}
    className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-white/5 p-4 sm:p-5"
  >
    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 mb-2">
      <h4 className="font-semibold text-slate-800 dark:text-white">
        {project.name}
      </h4>
      <span className="text-xs text-slate-400 dark:text-gray-500">
        {project.period}
      </span>
    </div>
    <p className="text-sm text-slate-600 dark:text-gray-300 leading-relaxed">
      {project.description}
    </p>
    {project.tech.length > 0 && (
      <div className="flex flex-wrap gap-1.5 mt-3">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-[11px] px-2 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-500/20"
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
            className="text-sm text-slate-600 dark:text-gray-300 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-gradient-to-r before:from-cyan-400 before:to-blue-500"
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

  return (
    <div ref={ref} className="relative pl-10 sm:pl-14">
      {/* Timeline rail */}
      <div className="absolute left-[13px] sm:left-[19px] top-1 bottom-0 w-px bg-gradient-to-b from-cyan-400/60 via-blue-500/30 to-transparent" />

      {/* Node */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.1 }}
        className={`absolute left-0 sm:left-1.5 top-0 w-7 h-7 rounded-full flex items-center justify-center border-2 ${
          job.current
            ? "bg-gradient-to-br from-cyan-400 to-blue-500 border-cyan-300 shadow-lg shadow-cyan-500/40"
            : "bg-slate-100 dark:bg-[#0d0d1a] border-slate-300 dark:border-white/20"
        }`}
      >
        <FaBriefcase
          className={`w-3 h-3 ${
            job.current ? "text-white" : "text-slate-500 dark:text-gray-400"
          }`}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        className={`rounded-2xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-white/[0.04] backdrop-blur-sm p-5 sm:p-6 shadow-sm dark:shadow-none ${
          isLast ? "" : "mb-8"
        }`}
      >
        <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2 mb-1">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white">
              {job.role}
            </h3>
            <p className="font-medium bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {job.company}
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-500 dark:text-gray-400 whitespace-nowrap">
            <FaCalendarAlt className="w-3 h-3" />
            {job.period}
            {job.current && (
              <span className="ml-1 px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/30 text-[10px] uppercase tracking-wide">
                Current
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      name="work"
      className="bg-[#eaedfa] dark:bg-[#0d0d1a] dot-grid w-full min-h-screen py-20"
    >
      <div className="max-w-screen-lg mx-auto px-4 text-slate-800 dark:text-white">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold inline-block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-blue-500 mt-2 rounded-full" />
          <p className="text-slate-500 dark:text-gray-400 mt-4">
            My career timeline
          </p>
        </motion.div>

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
