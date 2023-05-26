import React, { useContext } from "react";
import loginImg from "../assets/Login.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Toast from "../components/SAToast";
import { Helmet } from "react-helmet";

const Registration = () => {
  const { registerWithEmailPass, updateRegister } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleRegisterData = (event) => {
    event.preventDefault();

    const form = event.target;

    const displayName = form.displayName.value;
    const email = form.email.value;
    const photoURL = form.photoUrl.value;
    const password = form.password.value;
    const confirmPass = form.confirmPass.value;

    if (password.length < 6 && confirmPass.length < 6) {
      Toast.fire({
        icon: "error",
        title: "Password should be minimum 6 character!",
      });
      return;
    }
    if (password !== confirmPass) {
      Toast.fire({
        icon: "error",
        title: "Password not match!",
      });
      return;
    }

    registerWithEmailPass(email, password)
      .then(() => {
        updateRegister(displayName, photoURL).then(() => {
          Toast.fire({
            icon: "success",
            title: "User Created Successful",
          });

          form.reset();
          navigate("/");
        });
      })
      .catch((err) => {
        Toast.fire({
          icon: "error",
          title: `Error: ${err.message}`,
        });
      });
  };

  return (
    <div className="hero min-h-[85vh] my-2 rounded-lg bg-black/10 backdrop-blur-md">
      <Helmet>
        <title>Registration | Heroes in pocket</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <img className="w-3/5 mx-auto" src={loginImg} alt="" />
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="card flex-shrink-0 w-full max-w-sm ">
          <form onSubmit={handleRegisterData} className="card-body p-0 lg:pl-5">
            <h1 className="text-4xl font-bold text-secondary drop-shadow-lg">
              Register Here!
            </h1>
            <div className="divider !my-0"></div>

            <div className="grid lg:gap-2 grid-cols-1 lg:grid-cols-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="displayName"
                  className="input rounded-full input-bordered bg-transparent backdrop-blur-sm"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="input rounded-full input-bordered bg-transparent backdrop-blur-sm"
                />
              </div>
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

            <div className="grid lg:gap-2 grid-cols-1 lg:grid-cols-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="input rounded-full input-bordered bg-transparent backdrop-blur-sm"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPass"
                  className="input rounded-full input-bordered bg-transparent backdrop-blur-sm"
                />
              </div>
            </div>

            <label className="label">
              Already have an account?
              <Link
                to="/login"
                className="label-text text-secondary link link-hover"
              >
                Login Here.
              </Link>
            </label>

            <div className="form-control gap-3">
              <button type="submit" className="btn btn-primary rounded-full">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
