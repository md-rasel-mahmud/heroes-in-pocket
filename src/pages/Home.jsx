import React, { useState } from "react";
import Banner from "../components/HomeSection/Banner";
import ShopByCategory from "../components/HomeSection/ShopByCategory/ShopByCategory";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
import ImgGallery from "../components/HomeSection/ImgGallery";
import About from "../components/HomeSection/About";
import OurTeam from "../components/HomeSection/OurTeam";
import { Helmet } from "react-helmet";
import Faq from "../components/HomeSection/Faq";
import BestToys from "../components/HomeSection/BestToys";
import Services from "../components/HomeSection/Services";
import Modal from "../components/Modal";
import FeaturedBrands from "../components/HomeSection/FeaturedBrands";
import ToyEvents from "../components/HomeSection/ToyEvents";

const Home = () => {
  const [viewDetail, setViewDetail] = useState("");


  return (
    <>
      <Helmet>
        <title>Heroes in pocket</title>
      </Helmet>
      {/* Banner section  */}
      <Banner />

      {/* Services section  */}
      <Services/>

      {/* Best toys section  */}

      <BestToys></BestToys>

      {/* ShopByCategory section  */}

      {/* send setViewDetail function to ShopByCategory for receive click view detail button to show mosal  */}
      <ShopByCategory setViewDetail={setViewDetail} />

      {/* View detail modal */}
      <Modal viewDetail={viewDetail}></Modal>

      {/* About section  */}
      <About />

      {/* Featured brands section  */}
      <FeaturedBrands/>

      {/* Toy Event section */}
      <ToyEvents/>

      {/* image gallery section  */}
      <ImgGallery />

      {/* our teams section  */}
      <OurTeam />
      
      {/* FAQ Section  */}
      <Faq></Faq>
    </>
  );
};

export default Home;
