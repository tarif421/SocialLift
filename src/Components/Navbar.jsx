import React from "react";
import { Link, NavLink } from "react-router";
//
const Navbar = () => {

  const links = <>
  <NavLink to="/">Home</NavLink>
  </>
  return (
<div className="navbar  bg-[#000000de] shadow-sm">
  <div className="navbar-start ">
 
 <div className=" ml-4">
     <a className=" text-2xl text-[#f3e3e3]">Social<span className="text-[#caa767]">Lift</span></a>
    <p className="text-[#f3e3e3] text-[10px]">Make World Happier</p>
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
  </div>
</div>
  );
};

export default Navbar;
