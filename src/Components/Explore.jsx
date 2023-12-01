import mild from "../assets/mild.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "swiper/css/pagination";
import { Pagination } from 'swiper/modules';
import { MdArrowOutward } from "react-icons/md";

const Explore = () => {
  const data = [
    {
      id: 1,
      image: mild,
      content: "Mild Steel Diamond Grating",
    },
    {
      id: 2,
      image: mild,
      content: "Mild Steel Diamond Grating",
    },
    {
      id: 3,
      image: mild,
      content: "Mild Steel Stair Treads",
    },
    {
      id: 4,
      image: mild,
      content: "Mild Steel Stair Treads",
    },
  ];
  return (
    <div className="bg-solutionBlack">
      <div className="pt-24 pr-32 pl-32  flex">
        <div className="flex flex-col">
          <span>OUR BROCHUES</span>
          <div className="flex justify-evenly items-center gap-12">
            <div className="w-[476px] h-[527px] flex justify-start gap-8 flex-col">
              <h3 className="text-5xl font-semibold">Explore And Download</h3>
              <h3 className="text-5xl font-semibold">Our Brochures</h3>
              <ul className="flex flex-col justify-between gap-3">
                <li className=" border-b-2 pb-2 font-semibold text-2xl">Mild Steal Diamond Grating</li>
                <li className=" border-b-2 pb-2 font-semibold text-2xl">Mild Steel Stairs Treads</li>
                <li className=" border-b-2 pb-2 font-semibold text-2xl">Aluminium Stair Treads</li>
                <li className=" border-b-2 pb-2 font-semibold text-2xl">Mastermesh Expanded Metal</li>
              </ul>
              <div>
                <button className="bg-maroon-red pt-[16px] pr-[30px] pl-[30px] pb-[16px] flex items-center"><MdArrowOutward/>View All Brochures</button>
              </div>
            </div>
            <div className=" text-black ">
             <div className="w-[800px] h-[700px]">
             <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    type: 'progressbar',
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
              >
                {data.map((item) => (
                  <SwiperSlide key={item.id}>
                    <img src={item.image} alt="" />
                    <div className=" text-white">
                      <h1>{item.content}</h1>
                      <button>Download Now</button>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
             </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
