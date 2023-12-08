import { FaPhoneAlt } from "react-icons/fa";
import logo from "./assets/logo.svg";
import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { Dropdown } from "flowbite-react";

const Header = () => {
  const data = [
    {
      id: 1,
      content: "OUR PRODUCT",
      pathone: "About",
      pathTwo: "Feedback",
      pathThree: "Feature",
      logo: <FaCaretDown />,
      optionOne: "Product",
      optionTwo: "Feedback",
      optionThree: "Feature",
    },
    {
      id: 2,
      content: "CUSTOMERS",
      pathone: "Solutions",
      pathTwo: "Customers",
      pathThree: "Explore",
      logo: <FaCaretDown />,
      optionOne: "Solutions",
      optionTwo: "Customer",
      optionThree: "Explore",
    },
  ];
  return (
    <section className="main-container flex justify-between items-center md:justify-between ">
      <div className="logo">
        <a href="/">
          <figure>
            <img src={logo} alt="" />
          </figure>
        </a>
      </div>

      <nav className="Navbar flex justify-center items-center ">
        <div>
          <ul className="flex justify-around items-center text-xl gap-6 relative max-sm:hidden max-xl:text-base  max-md:hidden max-lg:text-xs max-lg:gap-4">
            <li className="relative hoverMe">
              <Link to="/">HOME</Link>
            </li>

            {data.map((item) => (
              <li key={item.id} className="relative hoverMe">
                <Dropdown label={item.content} inline>
                  <Dropdown.Item>
                    <Link to={item.pathone}>{item.optionOne}</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to={item.pathTwo}>{item.optionTwo}</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to={item.pathThree}>{item.optionThree}</Link>
                  </Dropdown.Item>
                </Dropdown>
              </li>
            ))}
            <li>
              <Link to="About">ABOUT US</Link>
            </li>
            <li>NEWS</li>
            <li>
              <Link>CONTACT US</Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden ">
          <button>
            <Link to="menu">
              {" "}
              <RxHamburgerMenu />
            </Link>
          </button>
        </div>
      </nav>

      <div className="header-accessories max-sm:hidden max-md:hidden max-lg:hidden hover:text-maroon-red">
        <a
          href="tel:1800 935 356"
          className="flex justify-center items-center gap-2"
        >
          <FaPhoneAlt className="text-white border rounded-full p-2 h-7 w-8 " />{" "}
          1800 935 356
        </a>
      </div>
    </section>
  );
};

export default Header;
