import React, { useContext, useState } from "react";
import { useEffect } from "react";
import Spinner from "../../Spinner";
import { Rating } from "@smastrom/react-rating";
import { AuthContext } from "../../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Toast from "../../SAToast";

const ToyTab = ({setViewDetail}) => {
  const [loader, setLoader] = useState(false);
  const [categoryName, setCategoryName] = useState([]);
  const [toyByCategory, setToyByCategory] = useState([]);
  const [tabNameState, setTabNameState] = useState("all-toys");
  const [seeMore, setSeeMore] = useState(false);

  const serverUrl = "https://assignment-11-toy-marketplace-server.vercel.app";
  const localhostUrl = "http://localhost:5000";

  const {user} = useContext(AuthContext)

  // fetch tab items
  useEffect(() => {
    fetch(`${serverUrl}/toy-category-name`)
      .then((res) => res.json())
      .then((data) => setCategoryName(data));
  }, []);

  // fetch toys
  useEffect(() => {
    // spinner start
    setLoader(true);

    const loadData = async () => {
      const response = await fetch(`${serverUrl}/toy-category/${tabNameState}`);
      const data = await response.json();
      setToyByCategory(data);

      //spinner stop
      setLoader(false);
    };
    loadData();
  }, [tabNameState]);

  // click tab to load toys by category
  const handleTabName = async (toyName) => {
    setTabNameState(toyName);
  };

  const navigate = useNavigate()
  // click view detail button to check user 
  const handleViewDetails  = (toyInfo) => {
    if (user) {
      setViewDetail(toyInfo)
      return
    } else {
      Toast.fire({
      icon: 'error',
      title: 'You have to log in first to view details'

      })
      navigate('/login')
    }
  }

  return (
    <>
      <div  className="tabs bg-black/10 backdrop-blur-lg rounded-lg justify-center py-3 mt-5 ">
        <button
          onClick={() => setTabNameState("all-toys")}
          className={`tab tab-bordered capitalize ${
            tabNameState == "all-toys"
              ? "tab-active text-primary font-bold"
              : ""
          }`}
        >
          all toys
        </button>
        {categoryName.map((tabName, index) => (
          <button
            key={index + 1}
            onClick={() => handleTabName(tabName)}
            className={`outline-none tab tab-bordered capitalize ${
              tabName == tabNameState ? "tab-active text-primary font-bold" : ""
            }`}
          >
            {tabName}
          </button>
        ))}
      </div>
      <div className="divider"></div>
      {loader ? (
        <Spinner />
      ) : (
        <>
          <div  className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {toyByCategory
              .slice(0, seeMore ? toyByCategory.length : 6)
              .map((toy) => (
                <div
                  key={toy._id}
                  data-aos="flip-left"
                  className="card bg-black/25 backdrop-blur-lg shadow-xl"
                >
                  <div className="card-body">
                    <h2 className="card-title">{toy.name}</h2>
                    <p className="capitalize">Category: {toy.sub_category}</p>
                    <p className="capitalize">Price: ${toy.price}</p>
                    <div className="flex items-center gap-2">
                      <Rating
                        style={{ maxWidth: 110 }}
                        value={toy.rating}
                        readOnly
                      />{" "}
                      {toy.rating}
                    </div>
                    <div>
                      <label
                        htmlFor="my-modal-5"
                        className="btn btn-secondary rounded-full btn-sm"
                        // receive setViewDetail useState function and send data from setViewDetail function 
                        onClick={() => handleViewDetails(toy)}
                      >
                        view details
                      </label>
                    </div>
                  </div>
                  <figure>
                    {toy?.picture && <img src={toy?.picture} alt="Shoes" />}
                  </figure>
                </div>
              ))}
          </div>
          {
            <div onClick={() => setSeeMore(!seeMore)} className="text-center">
              <button className="btn btn-primary rounded-full mt-10">
                {seeMore ? "See Less" : "See more"}
              </button>
            </div>
          }
        </>
      )}


    </>
  );
};

export default ToyTab;
