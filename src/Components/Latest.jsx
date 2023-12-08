import water from "../assets/Water.png";
import handrail from "../assets/latest/hand.png";
import { MdArrowOutward } from "react-icons/md";

const Latest = () => {
  const data = [
    {
      id: 1,
      image: handrail,
      spanOne: "CIVIL",
      spanTwo: "JULY 19,2023",
      para: "Ductile Solutions For Civil Drainage",
    },
    {
      id: 2,
      image: handrail,
      spanOne: "ARCHITECTURAL",
      spanTwo: "JULY 19,2023",
      para: "The Benefits Of Aluminium Stair Treads",
    },
    {
      id: 3,
      image: handrail,
      spanOne: "Industrial",
      spanTwo: "JULY 19,2023",
      para: "Understanding Stair Treads",
    },
  ];
  return (
    <section className="Our-News-Event bg-black py-24" id="latest">
      <div className="main-container max-sm:w-auto">
        <div className="flex flex-col max-sm:items-center">
          <div className="flex justify-between pb-12 max-sm:flex-col">
            <div className="flex flex-col">
              <span>NEWS AND EVENT</span>
              <h2 className="text-4xl font-semibold">Our Latest News</h2>
            </div>
            <button className="bg-maroon-red p-2">View ALL News</button>
          </div>
          <div className="flex gap-6 justify-around max-sm:flex-col max-sm:items-center">
            <div className="flex flex-col gap-[18px] justify-start items-start h-[579px] w-[574px] max-sm:w-auto">
<figure>
<img src={water} alt="" />
</figure>
              <div className="flex">
                <span>Industrial</span>
                <span>JULY 19,2023</span>
              </div>
              <h3 className="font-semibold text-2xl">
                The Role Of Effective Grates And Drain Covers In Floods & Heavy
                Rain
              </h3>
              <div>
                <p>
                  Floods are the most expensive disaster in Australia, causing
                  social, economic, and environmental disruptions. The direct
                  costs associated with floods estimated over the period...
                </p>
              </div>
              <button className="flex justify-center items-center gap-2">
                <MdArrowOutward />
                Learn More
              </button>
            </div>
            <div className="flex flex-col gap-[42px]">
              {data.map((item) => (
                <div className="flex  h-[150px] gap-4 " key={item.id}>
<figure>
<img src={item.image} alt="" />
</figure>
                  <div className="flex flex-col justify-start items-start gap-[18px]">
                    <div className="flex gap-4  text-xs font-thin">
                      <span className="border border-[#ffffff1a]">
                        {item.spanOne}
                      </span>
                      <span>{item.spanTwo}</span>
                    </div>
                    <h4 className="font-semibold text-2xl">{item.para}</h4>
                    <button className="flex justify-center items-center">
                      <MdArrowOutward />
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Latest;
