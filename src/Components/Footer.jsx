import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import logo from '../assets/logo.png'
import { IoLogoLinkedin } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-footer-image py-24 border-t-2  border-[#ffffff1a]">
      <section className="max-w-[calc(1440px_+_266px)] py-0 px-[133px] my-0 mx-auto">
        <section className="flex flex-col gap-10">
          <h2>Enquire Now</h2>
          <div className="grid grid-cols-2 justify-between pb-6 border-b-2 border-[#ffffff1a]">
            <div className="text-4xl font-semibold">
              <h3>For More Information</h3>
              <h4 className="text-maroon-red">On Product And Services</h4>
            </div>
            <div className="flex justify-end">
              <button className="bg-maroon-red flex items-center px-[30px] py-[16px] h-fit font-bold">
                <MdArrowOutward /> Request A Quote
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-[26px] mt-[64px]">
            <div className="flex justify-start flex-col gap-[24px]">
              <div>
                <a href="/">
                  <img src={logo} alt="" />
                </a>
              </div>
              <p>
                We are on a mission to invest in new products and systems which
                will provide the Australian market with innovative solutions.
              </p>
            </div>
            <div className="flex flex-col gap-[20px]">
            <h2 className="text-2xl font-semibold">Quick Links</h2>

            <ul className="flex flex-col gap-[20px]">
              <li>Home</li>
              <li>Our Customers</li>
              <li>News</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
            </div>
           <div className="flex flex-col gap-[20px]">
           <h3 className="text-2xl font-semibold">Product Range</h3>

           <ul className="flex flex-col gap-[20px]">
              <li>Civil Drainage Product</li>
              <li>Flooring & Grating Solution</li>
              <li>Handrail System</li>
              <li>Mastermesh Expanded Perforateed</li>
            </ul>
           </div>
            <div className="flex flex-col gap-[20px]">
              <h2 className="font-semibold text-2xl">SUBSCRIBE TO OUR NEWS LETTER</h2>
              <div className="flex">
                <input type="text" />
                <button className="bg-maroon-red text-white w-8 flex justify-center items-center">
                  <FaArrowRight />
                </button>
              </div>
              <div className="flex justify-start items-center gap-[12px]">
              <IoLogoLinkedin />
                <FaYoutube />
                <FaFacebook />
                <FaTwitter />
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-12">
            <div className="flex flex-col text-xs font-light">
              <span className="text-xs font-normal text-grayWhite">
                © 2023 by NEPEAN Building and Infrastructure. Weldlok® is a
                registered trademark of NEPEAN Building & Infrastructure.
              </span>
              <span className="">
              Weldlok® is a registered trademark of NEPEAN Building & Infrastructure.
              </span>
            </div>
            <div className="flex flex-col text-xs font-light">
           <span>
           Privacy Policy | Internet Policy | Terms & Conditions of Sale |
              Conditions of Purchase
           </span>
            </div>
          </div>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
