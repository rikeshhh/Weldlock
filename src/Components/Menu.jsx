
import logo from "../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa6";
import { useState } from "react";
import { Dropdown } from 'flowbite-react';

const Menu = () => {
  const data = [
   
    {
      id: 1,
      content: "OUR PRODUCT",
      pathone: "About",
      pathTwo:'Feedback',
      pathThree:'',
      logo: <FaCaretDown />,
      optionOne:'About us',
      optionTwo:'Feedback',
      optionThree:'Home'  
    },
    {
      id: 2,
      content: "CUSTOMERS",
      pathone: "Solutions",
      pathTwo:'Customers',
      pathThree:'Explore',
      logo: <FaCaretDown />,
      optionOne:'Solutions',
      optionTwo:'Customer',
      optionThree:'Explore'
    },
    {
      id: 3,
      content: "ABOUT US",
      pathone: "Feature",
      pathTwo:'Customers',
      pathThree:'Explore',
      logo: <FaCaretDown />,
      optionOne:'Feature',
      optionTwo:'Feedback',
      optionThree:'Home'
    },
    {
      id: 4,
      content: "NEWS",
      path: "Explore",
      logo: <FaCaretDown />,
    },
   
  ];
      
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-4">
   <a href="/">

   <figure>
        <img src={logo} alt="" />
    </figure>
   </a>
    <ul className="flex flex-col">
    {
      data.map((item)=>(

        <li key={item.id} className="relative hoverMe">
        <Dropdown label={item.content} inline>
      <Dropdown.Item><Link to={item.pathone}>{item.optionOne}</Link></Dropdown.Item>
      <Dropdown.Item><Link to={item.pathTwo}>{item.optionTwo}</Link></Dropdown.Item>
      <Dropdown.Item><Link to={item.pathThree}>{item.optionThree}</Link></Dropdown.Item>
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
      </li>   
      ))
      
    }
      </ul>      
    
        </div>
  )
}

export default Menu
