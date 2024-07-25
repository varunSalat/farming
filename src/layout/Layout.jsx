import { Outlet } from "react-router-dom";
import Navbar from "../components/general/Navbar";
import Footer from "../components/general/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
