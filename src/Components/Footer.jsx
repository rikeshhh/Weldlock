import { FaFacebook } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-footer-image">
      <div className="flex flex-col  pt-24 pr-32 pl-32 pb-24 gap-10">
        <h2>Enquire Now</h2>
        <div className="grid grid-cols-2 justify-between pb-6 border-b-2">
          <div className="text-4xl font-semibold">
            <h3>For More Information</h3>
            <h4 className="text-maroon-red">On Product And Services</h4>
          </div>
          <div className="flex justify-end">
          <button className="bg-maroon-red flex items-center pr-2 pl-2"><MdArrowOutward/> Request A Quote</button>

          </div>
        </div>
        <div className="flex justify-between gap-14 mt-[64px]">
          <div className="flex justify-start flex-col w-[307px]">
            <h2 className="text-maroon-red font-semibold text-6xl p-2 ">Weldlok</h2>
            <p>
              We are on a mission to invest in new products and systems which
              will provide the Australian market with innovative solutions.
            </p>
          </div>
          <ul className="flex flex-col gap-[20px]">
            <li className="text-2xl font-semibold">Quick Links</li>
            <li>Home</li>
            <li>Our Customers</li>
            <li>News</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
          <ul className="flex flex-col gap-[20px]">
            <li className="text-2xl font-semibold">Product Range</li>
            <li>Civil Drainage Product</li>
            <li>Flooring & Grating Solution</li>
            <li>Handrail System</li>
            <li>Mastermesh Expanded Perforateed</li>
          </ul>
          <div className="flex flex-col gap-4">
            <h2>SUBSCRIBE TO OUR NEWS LETTER</h2>
            <div className="flex">
              <input type="text" />
              <button className="bg-maroon-red text-white w-8 flex justify-center items-center"><FaArrowRight/></button>
            </div>
            <div className="flex justify-start items-center gap-2">
              <FaFacebook />
              <FaYoutube />
              <CiLinkedin />
              <FaTwitter />
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-xs font-light text-grayWhite">
              © 2023 by NEPEAN Building and Infrastructure. Weldlok® is a
              registered trademark of NEPEAN Building & Infrastructure.
            </span>
            <span className="text-xs font-light">
              © 2023 by NEPEAN Building and Infrastructure. Weldlok® is a
              registered trademark of NEPEAN Building & Infrastructure.
            </span>
          </div>
          <span className="text-xs font-light">
            Privacy Policy | Internet Policy | Terms & Conditions of Sale |
            Conditions of Purchase
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
