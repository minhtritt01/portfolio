import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import AnimatedSection from "./AnimatedSection";
import teampower from "../assets/portfolio/teampower.png";
import dashboard from "../assets/portfolio/dashboard.png";
import spotifyFlutter from "../assets/portfolio/spotify_flutter.png";
import sfi from "../assets/portfolio/sfi.png";
import ail from "../assets/portfolio/ailglobal.png";
import syrup from "../assets/portfolio/syrup.png";
import onskyHealth from "../assets/portfolio/onskyHealth.webp";
import qvCar from "../assets/portfolio/qvCar.webp";
import skycare from "../assets/portfolio/skycare.webp";
import skyjoy from "../assets/portfolio/skyjoy.webp";

const portfolios = [
  {
    id: 10,
    title: "SkyJoy",
    description: "SkyJoy — Loyalty & Rewards platform for Vietjet Air",
    category: "Mobile App",
    src: skyjoy,
    padded: true,
    tags: ["Flutter", "BLoC", "Firebase", "Clean Arch"],
    android:
      "https://play.google.com/store/apps/details?id=loyalty.skyjoy.vn&hl=vi",
    ios: "https://apps.apple.com/vn/app/skyjoy/id1658311716",
  },
  {
    id: 1,
    title: "Smart Form Interface",
    description:
      "Digitized form & reporting system for PepsiCo factories — automated workflows and real-time data visualization across mobile, web & Windows.",
    category: "Mobile / Web / Desktop",
    src: sfi,
    android:
      "https://play.google.com/store/apps/details?id=vn.com.quocviet.spvb.eforms",
    ios: "https://apps.apple.com/us/app/smart-form-interface/id6737530804",
    tags: ["Flutter", "BLoC", "Clean Arch", "CI/CD"],
  },
  {
    id: 2,
    title: "Syrup Mixing",
    description:
      "Cross-platform automation system for PepsiCo syrup production — batch tracking, ingredient control & Zebra scanner integration.",
    category: "Mobile / Web / Desktop",
    src: syrup,
    android:
      "https://play.google.com/store/apps/details?id=vn.quocviet.syrupmixingscanner",
    ios: "https://testflight.apple.com/join/CKZt3XsR",
    tags: ["Flutter", "BLoC", "Zebra Scanner"],
  },
  {
    id: 3,
    title: "TeamPower",
    description:
      "HR & team management web platform with role-based dashboards, project tracking and API integrations.",
    category: "Web App",
    src: teampower,
    demo: "https://teampowervn.com/",
    tags: ["Next.js", "API"],
  },
  {
    id: 4,
    title: "Ail Global",
    description:
      "Corporate website with modern design, multi-section layout, and third-party API integrations.",
    category: "Web App",
    src: ail,
    demo: "https://ailglobal.net/",
    tags: ["HTML", "CSS", "JavaScript", "API"],
  },
  {
    id: 7,
    title: "OnSky Health",
    description:
      "Health management mobile app with patient tracking, appointments, and medical records.",
    category: "Mobile App",
    src: onskyHealth,
    padded: true,
    tags: ["Flutter", "Firebase", "Real-time Systems"],
    android:
      "https://play.google.com/store/apps/details?id=com.onskyinc.smartiot.healthandhome&hl=en",
    ios: "https://apps.apple.com/us/app/onsky-health/id1502053185",
  },
  {
    id: 8,
    title: "QV Car",
    description:
      "Car management and booking mobile application with real-time tracking and service scheduling.",
    category: "Mobile App",
    src: qvCar,
    tags: ["Flutter", "BLoC", "Firebase"],
    android:
      "https://play.google.com/store/apps/details?id=vn.com.quocviet.vn.qv_car_management.qv_car_management&hl=en",
    ios: "https://apps.apple.com/us/app/qv-car-booking/id6742679566",
  },
  {
    id: 9,
    title: "SkyCare",
    description:
      "Healthcare platform connecting patients with caregivers for seamless remote care management.",
    category: "Mobile App",
    src: skycare,
    padded: true,
    tags: ["Flutter", "Firebase", "Real-time Systems"],
    android:
      "https://play.google.com/store/apps/details?id=com.onskyheath.skycare&hl=en",
    ios: "https://apps.apple.com/vn/app/onsky-skycare/id6504265548?l=vi",
  },
  {
    id: 5,
    title: "Spotify Flutter",
    description:
      "Full-featured Spotify clone with authentication, music playback, playlists, and cross-platform support.",
    category: "Mobile App",
    src: spotifyFlutter,
    demo: "https://spotify-minhtritt01.web.app/",
    code: "https://github.com/minhtritt01/spotify-flutter",
    tags: ["Flutter", "Firebase", "Cross-platform"],
  },
  {
    id: 6,
    title: "Dashboard",
    description:
      "Admin dashboard with product management, sales charts, calendar integration, and e-commerce analytics.",
    category: "Web App",
    src: dashboard,
    demo: "https://dashboard-shoppy-minhtri.netlify.app/",
    code: "https://github.com/minhtritt01/dashboard-shoppy",
    tags: ["React", "Charts", "Material UI"],
  },
];

const IconEye = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
);

const IconGithub = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const IconAndroid = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.523 15.341c-.759 0-1.379.62-1.379 1.379s.62 1.379 1.379 1.379 1.379-.62 1.379-1.379-.62-1.379-1.379-1.379zm-11.046 0c-.759 0-1.379.62-1.379 1.379s.62 1.379 1.379 1.379 1.379-.62 1.379-1.379-.62-1.379-1.379-1.379zm12.826-7.032l2.088-3.616c.147-.253.059-.578-.195-.725-.253-.147-.578-.059-.725.195l-2.114 3.662c-1.653-.757-3.515-1.185-5.357-1.185-1.842 0-3.704.428-5.357 1.185l-2.114-3.662c-.147-.254-.472-.342-.725-.195-.254.147-.342.472-.195.725l2.088 3.616c-3.912 2.014-6.603 6.038-6.603 10.691h24c0-4.653-2.691-8.677-6.603-10.691z" />
  </svg>
);

const IconApple = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <div
      name="portfolio"
      className="bg-background dot-grid w-full text-foreground min-h-screen py-20"
    >
      <div className="max-w-screen-xl px-6 mx-auto">
        <AnimatedSection className="pb-12">
          <h2 className="font-display text-4xl font-bold inline-block text-gradient-theme">
            {t("portfolio.heading")}
          </h2>
          <div className="h-1 w-16 bg-gradient-theme-r mt-2 rounded-full" />
          <p className="text-muted-foreground mt-4">
            {t("portfolio.subheading")}
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolios.map((project, i) => (
            <motion.div
              key={`portfolio-${project.id}`}
              className="group relative rounded-2xl hover:scale-[1.02] transition-transform duration-500"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              {/* Glowing border layer */}
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-theme opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]" />

              {/* Card */}
              <div className="relative overflow-hidden rounded-2xl flex flex-col bg-card border border-border group-hover:border-transparent backdrop-blur-sm transition-colors duration-500 shadow-sm dark:shadow-none">
                {/* Category badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 text-[10px] font-semibold rounded-full bg-card/80 border border-border text-primary backdrop-blur-sm">
                    {t(`portfolio.categories.${project.category}`)}
                  </span>
                </div>

                {/* Image well: fixed light neutral regardless of theme — the
                    screenshots/icons themselves are designed on a light
                    background, so a dark well would create a hard edge in dark mode */}
                <div
                  className="relative overflow-hidden bg-slate-100 flex items-center justify-center"
                  style={{ aspectRatio: "16/9" }}
                >
                  {project.padded ? (
                    <div className="w-full h-full flex items-center justify-center p-6 transition-transform duration-700 group-hover:scale-105">
                      <img
                        src={project.src}
                        alt={project.title}
                        className="max-w-[55%] max-h-full object-contain drop-shadow-2xl"
                      />
                    </div>
                  ) : (
                    <img
                      src={project.src}
                      alt={project.title}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5 gap-3">
                  <div>
                    <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-1">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                      {t(`portfolio.projects.${project.title}`)}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] rounded-md bg-muted border border-border text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col gap-2 mt-auto pt-1">
                    {(project.demo || project.code) && (
                      <div className="flex gap-2">
                        {project.demo && (
                          <button
                            onClick={() => window.open(project.demo, "_blank")}
                            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-medium bg-muted hover:bg-muted/70 border border-border text-foreground transition-all duration-200"
                          >
                            <IconEye /> {t("portfolio.demo")}
                          </button>
                        )}
                        {project.code && (
                          <button
                            onClick={() => window.open(project.code, "_blank")}
                            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-medium bg-muted hover:bg-muted/70 border border-border text-foreground transition-all duration-200"
                          >
                            <IconGithub /> {t("portfolio.code")}
                          </button>
                        )}
                      </div>
                    )}
                    {(project.android || project.ios) && (
                      <div className="flex gap-2">
                        {project.android && (
                          <button
                            onClick={() =>
                              window.open(project.android, "_blank")
                            }
                            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-medium bg-muted hover:bg-muted/70 border border-border text-foreground transition-all duration-200"
                          >
                            <IconAndroid /> {t("portfolio.android")}
                          </button>
                        )}
                        {project.ios && (
                          <button
                            onClick={() => window.open(project.ios, "_blank")}
                            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-medium bg-muted hover:bg-muted/70 border border-border text-foreground transition-all duration-200"
                          >
                            <IconApple /> {t("portfolio.ios")}
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
