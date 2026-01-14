import HeroImage from "../assets/heroImage.png";
const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-2">
          <div className="flex-1 hidden md:block">
            <img
              src={HeroImage}
              alt="my profile"
              className="rounded-2xl mx-auto w-2/3"
            />
          </div>

          <div className="flex-1 flex flex-col items-start ml-2">
            <h3 className="font-bold text-4xl sm:text-7xl">About me</h3>
            <p className="text-xl text-gray-500 mt-4">
              I am from a province in the southwest of Vietnam. Currently living
              and studying in Ho Chi Minh City.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              <p className="text-xl w-full flex">
                <span className="flex-1">Name : </span>
                <span className="flex-1">Phan Minh Tri</span>
              </p>
              <p className="text-xl w-full flex">
                <span className="flex-1">Date of birth : </span>
                <span className="flex-1">02/01/2001</span>
              </p>
              <p className="text-xl w-full flex">
                <span className="flex-1">Address : </span>
                <span className="flex-1">
                  260/14 Binh Quoi, Binh Thanh district, HCM
                </span>
              </p>
              <p className="text-xl w-full flex">
                <span className="flex-1">Email : </span>
                <span className="flex-1">minhtritt01@gmail.com</span>
              </p>
              <p className="text-xl w-full flex">
                <span className="flex-1">Phone : </span>
                <span className="flex-1">0834790997</span>
              </p>
              <form method="get" action="./PhanMinhTri_resume.pdf">
                <button className="bg-blue-600 mt-4 py-3 px-6 text-lg cursor-pointer rounded-full">
                  View CV
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
