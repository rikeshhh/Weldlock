
import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa6";
import { Dropdown } from 'flowbite-react';
import {FaPhoneAlt} from 'react-icons/fa'
const Menu = () => {
  const data = [
   
    {
      id: 1,
      content: "OUR PRODUCT",
      pathone: "/About",
      pathTwo: "/Feedback",
      pathThree: "/Explore",
      logo: <FaCaretDown />,
      optionOne:'About us',
      optionTwo:'Feedback',
      optionThree:'Explore'  
    },
    {
      id: 2,
      content: "CUSTOMERS",
      pathone: "/Feedback",
      pathTwo: "/Solutions",
      pathThree: "/Customers",
      logo: <FaCaretDown />,
      optionOne:'Feedback',
      optionTwo:'Solutions',
      optionThree:'Customers'
    },
   
  ];
      
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-12">
   
    <ul className="flex flex-col gap-12">
   <li><Link to="/">Home</Link></li>
    {
      data.map((item)=>(

        <li key={item.id} className="relative hoverMe">
          
        <Dropdown label={item.content} inline>

      <Dropdown.Item><Link to={item.pathone}>{item.optionOne}</Link></Dropdown.Item>
      <Dropdown.Item><Link to={item.pathTwo}>{item.optionTwo}</Link></Dropdown.Item>
      <Dropdown.Item><Link to={item.pathThree}>{item.optionThree}</Link></Dropdown.Item>
    </Dropdown>
      </li>   
      ))
      
    }
    <li>
    <li>
           <a
          href="tel:1800 935 356"
          className="flex justify-center items-center gap-2"
        >
          <FaPhoneAlt className="text-white border rounded-full p-2 h-7 w-8 " />{" "}
          1800 935 356
        </a>
        </li>
    </li>
      </ul>      
    
        </div>
  )
}

export default Menu
