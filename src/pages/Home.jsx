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

const Home = () => {
  const [viewDetail, setViewDetail] = useState("");


  return (
    <>
      <Helmet>
        <title>Heroes in pocket</title>
      </Helmet>
      <Banner />

      {/* ShopByCategory section  */}

      {/* send setViewDetail function to ShopByCategory for receive click view detail button to show mosal  */}
      <ShopByCategory setViewDetail={setViewDetail} />

      {/* View detail modal */}
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal bg-black/50 backdrop-blur-sm">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg">Toy Detail</h3>

            <div className="modal-action m-0 ">
              <label
                htmlFor="my-modal-5"
                className="btn btn-sm btn-error btn-circle"
              >
                ✕
              </label>
            </div>
          </div>
          <div className="divider"></div>
          <div className="card card-side flex-col lg:flex-row bg-base-200 shadow-xl">
            <figure>
              {viewDetail?.picture && (
                <img src={viewDetail?.picture} className="rounded" alt="Toy Image" />
              )}
            </figure>
            <div className="card-body">
              <h2 className="card-title text-primary">
                Toy Name: {viewDetail.name}
              </h2>
              <p>
                <b>Seller Name:</b> {viewDetail.seller}
              </p>
              <p>
                <b>Seller Email:</b> {viewDetail.email}
              </p>
              <p>
                <b>Price:</b> ${viewDetail.price}
              </p>
              <div className="flex items-center gap-2">
                <Rating
                  style={{ maxWidth: 110 }}
                  value={viewDetail.rating}
                  readOnly
                />{" "}
                {viewDetail.rating}
              </div>
              <p>
                <b>Available Quantity:</b> {viewDetail.quantity}
              </p>
              {viewDetail?.description && (
                <p>
                  <b>Description:</b> {viewDetail?.description}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* About section  */}
      <About />

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
