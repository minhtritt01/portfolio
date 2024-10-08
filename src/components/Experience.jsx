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
import fibase from "../assets/firebase.png";
import dart from "../assets/dart.png";
import axios from "../assets/axios.png";
import redux from "../assets/redux.png";
const Experience = () => {
  const techs = [
    { id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 2, src: css, title: "CSS", style: "shadow-blue-500" },
    { id: 3, src: javascript, title: "JavaScript", style: "shadow-yellow-500" },
    { id: 4, src: reactImage, title: "React", style: "shadow-blue-600" },
    { id: 5, src: tailwind, title: "Tailwind", style: "shadow-sky-400" },
    { id: 6, src: node, title: "Node JS", style: "shadow-green-400" },
    { id: 7, src: reactquery, title: "React-Query", style: "shadow-red-400" },
    { id: 8, src: github, title: "GitHub", style: "shadow-gray-400" },
    { id: 9, src: mongodb, title: "MongoDB", style: "shadow-white" },
    { id: 10, src: redux, title: "Redux", style: "shadow-purple-400" },
    { id: 11, src: materialui, title: "Material-UI", style: "shadow-sky-700" },
    { id: 12, src: formilk, title: "Formilk", style: "shadow-blue-500" },
    { id: 13, src: flutter, title: "Flutter", style: "shadow-blue-500" },
    { id: 14, src: bloc, title: "Bloc", style: "shadow-blue-500" },
    { id: 15, src: riverpod, title: "Riverpod", style: "shadow-blue-500" },
    { id: 16, src: dart, title: "Dart", style: "shadow-green-300" },
    { id: 17, src: fibase, title: "Firebase", style: "shadow-red-300" },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="mt-4 text-4xl font-bold border-b-4 border-gray-500 p-2 inline ">
            Experience
          </p>
          <p className="py-6 ">There are the technologies I've learned </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, title, style, src }) => (
            <div
              key={`tech-${id}`}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 h-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Experience;
