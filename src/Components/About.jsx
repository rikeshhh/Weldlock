import aboutpicture from "../assets/About.png";
import { MdArrowOutward } from "react-icons/md";

const About = () => {
  return (
    <section className="About bg-dipBlack py-24">
      <section className="max-w-[calc(1440px_+_266px)] py-0 px-[133px] my-0 mx-auto">
        <div className="flex justify-center gap-32 items-center ">
          <img src={aboutpicture} alt="" />
          <div className="flex justify-center flex-col gap-8">
            <span>About WeldLok</span>
            <h2 className="font-bold text-3xl">
              Weldlok and Balltube: Trusted Australian brands for 60+ years,
              serving infrastructure, mining, industrial, civil, and
              fabrication.
            </h2>
            <p className="text-lg font-medium">
              We are specialists in the design and supply of high quality,
              durable grating, industrial and modular handrail, steel flooring,
              FRP flooring, and drainage grates and covers.
            </p>
            <div className="flex justify-start items-start gap-6">
              <div className="flex flex-col">
                <h2 className="text-4xl font-black">60+</h2>
                <span className="text-base">YEARS OF EXPERIENCE</span>
              </div>
              <div className="flex flex-col">
                <h2 className="text-4xl font-black">450</h2>
                <span className="text-base">YEARS OF EXPERIENCE</span>
              </div>
              <div className="flex flex-col">
                <h2 className="text-4xl font-black">800+</h2>
                <span className="text-base">YEARS OF EXPERIENCE</span>
              </div>
            </div>
            <div>
              <button className="bg-maroon-red text-white p-4 flex justify-center items-center gap-2">
                <MdArrowOutward />
                Learn More about us
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
