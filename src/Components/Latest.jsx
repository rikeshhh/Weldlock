import water from "../assets/Water.png";
import handrail from "../assets/latest/hand.png";
import { MdArrowOutward } from "react-icons/md";

const Latest = () => {
  return (
    <div className="bg-black">
      <div className="flex flex-col pt-24 pr-32 pl-32 pb-24">
        <div className="flex justify-between pb-12">
          <div className="flex flex-col">
            <span>NEWS AND EVENT</span>
            <h2 className="text-4xl font-semibold">Our Latest News</h2>
          </div>
          <button className="bg-maroon-red p-2">View ALL News</button>
        </div>
        <div className="flex gap-6 justify-around">
          <div className="flex flex-col gap-[18px] justify-start items-start h-[579px] w-[574px]">
            <img src={water} alt="" />
            <div className="flex">
              <span>Industrial</span>
              <span>JULY 19,2023</span>
            </div>
            <h2 className="font-semibold text-2xl">
              The Role Of Effective Grates And Drain Covers In Floods & Heavy
              Rain
            </h2>
            <p>
              Floods are the most expensive disaster in Australia, causing
              social, economic, and environmental disruptions. The direct costs
              associated with floods estimated over the period...
            </p>
            <button className="flex justify-center items-center gap-2"><MdArrowOutward/>Learn More</button>

          </div>
          <div className="flex flex-col gap-[42px]">
            <div className="flex  h-[150px] gap-4">
              <img src={handrail} alt="" />
              <div className="flex flex-col justify-start items-start gap-[18px]">
                <div className="flex gap-4  text-xs font-thin">
                  <span className="border border-grayWhite">CIVIL</span>
                  <span>JULY 19,2023</span>
                </div>
                <h2 className="font-semibold text-2xl">Ductile Solutions For Civil Drainage</h2>
                <button className="flex justify-center items-center"><MdArrowOutward/>Learn More</button>
              </div>
            </div>

            <div className="flex h-[150px] gap-4">
              <img src={handrail} alt="" />
              <div className="flex flex-col justify-start items-start gap-[18px]">
                <div className="flex gap-4  text-xs font-thin">
                  <span className="border">CIVIL</span>
                  <span>JULY 19,2023</span>
                </div>
                <h2 className="font-semibold text-2xl">Ductile Solutions For Civil Drainage</h2>
                <button className="flex justify-center items-center"><MdArrowOutward/>Learn More</button>
              </div>
            </div>

            <div className="flex  h-[150px] gap-4">
              <img src={handrail} alt="" />
              <div className="flex flex-col items-start gap-[18px]">
                <div className="flex gap-4  text-xs font-thin">
                  <span className="border">CIVIL</span>
                  <span>JULY 19,2023</span>
                </div>
                <h2 className="font-semibold text-2xl">Ductile Solutions For Civil Drainage</h2>
                <button className="flex justify-center items-center"><MdArrowOutward/>Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;
