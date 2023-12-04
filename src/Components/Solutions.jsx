import one from "../assets/solu/one.png"
import two from "../assets/solu/two.png"
import three from "../assets/solu/three.png"
import four from "../assets/solu/four.png"
import { MdArrowOutward } from "react-icons/md";

const Solutions = () => {
  const data=[
    {
      id:1,
      heade:'Civil Drainage Product',
      content:'Innovative Civil Drainage Products Including Ductile, Mild Steel Grates, Orca Drain...',
      buttonContent:'View Product',
      image:one,
    },
    {
      id:2,
      heade:'Flooring & Grating Solutions',
      content:'Weldlok Grating and Flooring Products Come In Stainless Steell,Steek & Mild Steel',
      buttonContent:'View Product',
      image:two,
    },
    {
      id:3,
      heade:'Handrail Systems',
      content:'WldLok Balltube Handrail Systems Are Available In A Variety Of Materials..',
      buttonContent:'View Product',
      image:three,
    },
    {
      id:4,
      heade:'Mastermesh Expanded Perforated',
      content:'Standard And Custom Designed Perforated Metal Producst Security Mesh,Decorative',
      buttonContent:'View Product',
      image:four,
    },
  ]
  return (
    <section className="Our-solution bg-solutionBlack h-screen py-24">
      <section className="max-w-[calc(1440px_+_266px)] py-0 px-[133px] my-0 mx-auto">
            <div className="flex flex-col justify-between  gap-12">
        <div className="flex flex-col gap-[12px]">
          <span>OUR SOLUTIONS</span>
          <h2 className="text-5xl font-semibold">Our Diverse Product Range</h2>
        </div>
        <div className="flex justify-between gap-4">
          {data.map((item)=>(
      <div className="flex flex-col w-[276px] h-[160px] gap-6" key={item.id}>
      <img src={item.image} alt="" />
      <div className="flex gap-3 flex-col">
      <h3 className="text-2xl h-[60px]">{item.heade}</h3>
      <p className="text-lg h-[84px] mt-[18px]">{item.content}</p>
      <button className="flex items-center gap-2"><MdArrowOutward/>{item.buttonContent}</button>
      </div>
      </div>
          ))}
        </div>
      </div>
</section>
    </section>
  );
};

export default Solutions;
