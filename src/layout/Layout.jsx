import { Outlet } from "react-router-dom";
import { Footer } from "../components/general";

const Layout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
