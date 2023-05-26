import React from "react";
import logo from "../assets/logo.jpg";
import { FaCodepen, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer data-aos="fade-up" className="footer p-10 bg-black/10 backdrop-blur-md text-neutral-content mt-3 rounded-lg ">
        <div>
          <img className="w-32" src={logo} alt="log" />
          <p>
            GORIBER HEROS LTD.
            <br />
            Our mission to provide Heros on your Pocket
          </p>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            <Link
              target="_blank"
              to="https://facebook.com/MyselfRaselMahmud"
              className="text-2xl hover:text-primary"
            >
              <FaFacebook />
            </Link>
            <Link
              target="_blank"
              to="http://github.com/myself-rasel-mahmud"
              className="text-2xl hover:text-primary"
            >
              <FaGithub />
            </Link>
            <Link
              target="_blank"
              to="https://linkedin.com/in/myselfraselmahmud/"
              className="text-2xl hover:text-primary"
            >
              <FaLinkedin />
            </Link>
            <Link
              target="_blank"
              to="https://codepen.io/mdrmrana"
              className="text-2xl hover:text-primary"
            >
              <FaCodepen />
            </Link>
          </div>
        </div>
      </footer>
      <div  className="footer footer-center p-4 bg-black/10 backdrop-blur-md text-base-content my-3 rounded-lg ">
        <div>
          <p>Copyright © 2023 - All right reserved by GORIBER HEROS LTD.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
