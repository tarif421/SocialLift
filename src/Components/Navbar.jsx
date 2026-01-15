import React from "react";
//
const Navbar = () => {
  return (
<div className="navbar  bg-[#000000] shadow-sm">
  <div className="navbar-start ">
 
 <div className=" ml-4">
     <a className=" text-2xl text-[#f3e3e3]">Social<span className="text-[#caa767]">Lift</span></a>
    <p className="text-[#f3e3e3] text-[10px]">Make World Happier</p>
 </div>
  </div>
  <div className="navbar-center  ">
    <ul className="menu menu-horizontal px-1">
   
      <li className="text-[#F0F0F0]"><a>Upcoming Events</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-[#FCBC45]">Login</a>
  </div>
</div>
  );
};

export default Navbar;
