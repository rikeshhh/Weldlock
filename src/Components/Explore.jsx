import mild from "../assets/mild.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { MdArrowOutward } from "react-icons/md";
import pdf from "../assets/pdf.png";
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
    <section className="Our-brochues bg-solutionBlack pt-24 ">
      <div className="main-container max-sm:w-auto">
        <div className="flex max-sm:flex-col max-sm:items-center max-md:flex-col">
          <div className="flex flex-col justify-start ">
            <span>OUR BROCHUES</span>
            <div className="w-[476px] h-[527px] flex justify-start gap-8 flex-col pr-14 max-sm:w-auto">
              <div className="text-5xl font-semibold">
                <h3>Explore And Download</h3>
                <h3>Our Brochures</h3>
              </div>
              <div className="flex flex-col justify-between gap-3 max-sm:justify-center">
                <div className="  flex border-b-2 border-[#ffffff1a] pb-2 font-semibold text-2xl gap-2">
                  <figure>
                    <img src={pdf} alt="" />
                  </figure>{" "}
                  <span>Mild Steal Diamond Grating</span>
                </div>
                <div className="  flex border-b-2 border-[#ffffff1a] pb-2 font-semibold text-2xl gap-2">
                  <figure>
                    <img src={pdf} alt="" />
                  </figure>{" "}
                  <span>Mild Steal Diamond Grating</span>
                </div>
                <div className="  flex border-b-2 border-[#ffffff1a] pb-2 font-semibold text-2xl gap-2">
                  <figure>
                    <img src={pdf} alt="" />
                  </figure>
                  <span>Mild Steal Diamond Grating</span>
                </div>
              </div>
              <div>
                <button className="bg-maroon-red pt-[16px] pr-[30px] pl-[30px] pb-[16px] flex items-center h-fit gap-[12px]">
                  <MdArrowOutward />
                  View All Brochures
                </button>
              </div>
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
              className="mySwiper flex flex-col justify-between gap-12 max-sm:items-center"
              style={{
                "--swiper-pagination-color": "#F80102",
                "--swiper-pagination-bullet-inactive-color": "#999999",
                "--swiper-pagination-bullet-inactive-opacity": "1",
                "--swiper-pagination-bottom": "-6px",
              }}
            >
              {data.map((item) => (
                <SwiperSlide key={item.id} className="pb-10">
                  <div className="flex pt-11 flex-col">
                    <figure>
                      <img src={item.image} alt="" />
                    </figure>
                    <div className=" text-white">
                      <h2>{item.content}</h2>
                      <button>Download Now</button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        </div>
      </div>
    </section>
  );
};

export default Explore;
