import React from "react";
import aboutImg from '../../assets/about.png'
import { Link } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa'

const About = () => {
  return (
    <div className="bg-black/10 backdrop-blur-md my-5 rounded-lg">
      <div className="hero min-h-[80vh]">
        <div className="hero-content flex-col max-w-screen-lg mx-auto lg:flex-row-reverse">
          <img
            src={aboutImg}
            data-aos="fade-right"
            className="lg:max-w-sm max-w-full rounded-lg "
          />
          <div data-aos="fade-left">
            <h1 className="text-5xl font-bold text-secondary">ABOUT US!</h1>
            <p className="py-6">
            Discover an action-packed world of adventure at our toy website. Find the hottest action figures, vehicles, and playsets to ignite your imagination. Join our community of enthusiasts and unleash your inner hero. Get ready for endless excitement with the best action toys in town!
            </p>
            <Link to='/blog' className="btn btn-primary rounded-full">Read Blog <FaArrowRight className="ml-2"/></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
