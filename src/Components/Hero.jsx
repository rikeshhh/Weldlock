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
    <section className=" relative overflow-hidden -mt-24">
    <section className="max-w-[calc(1440px_+_266px)] py-0 px-[133px] my-0 mx-auto">
      <div className="text-center py-56 flex items-center flex-col justify-center gap-8">
        <h1 className="font-semibold text-6xl w-[971px]">
          High Quality,reliable and proven products and systems
        </h1>
        <p>The Weldlok brand guarantees the right solution for all customers</p>
        <div className="flex justify-center pb-12">
          <button className="bg-maroon-red text-white pt-4 pb-4 pr-8 pl-8 flex items-center">
            {" "}
            <MdArrowOutward />
            Find out more
          </button>
        </div>
      </div>
      <div className="flex text-black justify-center items-center absolute inset-x-0 bottom-2 gap-20">
        {data.map((item) => (
          <div
            key={item.id}
            className="w-[373px] relative h-[109px] text-center bg-white hover:h-[200px] hover:-translate-y-20  hover:ease-in hover:duration-300 hover:delay-200 group"
          >
            <div className="flex pt-2 pl-2 font-semibold pb-2 justify-start items-center gap-6 text-2xl ease-in text-center duration-300">
              <img src={item.logo} alt="" />
              <h1 className="  ">{item.heade}</h1>
            </div>
         <div className="flex justify-center items-center font-semibold  text-left p-2 ">
         <p className="opacity-0   group-hover:opacity-100 hidden group-hover:block group-hover:-translate-y-2  group:hover:ease-in-out group-hover:duration-300">
              {item.content}
            </p>
         </div>
            <div className="relative">
            <div className="bg-maroon-red group-hover:absolute -top-5 right-3 h-8 w-8 flex justify-center  items-center absolute  group-hover:transition-all hover:delay-300 group-hover:ease-in-out">
              <MdArrowOutward className="group-hover:rotate-45 group-hover:ease-in-out   text-white group-hover:duration-300" />
            </div>

            <img src={item.image} alt="" className="w-full" />
            </div>
            
          </div>
        ))}
      </div>
    </section>
    </section>

  );
};

export default Hero;
