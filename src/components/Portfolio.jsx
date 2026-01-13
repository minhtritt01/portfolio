import { useState } from "react";
import teampower from "../assets/portfolio/teampower.png";
import dashboard from "../assets/portfolio/dashboard.png";
import web3 from "../assets/portfolio/web3.png";
import spotifyFlutter from "../assets/portfolio/spotify_flutter.png";
import spotify from "../assets/portfolio/spotify.png";
import rmdb from "../assets/portfolio/rmdb.png";
import sfi from "../assets/portfolio/sfi.png";
import ail from "../assets/portfolio/ailglobal.png";
import syrup from "../assets/portfolio/syrup.png";
const Portfolio = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const portfolios = [
    {
      id: 1,
      title: "Smart Form Interface",
      category: "Mobile App / Web App",
      src: sfi,
      android:
        "https://play.google.com/store/apps/details?id=vn.com.quocviet.spvb.eforms",
      ios: "https://apps.apple.com/us/app/smart-form-interface/id6737530804",
      tags: ["Flutter", "Cross-platform"],
    },
    {
      id: 2,
      title: "Syrup Mixing",
      category: "Mobile App / Web App",
      src: syrup,
      android:
        "https://play.google.com/store/apps/details?id=vn.quocviet.syrupmixingscanner",
      ios: "https://testflight.apple.com/join/CKZt3XsR",
      tags: ["Flutter", "Cross-platform", "Zebra Scanner"],
    },
    {
      id: 3,
      title: "TeamPower",
      category: "Web App",
      src: teampower,
      demo: "https://teampowervn.com/",
      tags: ["NextJS", "API"],
    },
    {
      id: 4,
      title: "Ail Global",
      category: "Web App",
      src: ail,
      demo: "https://ailglobal.net/",
      tags: ["HTML", "CSS", "JS", "API"],
    },

    {
      id: 5,
      title: "Spotify Flutter",
      category: "Mobile App",
      src: spotifyFlutter,
      demo: "https://spotify-minhtritt01.web.app/",
      code: "https://github.com/minhtritt01/spotify-flutter",
      tags: ["Flutter", "Cross-platform"],
    },
    {
      id: 6,
      title: "Dashboard",
      category: "Web App",
      src: dashboard,
      demo: "https://dashboard-shoppy-minhtri.netlify.app/",
      code: "https://github.com/minhtritt01/dashboard-shoppy",
      tags: ["React"],
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black via-gray-900 to-gray-800 w-full text-white min-h-screen py-20"
    >
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full">
        {/* Header Section */}
        <div className="pb-12 text-center md:text-left">
          <h2 className="text-5xl md:text-6xl font-bold inline-block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text pb-2">
            Portfolio
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-600 mt-2 mb-6 mx-auto md:mx-0 rounded-full"></div>
          <p className="text-gray-300 text-lg">
            Explore my latest projects and creative work
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-0">
          {portfolios.map((project) => (
            <div
              key={`portfolio-${project.id}`}
              className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02]"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow:
                  hoveredId === project.id
                    ? "0 20px 60px rgba(0, 200, 255, 0.3)"
                    : "0 8px 32px rgba(0, 0, 0, 0.3)",
              }}
            >
              {/* Category Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg">
                  {project.category}
                </span>
              </div>

              {/* Image Container */}
              <div className="relative overflow-hidden aspect-video bg-gray-900">
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  style={{
                    objectPosition: "center top",
                  }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Bottom border */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs rounded-md bg-gray-700/50 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3">
                  {/* Web Links Row */}
                  <div className="flex gap-2">
                    {project.demo && (
                      <button
                        className="flex-1 px-4 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center gap-2"
                        onClick={() => window.open(project.demo, "_blank")}
                      >
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
                        Demo
                      </button>
                    )}
                    {project.code && (
                      <button
                        className="flex-1 px-4 py-2.5 rounded-lg bg-gray-700/50 hover:bg-gray-600/50 text-white font-medium transition-all duration-300 border border-gray-600 hover:border-gray-500 flex items-center justify-center gap-2"
                        onClick={() => window.open(project.code, "_blank")}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        Code
                      </button>
                    )}
                  </div>

                  {/* Mobile App Links Row */}
                  {(project.android || project.ios) && (
                    <div className="flex gap-2">
                      {project.android && (
                        <button
                          className="flex-1 px-4 py-2.5 rounded-lg bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50 flex items-center justify-center gap-2"
                          onClick={() => window.open(project.android, "_blank")}
                        >
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.523 15.341c-.759 0-1.379.62-1.379 1.379s.62 1.379 1.379 1.379 1.379-.62 1.379-1.379-.62-1.379-1.379-1.379zm-11.046 0c-.759 0-1.379.62-1.379 1.379s.62 1.379 1.379 1.379 1.379-.62 1.379-1.379-.62-1.379-1.379-1.379zm12.826-7.032l2.088-3.616c.147-.253.059-.578-.195-.725-.253-.147-.578-.059-.725.195l-2.114 3.662c-1.653-.757-3.515-1.185-5.357-1.185-1.842 0-3.704.428-5.357 1.185l-2.114-3.662c-.147-.254-.472-.342-.725-.195-.254.147-.342.472-.195.725l2.088 3.616c-3.912 2.014-6.603 6.038-6.603 10.691h24c0-4.653-2.691-8.677-6.603-10.691z" />
                          </svg>
                          Android
                        </button>
                      )}
                      {project.ios && (
                        <button
                          className="flex-1 px-4 py-2.5 rounded-lg bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/50 flex items-center justify-center gap-2"
                          onClick={() => window.open(project.ios, "_blank")}
                        >
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                          </svg>
                          iOS
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
