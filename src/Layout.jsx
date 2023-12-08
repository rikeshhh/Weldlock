import { Outlet } from "react-router-dom";
import "./App.css";

import Footer from "./Components/Footer";

import Header from "./Header";

const Layout = () => {
  return (
    <>
      <header className="absolute z-40 w-full border-b-2 border-[#ffffff1a] py-6">
        <Header />
      </header>
      <main className="max-sm:text-base max-md:text-lg">
       <Outlet/>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
