import mild from "../assets/mild.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { MdArrowOutward } from "react-icons/md";
import pdf from "../assets/pdf.png"
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
    // bg-solutionBlack Custom
    <div className="bg-solutionBlack">
      <div className="pt-24 pr-32 pl-32  flex justify-center items-center">
        <div className="flex flex-col justify-start">
          <span>OUR BROCHUES</span>
          <div className="flex justify-evenly items-center gap-[108px]">
            <div className="w-[476px] h-[527px] flex justify-start gap-8 flex-col">
              <h3 className="text-5xl font-semibold">Explore And Download</h3>
              <h3 className="text-5xl font-semibold">Our Brochures</h3>
              <div className="flex flex-col justify-between gap-3">
                <div className="  flex border-b-2 pb-2 font-semibold text-2xl">
                  <img src={pdf} alt="" />
                  <span>Mild Steal Diamond Grating</span>
                </div>
                <div className="  flex border-b-2 pb-2 font-semibold text-2xl">
                  <img src={pdf} alt="" />
                  <span>Mild Steal Diamond Grating</span>
                </div>
                <div className="  flex border-b-2 pb-2 font-semibold text-2xl">
                  <img src={pdf} alt="" />
                  <span>Mild Steal Diamond Grating</span>
                </div>
              </div>
              <div>
                <button className="bg-maroon-red pt-[16px] pr-[30px] pl-[30px] pb-[16px] flex items-center">
                  <MdArrowOutward />
                  View All Brochures
                </button>
              </div>
            </div>
            <div className=" text-black flex justify-center items-center "></div>
          </div>
        </div>
        <>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              type: "progressbar",
            }}
            modules={[Pagination]}
            className="mySwiper flex flex-col justify-between gap-12"
            style={{
              "--swiper-pagination-color": "#F80102",
              "--swiper-pagination-bullet-inactive-color": "#999999",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bottom": "-6px",

            }}
          >
            {data.map((item) => (
              <SwiperSlide key={item.id} className="pb-7">
                <div className="flex pt-11 flex-col">
                <img src={item.image} alt="" />
                <div className=" text-white">
                  <h1>{item.content}</h1>
                  <button>Download Now</button>
                </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </div>
    </div>
  );
};

export default Explore;
