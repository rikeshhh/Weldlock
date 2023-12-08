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
    <section className="Case-Studies bg-dipBlack py-24" id="feature">
      <div className="main-container sm:w-auto">
        <div className="flex flex-col justify-center">
          <span>Case Studies</span>
          <div className="flex justify-between max-sm:flex-col gap-3">
            <h2 className="text-4xl">Featured Project</h2>
            <div>
            <button className="bg-maroon-red flex items-center p-2 gap-[12px]">
            <MdArrowOutward/>
              View All Case Studies</button>
            </div>
          </div>

          <div>
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper grid grid-cols-2 justify-center items-start"
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
                <div className="flex pt-11 justify-between gap-12 max-sm:flex-col">
                  <div>
                 <figure  className="flex justify-center h-[500px]">
                 <img src={build} alt="" />
                 </figure>
                  </div>
                  <div className="flex flex-col justify-center items-start  gap-7 w-[400px]">
                    <h3 className="text-3xl font-black">
                      Central Taiwan Innovation & Research Park
                    </h3>
                    <div className="flex justify-center flex-col">
                      <div className="border-y-2 border-[#ffffff1a] flex gap-12">
                        <span className="w-12 ">Location:</span>
                        <div className="">Nantou,Taiwan</div>
                      </div>
                      <div className="border-[#ffffff1a] border-b-2 flex  gap-12 ">
                        <span>Client:</span>
                        <div>Central Taiwan Innovation & Research Park</div>
                      </div>
                    </div>
                  <div  className="font-semibold">
                  <p>
                      Bio-architecture Formosana, an architectural firm known
                      for their commitment to eco-friendly buildings, achieved
                      the highest grade of Taiwans green building label with
                      project.
                    </p>
                  </div>
                    <button className="flex justify-center items-center">
                      <MdArrowOutward />
                      Read Full Case Study
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              {/* <SwiperSlide></SwiperSlide>
              <SwiperSlide></SwiperSlide> */}
               <SwiperSlide className="pb-12">
                <div className="flex pt-11 justify-between gap-12 max-sm:flex-col">
                  <div>
                 <figure  className="flex justify-center h-[500px]">
                 <img src={build} alt="" />
                 </figure>
                  </div>
                  <div className="flex flex-col justify-center items-start  gap-7 w-[400px]">
                    <h3 className="text-3xl font-black">
                      Central Taiwan Innovation & Research Park
                    </h3>
                    <div className="flex justify-center flex-col">
                      <div className="border-y-2 border-[#ffffff1a] flex gap-12">
                        <span className="w-12 ">Location:</span>
                        <div className="">Nantou,Taiwan</div>
                      </div>
                      <div className="border-[#ffffff1a] border-b-2 flex  gap-12 ">
                        <span>Client:</span>
                        <div>Central Taiwan Innovation & Research Park</div>
                      </div>
                    </div>
                  <div  className="font-semibold">
                  <p>
                      Bio-architecture Formosana, an architectural firm known
                      for their commitment to eco-friendly buildings, achieved
                      the highest grade of Taiwans green building label with
                      project.
                    </p>
                  </div>
                    <button className="flex justify-center items-center">
                      <MdArrowOutward />
                      Read Full Case Study
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="pb-12">
                <div className="flex pt-11 justify-between gap-12 max-sm:flex-col">
                  <div>
                 <figure  className="flex justify-center h-[500px]">
                 <img src={build} alt="" />
                 </figure>
                  </div>
                  <div className="flex flex-col justify-center items-start  gap-7 w-[400px]">
                    <h3 className="text-3xl font-black">
                      Central Taiwan Innovation & Research Park
                    </h3>
                    <div className="flex justify-center flex-col">
                      <div className="border-y-2 border-[#ffffff1a] flex gap-12">
                        <span className="w-12 ">Location:</span>
                        <div className="">Nantou,Taiwan</div>
                      </div>
                      <div className="border-[#ffffff1a] border-b-2 flex  gap-12 ">
                        <span>Client:</span>
                        <div>Central Taiwan Innovation & Research Park</div>
                      </div>
                    </div>
                  <div  className="font-semibold">
                  <p>
                      Bio-architecture Formosana, an architectural firm known
                      for their commitment to eco-friendly buildings, achieved
                      the highest grade of Taiwans green building label with
                      project.
                    </p>
                  </div>
                    <button className="flex justify-center items-center">
                      <MdArrowOutward />
                      Read Full Case Study
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
