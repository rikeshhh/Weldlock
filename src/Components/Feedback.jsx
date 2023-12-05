import Paul from "../assets/paul.png";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const Feedback = () => {
  return (
    <section className="Testinomial bg-dipBlack">
      <div className="main-container">
        <div className="flex justify-between items-center gap-32 pt-24 ">
          <div className="flex flex-col w-[472px] gap-4 ">
            <span>Testinomials</span>
            <h2 className="text-4xl">Your feedback drives us Forward</h2>
            <div className="text-lg ">
              <p>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam
              </p>
            </div>
            <div className="flex justify-start gap-2">
              <FaArrowRight className="bg-maroon-red w-8 h-8 p-2" />
              <FaArrowLeft className="bg-maroon-red w-8 h-8 p-2" />
            </div>
          </div>
          <div className="bg-white text-black w-[575px] pt-10 pl-14 pb-10 ">
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
                  <img src={Paul} alt="" className="rounded-md" />
                </figure>
                <div className="flex flex-col justify-start ">
                  <h3>Paul Mirabito</h3>
                  <span>Muray Engineering</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex requestCode-image justify-evenly items-center  gap-3  mt-[96px]">
          <div className="p-[96px] text-4xl font-black">
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
