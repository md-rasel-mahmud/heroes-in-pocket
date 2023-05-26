import React, { useContext, useEffect, useState } from "react";
import Toast from "../components/SAToast";
import { AuthContext } from "../providers/AuthProvider";
import { Rating } from "@smastrom/react-rating";
import Swal from "sweetalert2";
import { FaArrowRight } from "react-icons/fa";
import { Helmet } from "react-helmet";
import Spinner from "../components/Spinner";

const MyToys = () => {
  const [toysData, setToysData] = useState([]);
  const [notFoundToy, setNotFoundToy] = useState(false);
  const [getToyInfo, setGetToyInfo] = useState("");
  const [viewDetail, setViewDetail] = useState("");
  const [sortByPrice, setSortByPrice] = useState(1);
  const [loading, setLoading] = useState(false)

  const { user } = useContext(AuthContext);

  const serverUrl = "https://assignment-11-toy-marketplace-server.vercel.app";
  const localhostUrl = "http://localhost:5000";

  useEffect(() => {

    // fetch data
    const loadData = async () => {
      const response = await fetch(
        `${serverUrl}/my-toys?email=${user?.email}&sort=${sortByPrice}`
      );
      const data = await response.json();
      setNotFoundToy(false);
      if (data.length <= 0) {
        setNotFoundToy(true);
        return;
      }

      // setData in state
      setToysData(data);
    };
    loadData().catch((err) => {
      Toast.fire({
        icon: "error",
        title: `Error: ${err.message}`,
      });
    });
  }, [user?.email, toysData, viewDetail]);

  // update toy
  const handleToyUpdate = (event) => {
    event.preventDefault();

    const form = event.target;

    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const updateMyToy = {
      price,
      quantity,
      description,
    };

    fetch(`${serverUrl}/my-toys/${getToyInfo?._id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updateMyToy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Toast.fire({
            icon: "success",
            title: "Data Modified Successfully",
          });
          setGetToyInfo("");
          form.reset();
        }
      });
  };

  // delete toy
  const handleToyDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${serverUrl}/delete-my-toy/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setViewDetail("");
              setToysData("");
              Swal.fire("Deleted!", "Your Toy has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div>
      {loading && <Spinner/>}
      <Helmet>
        <title>My Toys | Heroes in pocket</title>
      </Helmet>
      <div className="flex flex-col lg:flex-row gap-3 items-center justify-around my-3 bg-black/25 backdrop-blur-md py-5 rounded-lg  font-bold uppercase drop-shadow-md">
        <h2 data-aos="fade-left" className="text-3xl">
          All Toys
        </h2>

        <div data-aos="fade-right" className="flex gap-2 rounded-lg">
          <button
            onClick={() => setSortByPrice(1)}
            className="flex gap-2 btn-sm rounded-full  items-center btn btn-primary"
          >
            Price - Low <FaArrowRight /> High
          </button>
          <button
            onClick={() => setSortByPrice(-1)}
            className="flex gap-2  btn-sm rounded-full items-center btn btn-primary"
          >
            Price - High <FaArrowRight /> Low
          </button>
        </div>
      </div>
      <div className="overflow-x-auto w-full ">
        {notFoundToy && (
          <h2 className="text-error text-3xl text-center bg-black/10 backdrop-blur-md py-3 rounded-lg">
            Toys Not Found! You don't Added Any toy.
          </h2>
        )}
        {toysData.length != 0 && (
          <table data-aos="fade-down" className="table w-full">
            {/* head */}
            <thead className="text-primary">
              <tr>
                <th>Delete</th>
                <th>Toy Name</th>
                <th>Seller</th>
                <th>Sub Category</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th>Update</th>
                <th>Show Detail</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {toysData.map((toys) => (
                <tr key={toys._id}>
                  <th>
                    <button
                      onClick={() => handleToyDelete(toys._id)}
                      className="btn btn-circle btn-error btn-sm"
                    >
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
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          {toys?.picture && (
                            <img src={toys?.picture} alt="Avatar" />
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
                  <td>${toys.price}</td>
                  <td>{toys.quantity}</td>
                  <th>
                    <label
                      htmlFor="my-modal-3"
                      className="btn btn-primary rounded-full btn-sm"
                      onClick={() => setGetToyInfo(toys)}
                    >
                      Update
                    </label>
                  </th>
                  <th>
                    <label
                      htmlFor="my-modal-5"
                      className="btn btn-secondary rounded-full btn-sm"
                      onClick={() => setViewDetail(toys)}
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
                <th>Delete</th>
                <th>Toy Name</th>
                <th>Seller</th>
                <th>Sub Category</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th>Update</th>
                <th>Show Detail</th>
              </tr>
            </tfoot>
          </table>
        )}
      </div>
      {/*Update toy Modal */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal bg-black/50 backdrop-blur-sm">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle btn-error absolute right-2 top-2"
          >
            ✕
          </label>

          <h3 className="text-lg font-bold text-secondary">
            Update your Toy Data.
          </h3>
          <div className="divider"></div>
          <form onSubmit={handleToyUpdate} className="py-5 flex gap-3 flex-col">
            <div className="form-control ">
              <label className="input-group">
                <span>Price</span>
                <input
                  type="text"
                  placeholder="$Price"
                  name="price"
                  defaultValue={getToyInfo.price}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control ">
              <label className="input-group">
                <span>Quantity</span>
                <input
                  type="text"
                  placeholder="Quantity"
                  name="quantity"
                  defaultValue={getToyInfo.quantity}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control ">
              <label className="input-group">
                <span>Description</span>
                <input
                  type="text"
                  placeholder="Description"
                  name="description"
                  defaultValue={getToyInfo.description}
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <button type="submit" className="btn btn-primary rounded-full mt-4">
              update
            </button>
          </form>
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
          <div className="card card-side bg-base-200 shadow-xl">
            <figure>
              {viewDetail?.picture && (
                <img src={viewDetail?.picture} alt="Toy Image" />
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
                  <b>Description:</b> {viewDetail.description}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
