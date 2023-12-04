import styled from "styled-components";
import one from "../assets/customer/customerimage/one.png";
import two from "../assets/customer/customerimage/two.png";
import three from "../assets/customer/customerimage/three.png";
import four from "../assets/customer/customerimage/four.png";
import five from "../assets/customer/customerimage/five.png";
import six from "../assets/customer/customerimage/six.png";
import seven from "../assets/customer/customerimage/seven.png";
import eight from "../assets/customer/customerimage/eight.png";
import nine from "../assets/customer/customerimage/nine.png";

const Customers = () => {
  const data = [
    {
      id: 1,
      name: "EPCM",
      image: one,
    },
    {
      id: 2,
      name: "ENGINEERS",
      image: two,
    },
    {
      id: 3,
      name: "LOCAL GOVERNMENT",
      image: three,
    },
    {
      id: 4,
      name: "CIVIL CONTRACTORS",
      image: four,
    },
    {
      id: 5,
      name: "DISTRIBUTORS",
      image: five,
    },
    {
      id: 6,
      name: "ARCHITECT",
      image: six,
    },
    {
      id: 7,
      name: "FABRICATORS",
      image: seven,
    },
    {
      id: 8,
      name: "MINING",
      image: eight,
    },
    {
      id: 9,
      name: "STATE GOVERNMENT",
      image: nine,
    },
  ];
  const Button = styled.button`
    background: #fff;
    textalign: center;
    color: #000;
    width: 373px;
    height: 80px;
    padding: 0px 32px;
    alignitems: center;
  `;
  return (
    <section className="Our-Customer customerBackground-image py-24">
      <section className="max-w-[calc(1440px_+_266px)] py-0 px-[133px] my-0 mx-auto">
        <div className="flex flex-col justify-center items-start gap-12">
          <div className="flex flex-col gap-[12px]">
            <span>Our Customers</span>
            <h2 className="text-[44px]  font-semibold">Who we work for</h2>
          </div>
          <div className="grid grid-cols-3 gap-[25px] justify-center items-center">
            {data.map((item) => (
              <div key={item.id}>
                <div className="flex">
                  <Button className="flex justify-start items-center gap-4">
                    <img src={item.image} />
                    {item.name}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Customers;
