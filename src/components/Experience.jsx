import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import node from "../assets/node.png";
import reactquery from "../assets/react-query.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import mongodb from "../assets/mongodb.png";
import materialui from "../assets/material-ui.png";
import formilk from "../assets/formilk.png";
import flutter from "../assets/flutter.png";
import bloc from "../assets/bloc.png";
import riverpod from "../assets/riverpod.png";
import firebase from "../assets/firebase.png";
import dart from "../assets/dart.png";
import javaAndroid from "../assets/android.png";
import redux from "../assets/redux.png";
import providerIcon from "../assets/flutter_favorite.png";
import kotlinIcon from "../assets/Kotlin_Icon.png";
import mqttIcon from "../assets/Mqtt-hor.svg.png";
import claudeIcon from "../assets/Claude-ai-icon.svg.png";
import chatgptIcon from "../assets/chatgpt-logo-png.webp";
import cursorIcon from "../assets/cursor-ai.png";
import antigravityIcon from "../assets/antigravity-icon__full-color.png";
import jenkinsIcon from "../assets/jenkins.svg";
import fastlaneIcon from "../assets/fastlane.svg";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    label: "Mobile",
    color: "from-cyan-400 to-blue-500",
    techs: [
      { src: flutter, title: "Flutter", glow: "hover:shadow-blue-400/50" },
      { src: dart, title: "Dart", glow: "hover:shadow-cyan-400/50" },
      { src: bloc, title: "BLoC", glow: "hover:shadow-blue-500/50" },
      { src: riverpod, title: "Riverpod", glow: "hover:shadow-blue-400/50" },
      { src: firebase, title: "Firebase", glow: "hover:shadow-orange-400/50" },
      { src: javaAndroid, title: "Java Android", glow: "hover:shadow-green-400/50" },
      { src: kotlinIcon, title: "Kotlin", glow: "hover:shadow-violet-400/50" },
      { src: providerIcon, title: "Provider", glow: "hover:shadow-teal-400/50" },
    ],
  },
  {
    label: "Frontend",
    color: "from-purple-400 to-pink-500",
    techs: [
      { src: html, title: "HTML", glow: "hover:shadow-orange-400/50" },
      { src: css, title: "CSS", glow: "hover:shadow-blue-400/50" },
      { src: javascript, title: "JavaScript", glow: "hover:shadow-yellow-400/50" },
      { src: reactImage, title: "React", glow: "hover:shadow-cyan-400/50" },
      { src: tailwind, title: "Tailwind", glow: "hover:shadow-sky-400/50" },
      { src: redux, title: "Redux", glow: "hover:shadow-purple-400/50" },
      { src: materialui, title: "Material UI", glow: "hover:shadow-blue-400/50" },
    ],
  },
  {
    label: "Tools & Backend",
    color: "from-green-400 to-emerald-500",
    techs: [
      { src: node, title: "Node.js", glow: "hover:shadow-green-400/50" },
      { src: mongodb, title: "MongoDB", glow: "hover:shadow-green-300/50" },
      { src: reactquery, title: "React Query", glow: "hover:shadow-red-400/50" },
      { src: github, title: "GitHub", glow: "hover:shadow-gray-400/50" },
      { src: formilk, title: "Formik", glow: "hover:shadow-blue-400/50" },
      { src: jenkinsIcon, title: "Jenkins", glow: "hover:shadow-red-400/50" },
      { src: fastlaneIcon, title: "Fastlane", glow: "hover:shadow-green-400/50" },
      { src: mqttIcon, title: "MQTT", glow: "hover:shadow-purple-400/50" },
    ],
  },
  {
    label: "AI Tools",
    color: "from-violet-400 to-fuchsia-500",
    techs: [
      { src: claudeIcon, title: "Claude", glow: "hover:shadow-orange-400/50", badge: "Architecture & Logic" },
      { src: chatgptIcon, title: "ChatGPT", glow: "hover:shadow-gray-300/50", badge: "Debugging & Ideas" },
      { src: cursorIcon, title: "Cursor AI", glow: "hover:shadow-blue-400/50", badge: "Refactoring" },
      { src: antigravityIcon, title: "Antigravity", glow: "hover:shadow-violet-400/50", badge: "Workflows" },
    ],
  },
];

const SkillCard = ({ src, title, glow, badge, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    className={`relative flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 shadow-sm dark:shadow-none ${glow} hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-default`}
  >
    {src ? (
      <img src={src} alt={title} className="w-14 h-14 object-contain" />
    ) : (
      <div className="w-14 h-14 rounded-xl bg-slate-200 dark:bg-white/10 border border-dashed border-slate-300 dark:border-white/20 flex items-center justify-center text-slate-400 dark:text-gray-500 text-xs text-center leading-tight px-1">
        {title}
      </div>
    )}
    <p className="text-sm text-slate-600 dark:text-gray-300 font-medium text-center">{title}</p>
    {badge && (
      <span className="absolute -top-2 -right-2 text-[10px] font-medium px-2 py-0.5 rounded-full bg-violet-600 text-white shadow-md shadow-violet-900/60 leading-tight whitespace-nowrap">
        {badge}
      </span>
    )}
  </motion.div>
);

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      name="experience"
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
            Skills
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-blue-500 mt-2 rounded-full" />
          <p className="text-slate-500 dark:text-gray-400 mt-4">Technologies I work with</p>
        </motion.div>

        <div className="flex flex-col gap-12">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className={`text-sm font-semibold uppercase tracking-widest bg-gradient-to-r ${cat.color} bg-clip-text text-transparent`}>
                  {cat.label}
                </span>
                <div className={`flex-1 h-px bg-gradient-to-r ${cat.color} opacity-30`} />
                {cat.label === "AI Tools" && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-violet-100 dark:bg-violet-500/20 text-violet-600 dark:text-violet-300 border border-violet-300 dark:border-violet-500/30">
                    Daily workflow
                  </span>
                )}
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                {cat.techs.map((tech, ti) => (
                  <SkillCard key={tech.title} {...tech} index={ti} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
