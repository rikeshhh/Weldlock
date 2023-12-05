import aboutpicture from "../assets/About.png";
import { MdArrowOutward } from "react-icons/md";

const About = () => {
  return (
    <section className="About bg-dipBlack py-24">
      <div className="main-container">
        <div className="flex justify-center gap-32 items-center ">
        <figure className="w-full">
        <img src={aboutpicture} alt="" />
        </figure>
          <div className="flex justify-center flex-col gap-8">
            <span>About WeldLok</span>
            <h2 className="font-bold text-3xl">
              Weldlok and Balltube: Trusted Australian brands for 60+ years,
              serving infrastructure, mining, industrial, civil, and
              fabrication.
            </h2>
           <div className="text-lg font-medium">
           <p>
              We are specialists in the design and supply of high quality,
              durable grating, industrial and modular handrail, steel flooring,
              FRP flooring, and drainage grates and covers.
            </p>
           </div>
            <div className="flex justify-start items-start gap-6">
              <div className="flex flex-col">
                <h3 className="text-4xl font-black">60+</h3>
                <span className="text-base">YEARS OF EXPERIENCE</span>
              </div>
              <div className="flex flex-col">
                <h4 className="text-4xl font-black">450</h4>
                <span className="text-base">YEARS OF EXPERIENCE</span>
              </div>
              <div className="flex flex-col">
                <h5 className="text-4xl font-black">800+</h5>
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
      </div>
    </section>
  );
};

export default About;
