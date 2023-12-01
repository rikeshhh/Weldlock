import aboutpicture from "../assets/About.png";
const About = () => {
  return (
    <div className="bg-dipBlack">
 <div className="flex justify-center gap-32 items-center pt-24 pr-32 pl-32 pb-24">
      <img src={aboutpicture} alt="" />
      <div className="flex justify-center flex-col gap-8">
        <span>About WeldLok</span>
        <h2 className="font-bold text-3xl">
          Weldlok and Balltube: Trusted Australian brands for 60+ years, serving
          infrastructure, mining, industrial, civil, and fabrication.
        </h2>
        <p className="text-lg font-medium">
          We are specialists in the design and supply of high quality, durable
          grating, industrial and modular handrail, steel flooring, FRP
          flooring, and drainage grates and covers.
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
        <button className="bg-maroon-red text-white p-4">Learn More about us</button>

        </div>
      </div>
      
    </div>
    
    </div>
   
  );
};

export default About;
