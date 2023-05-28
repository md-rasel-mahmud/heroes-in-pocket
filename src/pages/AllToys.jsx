import React, { useContext, useEffect, useState } from "react";
import Toast from "../components/SAToast";
import { Rating } from "@smastrom/react-rating";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const AllToys = () => {
  const [toysData, setToysData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [searchLoader, setSearchLoader] = useState(false);
  const [limit, setLimit] = useState(false);
  const [viewDetail, setViewDetail] = useState("");


  const serverUrl = "https://assignment-11-toy-marketplace-server.vercel.app";
  const localhostUrl = "http://localhost:5000";

  useEffect(() => {
    setLoader(true);
    const loadData = async () => {
      const response = await fetch(
        `${serverUrl}/all-toys${limit ? "" : "?limit=20"}`
      );
      const data = await response.json();
      setToysData(data);
      setLoader(false);
    };
    loadData().catch((err) => {
      Toast.fire({
        icon: "error",
        title: `Error: ${err.message}`,
      });
      setLoader(false);
    });
  }, [limit]);

  const handleSearch = (event) => {
    event.preventDefault();
    const searchField = event.target.search.value;

    // check is search field has valid value
    if (!searchField) {
      Toast.fire({ icon: "error", title: "Invalid Value!" });
      return;
    }
    setSearchLoader(true);
    setToysData([]);
    const loadData = async () => {
      const response = await fetch(
        `${serverUrl}/search-all-toys/${searchField}`
      );
      const data = await response.json();
      if (data.length <= 0) {
        Toast.fire({
          icon: "error",
          title: `Error: Search not match to "${searchField}" this keyword! `,
        });
        setSearchLoader(false);
        return;
      }
      setToysData(data);
      setSearchLoader(false);
    };
    loadData().catch((err) => console.log(err));
  };


  const {user} = useContext(AuthContext)

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
    <div>
      <Helmet>
        <title>All Toys | Heroes in pocket</title>
      </Helmet>
      <div className="flex flex-col lg:flex-row gap-3 items-center justify-around my-3 bg-black/25 backdrop-blur-md py-5 rounded-lg  font-bold uppercase drop-shadow-md">
        <h2 data-aos="fade-left" className="text-3xl">All Toys</h2>

        <div data-aos="fade-right" className="form-control rounded-lg">
          <form onSubmit={handleSearch} className="input-group ">
            <input
              name="search"
              type="text"
              placeholder="Search…"
              className="input input-bordered backdrop-blur-lg bg-transparent border-0"
            />
            {searchLoader ? (
              <button
                type="submit"
                className="btn btn-square btn-primary loading"
              ></button>
            ) : (
              <button type="submit" className="btn btn-square btn-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            )}
          </form>
        </div>
      </div>

      <div className="overflow-x-auto w-full ">
        {toysData.length != 0 && (
          <table data-aos="fade-down" className="table w-full">
            {/* head */}
            <thead className="text-primary">
              <tr>
                <th>#</th>
                <th>Toy Name</th>
                <th>Seller</th>
                <th>Sub Category</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th>Show Detail</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {toysData.map((toys, index) => (
                <tr key={toys._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          {toys?.picture && (
                            <img
                              src={toys?.picture}
                              alt="Avatar Tailwind CSS Component"
                            />
                          )}
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{toys.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="capitalize">{toys?.seller}</td>
                  <td className="capitalize">{toys.sub_category}</td>
                  <td>$ {toys.price}</td>
                  <td>{toys.quantity}</td>
                  <th>
                  <label
                      htmlFor="my-modal-5"
                      className="btn btn-secondary rounded-full btn-sm"
                      onClick={() => handleViewDetails(toys)}
                    >
                      view details
                    </label>
                  </th>
                </tr>
              ))}
            </tbody>
            {/* foot */}
            <tfoot>
              <tr>
                <th>#</th>
                <th>Toy Name</th>
                <th>Seller</th>
                <th>Sub Category</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th>Show Detail</th>
              </tr>
            </tfoot>
          </table>
        )}
        <div className="text-center bg-black/10 backdrop-blur-md py-5 my-1 rounded-lg">
          {loader ? (
            <button className="btn btn-primary loading rounded-full">
              loading
            </button>
          ) : (
            <button
              onClick={() => setLimit(!limit)}
              className="btn btn-primary rounded-full"
            >
              {limit ? "Show Less Toys" : "Show All Toys"}
            </button>
          )}
        </div>
      </div>

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
            <figure className="p-4 lg:p-0">
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
              {viewDetail?.description &&<p>
                <b>Description:</b> {viewDetail.description}
              </p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
