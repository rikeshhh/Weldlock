import Paul from '../assets/paul.png'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const Feedback = () => {
  return (
    <div className="bg-dipBlack flex flex-col">
        <div className='pt-24 pr-32 pl-32 pb-24'>
    <div className="flex justify-between items-center gap-32  ">
    <div className="flex flex-col w-[472px] gap-4 ">
        <span>Testinomials</span>
        <h2 className="text-4xl">Your feedback drives us Forward</h2>
        <p className='text-lg '>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam
        </p>
        <div className='flex justify-start gap-2'>
        <FaArrowRight  className='bg-maroon-red w-8 h-8 p-2'/>
        <FaArrowLeft className='bg-maroon-red w-8 h-8 p-2'/>
        </div>
      </div>
      <div className="bg-white text-black w-[575px]">
       <div className="pt-10 pl-14 pb-10">
       <p>
          I have been a customer of Weldlok for over 5 years now, in this time
          I have been nothing but pleased with the service and quality. Weldlok
          always goes above and beyond my expectations.
        </p>
        <div className="flex ">
<img src={Paul} alt="" className="rounded-md"/>
<div className="flex flex-col justify-start ">
    <h3>Paul Mirabito</h3>
    <span>Muray Engineering</span>
</div>
        </div>
       </div>
      </div> 
    </div>
    <div className='flex requestCode justify-evenly items-center pt-24 gap-3 '>
     <div className=''>
     <h2 className='text-4xl font-black'>Elevate Your Infrastructure</h2>
        <h3  className='text-4xl font-black text-maroon-red'>With Our Premium Solutions!</h3>
     </div>
     <button className="bg-maroon-red text-white pt-4 pb-4 pr-8 pl-8 flex items-center"><MdArrowOutward/>Request a code</button>
    </div>
        </div>
    </div>
  );
};

export default Feedback;
