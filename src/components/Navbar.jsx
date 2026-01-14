import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
const NavbarItem = ({ title, classProps, handleClick }) => {
  return (
    <li
      className={`mx-4 cursor-pointer ${classProps} capitalize font-medium text-gray-200 duration-500 hover:scale-110`}
    >
      <Link to={title} smooth duration={500} onClick={handleClick}>
        {title}
      </Link>
    </li>
  );
};
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed z-50">
      <div>
        <h1 className="text-5xl ml-2">Tri Dev</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ link, id }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in">
          <li className="text-xl w-full my-2">
            <AiOutlineClose onClick={() => setNav(false)} />
          </li>
          {links.map(({ link, id }) => (
            <NavbarItem
              handleClick={() => setNav(false)}
              key={link + id}
              title={link}
              classProps="my-2 text-lg"
            />
          ))}
        </ul>
      )}
    </div>
  );
};
export default Navbar;
