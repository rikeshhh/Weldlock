import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import logo from "../assets/logo.svg";
import { IoLogoLinkedin } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-footer-image  relative">
      <section className="main-container flex justify-center items-center max-[600px]:w-auto">
        <div className="flex flex-col gap-10 pt-24">
          <h2>Enquire Now</h2>
          <div className="grid grid-cols-2 justify-between pb-6 border-b-2 border-[#ffffff1a] max-sm:grid-cols-1 max-sm:gap-2">
            <div className="text-4xl font-semibold">
              <h3>For More Information</h3>
              <h4 className="text-maroon-red">On Product And Services</h4>
            </div>
            <div className="flex justify-end max-sm:justify-start gap-2">
              <Link to="Progress" className="bg-maroon-red flex items-center px-[30px] py-[16px] h-fit font-bold  max-sm:p-2">
                <MdArrowOutward /> Request A Quote
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-[26px] mt-[64px] max-sm:grid-cols-1 max-md:grid-cols-2">
            <div className="flex justify-start flex-col gap-[24px] ">
              <div>
                <a href="/">
                  <figure>
                    <img src={logo} alt="" />
                  </figure>
                </a>
              </div>
             <div className="relative">
             <p>
                We are on a mission to invest in new products and systems which will provide the Australian market with innovative solutions.
              </p>
             </div>
            </div>
            <div className="flex flex-col gap-[20px]">
              <h2 className="text-2xl font-semibold">Quick Links</h2>
              <div>
                <ul className="flex flex-col gap-[20px]">
                  <li>Home</li>
                  <li>Our Customers</li>
                  <li>News</li>
                  <li>About Us</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-[20px]">
              <h3 className="text-2xl font-semibold">Product Range</h3>

              <div>
                <ul className="flex flex-col gap-[20px]">
                  <li>Civil Drainage Product</li>
                  <li>Flooring & Grating Solution</li>
                  <li>Handrail System</li>
                  <li>Mastermesh Expanded Perforateed</li>
                </ul>
              </div>
            </div>
            <div className="flex font-semibold text-2xl sm:text-xs flex-col gap-2 ">
              <h2>
                SUBSCRIBE TO OUR NEWS LETTER
              </h2>
              <div className="flex items-start relative">
                <input type="text" className="w-full" />
                <button className="bg-maroon-red text-white w-8 flex justify-center items-center absolute right-0 h-full ">
                  <FaArrowRight />
                </button>
              </div>
              <div className="flex justify-start items-center gap-[12px] text-xl">
                <IoLogoLinkedin />
                <FaYoutube />
                <FaFacebook />
                <FaTwitter />
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-12 items-center max-sm:flex-col">
            <div className="flex flex-col text-xs font-light items-center ">
              <spa>
                © 2023 by NEPEAN Building and Infrastructure. 
              </spa>
              <span>
                Weldlok® is a registered trademark of NEPEAN Building &
                Infrastructure.
              </span>
            </div>
            <div className="flex flex-col text-xs font-light">
              <span>
                Privacy Policy | Internet Policy | Terms & Conditions of Sale |
                Conditions of Purchase
              </span>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
