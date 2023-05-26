import React, { useContext } from "react";
import loginImg from "../assets/Login.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";
import { Helmet } from "react-helmet";

const Login = () => {

  const {loginWithEmailPass, loginWithGooglePopup} = useContext(AuthContext)

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const handleLoginData = (event) => {
    event.preventDefault()

    const form = event.target;
    
    const email = form.email.value;
    const password = form.password.value

    loginWithEmailPass(email, password)
    .then((result) => {
      const user = result.user
      
      navigate(from)
    })

    console.log(email, password);
  }

  const handleGoogleLogin = () => {
    loginWithGooglePopup()
    .then((result) => {
      const user = result.user;
      navigate(from)
    })
  }

  return (
    <div className="hero min-h-[85vh] my-2 rounded-lg bg-black/10 backdrop-blur-md">
      <Helmet>
        <title>Login | Heroes in pocket</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <img className="w-3/5 mx-auto" src={loginImg} alt="" />
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="card flex-shrink-0 w-full max-w-sm ">
          <form onSubmit={handleLoginData} className="card-body p-0 lg:pl-5">
            <h1 className="text-4xl font-bold text-secondary drop-shadow-lg">Login Here!</h1>
            <div className="divider !my-0"></div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="input rounded-full input-bordered bg-transparent backdrop-blur-sm"
              />
            </div>
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
              <label className="label">
                Don't have an account?
                <Link
                  to="/registration"
                  className="label-text text-secondary link link-hover"
                >
                  Register Here.
                </Link>
              </label>
            </div>
            <div className="form-control gap-3">
              <button type="submit" className="btn btn-primary rounded-full">Login</button>
              <div className="divider">OR</div>
              <button onClick={handleGoogleLogin} type="button" className="btn btn-secondary btn-sm capitalize rounded-full btn-outline">
                <FaGoogle className="mr-2" /> Login with google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
