import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const navItems = (
    <>
      <li>
        <Link className="drop-shadow-sm" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="drop-shadow-sm" to="/all-toys">
          All Toys
        </Link>
      </li>
      {user && (
        <>
          <li>
            <Link className="drop-shadow-sm" to="/my-toys">
              My Toys
            </Link>
          </li>
          <li>
            <Link className="drop-shadow-sm" to="/add-toy">
              Add A Toy
            </Link>
          </li>
        </>
      )}
      <li>
        <Link className="drop-shadow-sm" to="/blog">
          Blogs
        </Link>
      </li>
    </>
  );

  return (
    <div
      className="navbar rounded-lg sticky top-0 z-50 bg-black/25 backdrop-blur-md shadow-md"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-800 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="flex items-center gap-2 uppercase text-xl">
          <img className="h-10 rounded-lg" src={logo} alt="Logo" /> Goriber
          Heros
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end flex-col lg:flex-row items-end lg:items-center gap-1">
        <div className="dropdown flex items-center dropdown-end">
          {user ? (
            user?.photoURL ? (
              <button
                className="btn btn-primary btn-sm btn-circle tooltip tooltip-bottom"
                data-tip={user?.displayName}
              >
                <img
                  className="rounded-full"
                  src={user.photoURL}
                  alt="User Image"
                />
              </button>
            ) : (
              <label
                tabIndex={0}
                className="btn btn-outline btn-primary btn-circle btn-sm avatar"
              >
                <div className="rounded-full">
                  <FaUser className="text-xl" />
                </div>
              </label>
            )
          ) : (
            ""
          )}
        </div>

        {user ? (
          <button
            onClick={logoutUser}
            className="btn btn-sm btn-error lg:mr-1 rounded-full"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="btn btn-sm btn-primary lg:mr-1 rounded-full"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
