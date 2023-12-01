import build from "../assets/build.png";
import { GoDotFill } from "react-icons/go";
import { MdArrowOutward } from "react-icons/md";


const Feature = () => {
  return (
    <div className="bg-dipBlack flex flex-col">
      <div className="pt-24 pr-32 pl-32 pb-24">
        <span>Case Studies</span>
        <div className="flex justify-between">
          <h1 className="text-4xl">Featured Project</h1>
          <button className="bg-maroon-red p-2">View All Case Studies</button>
        </div>
    <div className="flex pt-11">
          <img src={build} alt="" />
          <div className="flex flex-col justify-start items-start  gap-7 w-[400px] pl-10 pr-10">
            <h3 className="text-3xl font-black">Central Taiwan Innovation & Research Park</h3>
            <div className="flex justify-center">
              <ul>
                <li className="border-y-1 border-dipBlack">Location: Nantou,Taiwan</li>
                <li className="border-y-2 border-[#FFFFFF]"> Clients : Central Taiwan Innovation & Research Park</li>
              </ul>
            </div>
            <p className="font-semibold">
              Bio-architecture Formosana, an architectural firm known for their
              commitment to eco-friendly buildings, achieved the highest grade
              of Taiwans green building label with project.
            </p>
            <button className="flex justify-center items-center"><MdArrowOutward/>Read Full Case Study</button>
          </div>
        </div>
        <div className="flex justify-center items-center  mt-10">
        <GoDotFill  className="text-maroon-red"/>
        <GoDotFill />
        <GoDotFill />
        </div>
      </div>
 
    </div>
  );
};

export default Feature;
