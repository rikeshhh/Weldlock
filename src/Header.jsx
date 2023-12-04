import { FaPhoneAlt } from "react-icons/fa";
import logo from "./assets/logo.png";
import { NavLink } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa6";

const Header = () => {
  const data = [
    {
      id: 21,
      content: "HOME",
      path: "/",
    },
    {
      id: 2,
      content: "OUR PRODUCT",
      path: "Feature",
      logo: <FaCaretDown />,
    },
    {
      id: 3,
      content: "CUSTOMERS",
      path: "Customers",
      logo: <FaCaretDown />,
    },
    {
      id: 4,
      content: "ABOUT US",
      path: "Feedback",
      logo: <FaCaretDown />,
    },
    {
      id: 5,
      content: "NEWS",
      path: "Explore",
      logo: <FaCaretDown />,
    },
    {
      id: 6,
      content: "CONTACT US",
      path: "",
    },
  ];
  return (
    <nav className=" py-10  border-b-2 border-[#ffffff1a]">
      <section className="max-w-[calc(1440px_+_266px)] py-0 px-[133px] my-0 mx-auto">
        <div className="shadow-2xl border-slate-800 bg-header-image flex justify-around items-center">
          <div>
            <a href="/">
              <img src={logo} alt="" />
            </a>
          </div>
          <div>
            <ul className="flex justify-around items-center gap-6 relative">
              {data.map((item) => (
                <li key={item.id} className="relative">
                  <NavLink
                    className=" font-semibold  hoverMe text-sm flex justify-center items-center gap-2"
                    to={item.path}
                    activeClassName="hoverMe"
                  >
                    {item.content}
                    <button>{item.logo}</button>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center items-center gap-3">
            <a
              href="tel:1800 935 356"
              className="flex justify-center items-center gap-2"
            >
              {" "}
              <FaPhoneAlt className="text-white border rounded-full p-2 h-7 w-8 " />{" "}
              1800 935 356
            </a>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Header;
