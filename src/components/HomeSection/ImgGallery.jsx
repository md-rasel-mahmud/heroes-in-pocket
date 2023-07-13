import React, { useEffect, useState } from "react";
import Toast from "../SAToast";
import Spinner from "../Spinner";

const ImgGallery = () => {
  const [toyImg, setToyImg] = useState([]);
  const [loader, setLoader] = useState(false);
  const serverUrl = "https://assignment-11-toy-marketplace-server.vercel.app";
  const localhostUrl = "http://localhost:5000";

  useEffect(() => {
    setLoader(true);
    const loadData = async () => {
      const response = await fetch(`${serverUrl}/all-toys?limit=10"}`);
      const data = await response.json();
      setToyImg(data);
      setLoader(false);
    };
    loadData().catch((err) => {
      Toast.fire({
        icon: "error",
        title: `Error: ${err.message}`,
      });
      setLoader(false);
    });
  }, []);

  return (
    <div className="bg-black/10 backdrop-blur-md rounded-lg">
      <h2 data-aos="zoom-in-down" className="text-3xl text-center text-secondary font-bold py-5 mt-3 ">IMAGE GALLERY</h2>
      {loader && <Spinner />}
      <div className="divider"></div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 p-5 rounded-lg">
        {toyImg.slice(4, 10).map((img) => (
          <div data-aos="zoom-out" key={img._id} className="h-fit group overflow-hidden rounded-lg">
            <div className="relative rounded-lg h-44 md:h-72">
              <img className=" object-cover object-top w-full h-full" src={img.picture} alt="" />
              <div className="absolute h-full w-full bg-black/25  flex items-end justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-primary text-center font-bold py-4 bg-white/60 drop-shadow-sm backdrop-blur-sm h-fit w-full">
                  {img.name}{" "}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImgGallery;
