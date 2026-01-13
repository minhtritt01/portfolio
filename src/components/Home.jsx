import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Typed from "typed.js";
import React from "react";
import Tilt from "react-parallax-tilt";

const Home = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: [
        `Hey ! I'm a <span style="color:#19A3E0;text-decoration-line: underline;">Phan Minh Tri</span>`,
        `I'm a <span style="color:#19A3E0;text-decoration-line: underline;">Software Engineer</span>`,
      ],
      typeSpeed: 50,
      backSpeed: 50,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full flex-[2] ml-2">
          <h2 className="text-4xl sm:text-7xl text-white font-bold" ref={el} />
          <p className="text-gray-400 py-2 max-w-md ">
            I have 3 years of experience building and designing software. I
            specialize in Java for Android, and Flutter for mobile and web
            applications. I also build web apps using React.js and Next.js.
          </p>

          <div>
            <Link to={"portfolio"} smooth duration={500}>
              <button className="group text-white rounded-md w-fit px-6 py-3 my-2 flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                Portfolio
                <span className="group-hover:rotate-90">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </button>
            </Link>
          </div>
        </div>

        <div className="flex-1">
          <Tilt>
            <img
              src={HeroImage}
              alt="my profile"
              className="rounded-2xl md:w-full mx-auto w-2/3"
            />
          </Tilt>
        </div>
      </div>
    </div>
  );
};
export default Home;
