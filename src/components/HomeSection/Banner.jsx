import React from "react";
import { Link } from "react-router-dom";


const Banner = () => {


  return (
    <div data-aos="fade-in" className="hero  min-h-[85vh] backdrop-blur-md bg-black/10 my-3 rounded-lg">
      <div className="hero-content text-center">
        <div data-aos="fade-up" className="max-w-lg" >
          <h1 className="text-5xl font-bold">Hi there!</h1>
          <p className="py-5">
            Ignite your imagination with the Super Hero Toy! Vibrant, detailed,
            and interactive, this toy brings superheroes to life. Pose, play,
            and embark on epic adventures. Safe and durable, it's perfect for
            action-packed fun. Unleash your hero within with the Super Hero Toy!
          </p>
          <Link to='/all-toys' className="btn btn-primary rounded-full">Get Started</Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
