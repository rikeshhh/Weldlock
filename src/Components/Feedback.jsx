import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import Comment from "./Comment";

const Feedback = () => {
  const [open,setOpen]=useState(name)
  return (
    <section className="Testinomial bg-dipBlack" id="feedback">
      <div className="main-container sm:w-auto">
        <div className="flex justify-between items-center gap-32 pt-24 max-sm:flex-col">
          <div className="flex flex-col w-[472px] gap-4 max-sm:w-auto">
            <span>Testinomials</span>
            <h2 className="text-4xl">Your feedback drives us Forward</h2>
            <div className="text-lg ">
              <p>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam
              </p>
            </div>
            <div className="flex justify-start gap-2">
         <button
         onClick={()=>setOpen(!open)}
         >
         <FaArrowRight className="bg-maroon-red w-8 h-8 p-2" />
          </button>    
          <button
         onClick={()=>setOpen(!open)}
         >
            <FaArrowLeft className="bg-maroon-red w-8 h-8 p-2" />
            </button>
            </div>
          </div>
          
       {open?<Comment name="Rikesh" position="Frontend deevloper"/>:<>
       <div className="bg-white text-black w-[575px] pt-10 pl-14 pb-10 max-sm:p-2 max-sm:w-auto">
    <div className="gap-[24px] flex flex-col">
      <div>
        <p>
          I have been a customer of Weldlok for over 5 years now, in
          this time I have been nothing but pleased with the service and
          quality. Weldlok always goes above and beyond my expectations.
        </p>
      </div>
      <div className="flex gap-[12px]">
        <figure>
          <img src="" alt="" className="rounded-md" />
        </figure>
        <div className="flex flex-col justify-start ">
          <h3>Paul Mirabito</h3>
          <span>Muray Engineering</span>
        </div>
      </div>
    </div>
  </div>
       
       </>}


        </div>
        <div className="flex requestCode-image justify-evenly items-center  gap-3  mt-[96px] max-sm:flex-col">
          <div className="p-[96px] text-4xl font-black max-sm:p-4">
            <h4>Elevate Your Infrastructure</h4>
            <h5 className="text-maroon-red">
              With Our Premium Solutions!
            </h5>
          </div>
          <button className="bg-maroon-red text-white pt-4 pb-4 pr-8 pl-8 h-fit flex items-center gap-[12px]">
            <MdArrowOutward />
            Request a code
          </button>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
