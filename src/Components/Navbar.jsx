import React from "react";
import { BsUnity } from "react-icons/bs";
import { Link, NavLink } from "react-router";
//
const Navbar = () => {

  const links = <>
  <NavLink to="/">Home</NavLink>
  </>
  return (
<div className="navbar  bg-[#000000de] shadow-sm">
  <div className="navbar-start ">
 <div className="flex ml-4">
  <div className="mt-2 " >
    <span className="text-[#f3e3e3] text-4xl "> <BsUnity /> </span>
  </div>
 <div className=" ml-2">
     <a className=" text-2xl font-bold text-[#f3e3e3]">Social<span className="text-[#caa767]">Lift</span></a>
    <p className="text-[#f3e3e3] text-[10px]">Make World Happier</p>
 </div>
 </div>

  </div>
  <div className="navbar-center text-[#F0F0F0] ">
    <ul className="menu menu-horizontal px-1">
{links}
    </ul>
  </div>
  <div className="navbar-end">
    <Link to="/auth/login">
    <a className="btn bg-[#FCBC45]">Login</a>
    </Link>
    {/* user */}

    <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full bg-[#caa767] flex justify-center items-center text-white font-bold">
              U
            </div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-[#1a1a1a] rounded-box w-52 text-[#f0f0f0]"
          >
            <li>
              <a>Create Event</a>
            </li>
            <li>
              <a>Manage Event</a>
            </li>
            <li>
              <a>Join Event</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  
  


  );
};

export default Navbar;
