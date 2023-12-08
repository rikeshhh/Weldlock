import one from "../assets/solu/one.png";
import two from "../assets/solu/two.png";
import three from "../assets/solu/three.png";
import four from "../assets/solu/four.png";
import { MdArrowOutward } from "react-icons/md";

const Solutions = () => {
  const data = [
    {
      id: 1,
      heade: "Civil Drainage Product",
      content:
        "Innovative Civil Drainage Products Including Ductile, Mild Steel Grates, Orca Drain...",
      buttonContent: "View Product",
      image: one,
    },
    {
      id: 2,
      heade: "Flooring & Grating Solutions",
      content:
        "Weldlok Grating and Flooring Products Come In Stainless Steell,Steek & Mild Steel",
      buttonContent: "View Product",
      image: two,
    },
    {
      id: 3,
      heade: "Handrail Systems",
      content:
        "WldLok Balltube Handrail Systems Are Available In A Variety Of Materials..",
      buttonContent: "View Product",
      image: three,
    },
    {
      id: 4,
      heade: "Mastermesh Expanded Perforated",
      content:
        "Standard And Custom Designed Perforated Metal Producst Security Mesh,Decorative",
      buttonContent: "View Product",
      image: four,
    },
  ];
  return (
    <section className="Our-solution bg-solutionBlack h-full py-24" id="prduct">
      <div className="main-container">
        <div className="flex flex-col gap-[12px] pb-6 sm:justify-center">
          <span>OUR SOLUTIONS</span>
          <h2 className="text-4xl font-semibold ">Our Diverse Product Range</h2>
        </div>
        <div className="flex justify-center gap-4 max-sm:flex-col max-md:flex-col w-full items-center ">
          {data.map((item) => (
            <div className="flex flex-col gap-6 justify-center items-center" key={item.id}>
              <figure className="w-full">
                <img src={item.image} alt="" />
              </figure>
              <div className="flex gap-6 flex-col w-full">
                <h3 className="text-2xl h-[60px] max-sm:h-fit max-sm:w-56">{item.heade}</h3>
                <div className="text-lg h-[84px] mt-[18px] max-sm:h-fit max-sm:text-xs max-sm:w-40 max-sm:mt-0">
                  <p>{item.content}</p>
                </div>
                <button className="flex items-center gap-2">
                  <MdArrowOutward />
                  {item.buttonContent}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
