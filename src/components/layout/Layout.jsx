import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar/Navbar";
import { Footer } from "./footer/footer";

const Layout = () => {
  return <div>
    <Navbar/>
    <Outlet/>
    <Footer/>
  </div>;
};

export default Layout;
