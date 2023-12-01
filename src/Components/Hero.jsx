import one from "../assets/solu/one.png";
import two from "../assets/solu/two.png";
import three from "../assets/solu/three.png";
import { MdArrowOutward } from "react-icons/md";
import civil from "../assets/Civil.png";
import industrial from "../assets/Industrial.png";
import architect from "../assets/Architectural.png";
const Hero = () => {
  const data = [
    {
      id: 1,
      heade: "Industrial",
      content:
        "We ensure clients sucess by delivering the highest quality products",
      image: one,
      logo: industrial,
    },
    {
      id: 2,
      heade: "CIVIL",
      content:
        "We ensure clients sucess by delivering the highest quality products",
      image: two,
      logo: civil,
    },
    {
      id: 3,
      heade: "ARCHITECTURAL",
      content:
        "We ensure clients sucess by delivering the highest quality products",
      image: three,
      logo: architect,
    },
  ];
  return (
    <div className="bg-cover hero relative overflow-hidden">
      <div className="text-center pt-56 pr-32 pl-32 flex items-center flex-col justify-center gap-8">
        <h1 className="font-semibold text-6xl w-[971px]">
          High Quality,reliable and proven products and systems
        </h1>
        <p>The Weldlok brand guarantees the right solution for all customers</p>
        <div className="flex justify-center">
          <button className="bg-maroon-red text-white pt-4 pb-4 pr-8 pl-8 flex items-center">
            {" "}
            <MdArrowOutward />
            Find out more
          </button>
        </div>
      </div>
      <div className="flex text-black justify-center items-center absolute inset-x-0 -bottom-10 gap-20">
        {data.map((item) => (
          <div
            key={item.id}
            className="w-[373px] relative h-[109px] text-center bg-white hover:h-[200px] hover:-translate-y-20 hover:transition hover:ease-in-out hover:duration-300 delay-200 group"
          >
            <div className="flex pt-2 pb-2 justify-start items-center gap-6">
              <img src={item.logo} alt="" />
              <h1 className="text-xl p-[5px] ">{item.heade}</h1>
            </div>
            <p className="opacity-0 group-hover:opacity-100 hidden group-hover:block">
              {item.content}
            </p>
            <div className="bg-maroon-red  top-8 right-3 h-8 w-8 flex justify-center group-hover:top-20 items-center absolute  transition-all duration-300 ease-in-out">
              <MdArrowOutward className="group-hover:rotate-45  text-white" />
            </div>

            <img src={item.image} alt="" className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
