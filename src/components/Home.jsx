import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Typed from "typed.js";
import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const Home = () => {
  const el = React.useRef(null);
  const typed = React.useRef(null);

  React.useEffect(() => {
    typed.current = new Typed(el.current, {
      strings: [
        `Hi, I'm <span style="color:#22d3ee;text-decoration:underline;">Phan Minh Tri</span>`,
        `I'm a <span style="color:#22d3ee;text-decoration:underline;">Software Engineer</span>`,
        `I build <span style="color:#22d3ee;text-decoration:underline;">Mobile & Web Apps</span>`,
      ],
      typeSpeed: 50,
      backSpeed: 40,
      backDelay: 1800,
      loop: true,
    });
    return () => typed.current.destroy();
  }, []);

  return (
    <div
      name="home"
      className="relative h-screen w-full overflow-hidden bg-[#020207]"
    >
      {/* Dot grid texture */}
      <div className="absolute inset-0 dot-grid opacity-100" />
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020207] via-[#060612] to-[#020207]" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-500/20 blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-600/20 blur-[100px] animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row gap-8">
        <motion.div
          className="flex flex-col justify-center flex-[2]"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="hidden sm:block text-cyan-400 font-medium tracking-widest uppercase text-sm mb-3">
            Welcome to my portfolio
          </p>
          <h2
            className="text-4xl sm:text-6xl text-white font-bold min-h-[80px]"
            ref={el}
          />
          <p className="text-gray-400 py-4 max-w-md leading-relaxed">
            3+ years building cross-platform mobile, web & desktop apps.
            Specialising in Flutter and React — shipped on App Store, Google
            Play & Microsoft Store. Actively using AI tools to ship faster.
          </p>

          <div className="flex gap-4 mt-2">
            <Link to="portfolio" smooth duration={500}>
              <button className="group text-white rounded-lg px-6 py-3 flex items-center gap-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/30 transition-all duration-300 font-medium">
                View Work
                <MdOutlineKeyboardArrowRight
                  size={22}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </Link>
            <Link to="contact" smooth duration={500}>
              <button className="text-white rounded-lg px-6 py-3 border border-gray-600 hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 font-medium">
                Hire Me
              </button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.03}>
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 opacity-50 blur-md" />
              <img
                src={HeroImage}
                alt="Phan Minh Tri"
                className="relative rounded-2xl md:w-72 w-48 object-cover"
              />
            </div>
          </Tilt>
        </motion.div>
      </div>

    </div>
  );
};

export default Home;
