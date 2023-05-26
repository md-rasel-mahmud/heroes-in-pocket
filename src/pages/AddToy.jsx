import React, { useContext, useState } from "react";
import uploadImg from "../assets/upload-item.png";
import Toast from "../components/SAToast";
import { AuthContext } from "../providers/AuthProvider";
import { Helmet } from "react-helmet";
import Spinner from "../components/Spinner";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  // api url
  const serverUrl = "https://assignment-11-toy-marketplace-server.vercel.app";
  const localhostUrl = "http://localhost:5000";

  const handleAddToy = (event) => {
    event.preventDefault();

    const form = event.target;

    // select input field
    const name = form.toyName.value;
    const seller = form.sellerName.value;
    const email = form.sellerEmail.value;
    const quantity = form.quantity.value;
    const sub_category = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const picture = form.photoUrl.value;
    const description = form.description.value;

    const addedToyInfo = {
      name,
      seller,
      email,
      quantity,
      sub_category,
      price,
      rating,
      picture,
      description,
    };

    setLoading(true);

    fetch(`${serverUrl}/add-toy`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(addedToyInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        // tost message
        if (data.insertedId.length >= 0) {
          Toast.fire({
            icon: "success",
            title: "Toy Added successfully",
          });

          // form reset
          form.reset();
          setLoading(false);
        }
      })
      .catch((err) => {
        Toast.fire({
          icon: "error",
          title: `Error: ${err.message}`,
        });
      });
  };

  return (
    <>
      <Helmet>
        <title>Add Toy | Heroes in pocket</title>
      </Helmet>
      {loading && <Spinner />}
      <div className="hero min-h-[85vh] my-2 rounded-lg bg-black/10 backdrop-blur-md">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img className="w-3/5 mx-auto" src={uploadImg} alt="" />
          </div>
          <div className="divider divider-horizontal"></div>

          <div
            data-aos="zoom-in"
            className="card flex-shrink-0 w-full max-w-xl "
          >
            <form onSubmit={handleAddToy} className="card-body p-0 lg:pl-5">
              <h1 className="text-4xl font-bold text-secondary drop-shadow-lg">
                Add A Toy
              </h1>
              <div className="divider !my-0"></div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Toy Name</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="toyName"
                    placeholder="Toy Name"
                    className="input rounded-full input-bordered bg-transparent backdrop-blur-sm"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Seller Name</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={user?.displayName}
                    placeholder="Seller Name"
                    name="sellerName"
                    className="input rounded-full input-bordered bg-transparent backdrop-blur-sm"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Seller Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Seller Email"
                    name="sellerEmail"
                    defaultValue={user?.email}
                    readOnly
                    className="input rounded-full input-bordered bg-transparent backdrop-blur-sm"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Available Quantity</span>
                  </label>
                  <input
                    type="text"
                    name="quantity"
                    placeholder="Available Quantity"
                    className="input rounded-full input-bordered bg-transparent backdrop-blur-sm"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Sub Category</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Sub Category"
                    name="subCategory"
                    className="input rounded-full input-bordered bg-transparent backdrop-blur-sm"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Price"
                    name="price"
                    className="input rounded-full input-bordered bg-transparent backdrop-blur-sm"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Rating</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Rating"
                    name="rating"
                    className="input rounded-full input-bordered bg-transparent backdrop-blur-sm"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo Url</span>
                  </label>
                  <input
                    type="url"
                    placeholder="Photo Url"
                    name="photoUrl"
                    className="input rounded-full input-bordered bg-transparent backdrop-blur-sm"
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Detail Description</span>
                </label>
                <input
                  type="text"
                  placeholder="Detail Description"
                  name="description"
                  className="input rounded-full input-bordered bg-transparent backdrop-blur-sm"
                />
              </div>
              <div className="form-control mt-5 gap-3">
                <button type="submit" className="btn btn-primary rounded-full">
                  Add Toy
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToy;
