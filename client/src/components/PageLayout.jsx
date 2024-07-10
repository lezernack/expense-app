import Navbar from "./Navbar/Navbar.jsx";
import { Outlet } from "react-router-dom";
import MobileNavbar from "./Navbar/Navbar.jsx";

const PageLayout = () => {
  return (
    <>
      <Navbar />
      <MobileNavbar />
      <Outlet />
    </>
  );
};

export default PageLayout;
