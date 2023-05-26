import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import bg from "../assets/bg.jpg";
import Aos from "aos";

const MainLayout = () => {
  useEffect(() => {
    Aos.init()
  },[])

  return (
    <div style={{ background: `url(${bg})`, backgroundSize: "cover" , backgroundPosition: 'center center', backgroundAttachment: 'fixed'}}>
      <div className="bg-black/25">
        <div className="p-2 lg:px-0 max-w-screen-xl mx-auto min-h-screen">
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
