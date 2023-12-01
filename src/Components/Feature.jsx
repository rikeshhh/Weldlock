import build from "../assets/build.png";
import { MdArrowOutward } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper/modules";

const Feature = () => {
  return (
    <div className="bg-dipBlack flex flex-col">
      <div className="pt-24 pr-32 pl-32 pb-24">
        <span>Case Studies</span>
        <div className="flex justify-between">
          <h1 className="text-4xl">Featured Project</h1>
          <button className="bg-maroon-red p-2">View All Case Studies</button>
        </div>

        <>
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            style={{
              "--swiper-pagination-color": "#F80102",
              "--swiper-pagination-bullet-inactive-color": "#999999",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bullet-size": "14px",
              "--swiper-pagination-bullet-horizontal-gap": "6px",
              "--swiper-pagination-bottom": "-6px",
            }}
          >
            <SwiperSlide className="pb-12">
              <div className="flex pt-11">
                <div className="flex justify-center h-[500px]">
                <img src={build} alt="" />
                </div>
                <div className="flex flex-col justify-start items-start  gap-7 w-[400px] pl-10 pr-10">
                  <h3 className="text-3xl font-black">
                    Central Taiwan Innovation & Research Park
                  </h3>
                  <div className="flex justify-center">
                    <ul>
                      <li className="border-y-1 border-dipBlack">
                        Location: Nantou,Taiwan
                      </li>
                      <li className="border-y-2 border-[#FFFFFF]">
                        {" "}
                        Clients : Central Taiwan Innovation & Research Park
                      </li>
                    </ul>
                  </div>
                  <p className="font-semibold">
                    Bio-architecture Formosana, an architectural firm known for
                    their commitment to eco-friendly buildings, achieved the
                    highest grade of Taiwans green building label with project.
                  </p>
                  <button className="flex justify-center items-center">
                    <MdArrowOutward />
                    Read Full Case Study
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex pt-11">
              <div>
                <img src={build} alt="" />
                </div>                <div className="flex flex-col justify-start items-start  gap-7 w-[400px] pl-10 pr-10">
                  <h3 className="text-3xl font-black">
                    Central Taiwan Innovation & Research Park
                  </h3>
                  <div className="flex justify-center">
                    <ul className="divide-y divide-slate-700">
                      <li className="border-y-1 border-dipBlack">
                        Location: Nantou,Taiwan
                      </li>
                      <li className="border-y-2 border-[#FFFFFF]">
                        {" "}
                        Clients : Central Taiwan Innovation & Research Park
                      </li>
                    </ul>
                  </div>
                  <p className="font-semibold">
                    Bio-architecture Formosana, an architectural firm known for
                    their commitment to eco-friendly buildings, achieved the
                    highest grade of Taiwans green building label with project.
                  </p>
                  <button className="flex justify-center items-center">
                    <MdArrowOutward />
                    Read Full Case Study
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex pt-11">
              <div>
                <img src={build} alt="" />
                </div>                <div className="flex flex-col justify-start items-start  gap-7 w-[400px] pl-10 pr-10">
                  <h3 className="text-3xl font-black">
                    Central Taiwan Innovation & Research Park
                  </h3>
                  <div className="flex justify-center">
                    <ul>
                      <li className="border-y-1 border-dipBlack border">
                        Location: Nantou,Taiwan
                      </li>
                      <li className="border-y-2 border-dipBlack border">
                        {" "}
                        Clients : Central Taiwan Innovation & Research Park
                      </li>
                    </ul>
                  </div>
                  <p className="font-semibold">
                    Bio-architecture Formosana, an architectural firm known for
                    their commitment to eco-friendly buildings, achieved the
                    highest grade of Taiwans green building label with project.
                  </p>
                  <button className="flex justify-center items-center">
                    <MdArrowOutward />
                    Read Full Case Study
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </>
       
      </div>
    </div>
  );
};

export default Feature;
