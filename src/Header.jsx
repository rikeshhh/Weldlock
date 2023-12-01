import { FaPhoneAlt } from "react-icons/fa";
import logo from './assets/logo.png'
import { NavLink } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa6";

const Header = () => {
  const data =[
  
  {
    id:21,
    content:'HOME',
    path:'/',
  },
  {
    id:2,
    content:'OUR PRODUCT',
    path:'/',
    logo:<FaCaretDown />,
  },
  {
    id:3,
    content:'CUSTOMERS',
    path:'Customers',
    logo:<FaCaretDown />,
  },
  {
    id:4,
    content:'ABOUT US',
    path:'/',
    logo:<FaCaretDown />,
  },
{
  id:5,
  content:'NEWS',
  path:'/',
  logo:<FaCaretDown />,

},
{
  id:6,
  content:'CONTACT US',
  path:'',

}
]
  return (
    <nav className="flex justify-around items-center pt-10 pl-32 pr-32 pb-10 shadow-2xl border-slate-800 bg-header-image">
        {/* <h1 className="text-maroon-red font-black text-3xl font-manrope">Weldlok</h1> */}
<img src={logo} alt="" />
        <ul className="flex justify-around items-center gap-4">
           {
            data.map((item)=>(
              <li key={item.id} className="hover:border-b-2 border-maroon-red hover:text-maroon-red">
                <NavLink className='font-semibold text-sm flex justify-center items-center gap-2' to={item.path}
          
                >{item.content}{item.logo}</NavLink>
              </li>
            ))
           }
        </ul>
        <div className="flex justify-center items-center gap-3">
      
        <a href="tel:1800 935 356" className="flex justify-center items-center gap-2">  <FaPhoneAlt className="text-white border rounded-full p-2 h-7 w-8 "/> 1800 935 356</a>
        </div>
    </nav>
  )
}

export default Header
