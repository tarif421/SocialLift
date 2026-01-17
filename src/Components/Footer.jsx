import React from "react";
import { BsUnity } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { ImPinterest2 } from "react-icons/im";
import { IoCallSharp } from "react-icons/io5";
import { LiaFacebook } from "react-icons/lia";
import { MdEmail } from "react-icons/md";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer sm:footer-horizontal bg-[#000000de]  p-10 text-[#f3e3e3]">
          <nav >
            <div className="flex ">
              <div className="mt-1.5" >
                <span className="text-[#f3e3e3] text-2xl "> <BsUnity /> </span>
              </div>
             <div className=" ml-2">
                 <a className=" text-2xl font-bold text-[#f3e3e3]">Social<span className="text-[#caa767]">Lift</span></a>
              
             </div>
             </div>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Events</a>
            <a className="link link-hover">Private Policy</a>
          </nav>
          <nav >
            <h6 className="text-[#f3e3e3] text-2xl font-semibold ">Contact</h6>
           <div className="flex gap-2 ">
            <span><FaLocationDot /></span>
            <p>Dhaka, Bangladesh</p>
           </div>
           <div className="flex gap-2 ">
            <MdEmail />
            <p>socilalift@gmail.com</p>
           </div>
           <div className="flex gap-2 ">
            <IoCallSharp />
            <p>+880123837940</p>
           </div>
          </nav>

          <nav>
            <h2 className="text-2xl font-semibold">Social</h2>
            <div className="flex gap-6 text-5xl">
              <p>
                <FaInstagram />
              </p>
              <p>
                <LiaFacebook />
              </p>
              <p >
                X
              </p>
              <p><TiSocialLinkedinCircular /></p>
            </div>
          </nav>
        </div>

        <p className="text-center items-center sm:footer-horizontal bg-[#000000de] text-[#f3e3e3] p-3">
          © 2026 SocialLift. All rights reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
 