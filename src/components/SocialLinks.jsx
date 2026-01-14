import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill, BsFacebook } from "react-icons/bs";
const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={25} />
        </>
      ),
      href: "https://www.linkedin.com/in/minhtritt01/",
      style: "rounded-tr-md bg-blue-500",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={25} />
        </>
      ),
      href: "https://github.com/minhtritt01",
      style: "bg-black",
    },
    {
      id: 3,
      child: (
        <>
          Facebook <BsFacebook size={25} />
        </>
      ),
      href: "https://www.facebook.com/minhtritt01/",
      style: "bg-[#1095F4]",
    },
    {
      id: 4,
      child: (
        <>
          Mail <HiOutlineMail size={25} />
        </>
      ),
      href: "mailto:minhtritt01@gmail.com",
      style: "bg-green-300",
    },
    {
      id: 5,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={25} />
        </>
      ),
      href: "./PhanMinhTri_resume.pdf",
      style: "rounded-br-md bg-gray-500",
      download: true,
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={`link-social${id}`}
            className={`flex justify-between items-center w-40 h-14 px-4  ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px] ${style}`}
          >
            <a
              href={href}
              className="text-white flex justify-between items-center w-full"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SocialLinks;
