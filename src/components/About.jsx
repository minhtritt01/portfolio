import HeroImage from "../assets/heroImage.png";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

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
      <p className="text-gray-400 text-sm mt-1">{label}</p>
    </div>
  );
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      name="about"
      className="w-full min-h-screen bg-[#0d0d1a] dot-grid text-white py-20"
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
            About Me
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
            <p className="text-gray-300 text-lg leading-relaxed">
              Software Engineer with 3+ years of experience specialising in
              Flutter for cross-platform mobile, web, and desktop applications.
              Strong expertise in Bloc/Provider, Clean Architecture, CI/CD
              pipelines, and real-time systems (MQTT, WebSocket). Experienced
              in Android Native (Kotlin/Java) and ReactJS. Actively leveraging
              AI tools — Claude, ChatGPT, Cursor — to accelerate development
              and improve code quality.
            </p>

            <div className="grid grid-cols-2 gap-4 text-base">
              {[
                ["Name", "Phan Minh Tri"],
                ["Location", "Ho Chi Minh City, VN"],
                ["Email", "minhtritt01@gmail.com"],
                ["Phone", "(+84) 834 790 997"],
                ["Availability", "Open to work"],
              ].map(([label, value]) => (
                <div key={label} className="flex flex-col gap-0.5">
                  <span className="text-gray-500 text-sm uppercase tracking-wide">
                    {label}
                  </span>
                  <span className="text-white font-medium">{value}</span>
                </div>
              ))}
            </div>

            <a
              href="/PhanMinhTri_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit mt-2 items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium py-3 px-6 rounded-lg shadow-lg shadow-cyan-500/30 transition-all duration-300"
            >
              View Resume
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="mt-16 grid grid-cols-3 gap-6 border border-gray-700/50 rounded-2xl p-8 bg-white/5 backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <StatCounter end={3} label="Years Experience" />
          <StatCounter end={10} label="Projects Shipped" />
          <StatCounter end={3} label="App Stores" />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
