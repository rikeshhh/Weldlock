import { Outlet } from 'react-router-dom'
import './App.css'

import Footer from './Components/Footer'

import Header from './Header'
const Layout = ({children}) => {
  return (
    <div>
       <Header />
 <main>
    <Outlet>{children}</Outlet>
 </main>
  <Footer/>
    </div>
  )
}

export default Layout
