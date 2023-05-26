import React from "react";
import errorImg from "../assets/404error.png";
import { Link, useRouteError } from "react-router-dom";
import { Helmet } from "react-helmet";
const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="bg-white text-center flex flex-col items-center justify-center h-screen">
      <Helmet>
        <title>Heroes in pocket</title>
      </Helmet>
      <img className="w-1/5" src={errorImg} alt="Error image" />
      <h2 className="text-3xl text-error">
        {error.status} {error.statusText}
      </h2>
      <h3 className="text-xl text-error">{error.data}</h3>
      <Link to="/" className="btn btn-primary btn-sm rounded-full mt-5">
        Back To Home
      </Link>
    </div>
  );
};

export default Error;
