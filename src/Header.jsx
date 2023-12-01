import { FaPhoneAlt } from "react-icons/fa";
import logo from './assets/logo.png'
const Header = () => {
  return (
    <div className="flex justify-around items-center pt-10 pl-32 pr-32 pb-10 shadow-2xl border-slate-800 bg-header">
        {/* <h1 className="text-maroon-red font-black text-3xl font-manrope">Weldlok</h1> */}
<img src={logo} alt="" />
        <ul className="flex justify-around items-center gap-4">
            <li className="border-b-2 border-maroon-red">HOME</li>
            <li>OUR PRODUCT </li>
            <li>CUSTOMERS</li>
            <li>ABOUT US</li>
            <li>NEWS</li>
            <li>CONTACT US</li>
        </ul>
        <div className="flex justify-center items-center gap-3">
        <FaPhoneAlt className="text-white border rounded-full p-2 h-7 w-8 "/>
        <a href="tel:1800 935 356">1800 935 356</a>
        </div>
    </div>
  )
}

export default Header
