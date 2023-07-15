import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import { FaUser } from "react-icons/fa";

const BestToys = () => {
  const [bestToys, setBestToys] = useState([]);

  const serverUrl = "https://assignment-11-toy-marketplace-server.vercel.app";
  const localhostUrl = "http://localhost:5000";

  // fetch toys
  useEffect(() => {
    const loadData = async () => {
      const response = await fetch(`${serverUrl}/all-toys`);
      const data = await response.json();
      setBestToys(data);
    };
    loadData();
  }, []);

  return (
    <div className="p-10 bg-black/10 backdrop-blur-md my-2 rounded-lg">
      <h2
        data-aos="zoom-in-down"
        className="text-3xl text-center text-secondary font-bold py-5 mt-3 "
      >
        Best Toys
      </h2>
      <div className="divider"></div>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {bestToys
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 6)
          .map((toy) => (
            <SwiperSlide key={toy._id}>
              <div data-aos="flip-up" className="card w-full p-2 bg-base-200 shadow-xl relative mb-10">
                <figure className="h-44 md:h-72 border border-b-4 border-primary">
                  <img
                    className="object-cover object-top w-full h-full"
                    src={toy.picture}
                    alt={toy.name}
                  />
                </figure>
                <div
                  className={`badge ${
                    toy.quantity > 0 ? "badge-secondary" : "badge-error"
                  } absolute top-0 right-0`}
                >
                  Quantity: {toy.quantity}
                </div>
                <div className="card-body p-2">
                  <h2 className="card-title text-secondary font-semibold uppercase tracking-widest">
                    {toy.name}
                  </h2>
                  <div className="divider my-1"></div>

                  <div className="flex gap-2 items-center text-xl">
                    <FaUser/>
                    <p>{toy.seller ? toy.seller : "Anonymous"}</p>
                  </div>
                  <div className="card-actions">
                    <div className="badge badge-outline badge-lg">Price: ${toy.price}</div>
                    <div className="badge badge-outline badge-lg">
                      <div className="flex items-center gap-2">
                        <Rating
                          style={{ maxWidth: 110 }}
                          value={toy.rating}
                          readOnly
                        />
                        {toy.rating}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default BestToys;
