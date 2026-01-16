import React from "react";
import { TfiEmail } from "react-icons/tfi";

const Newsletter = () => {
  return (
    <div className="bg-[#caa767] flex justify-center items-center p-15 mx-20 mt-15">
      <div className="bg-[#FCBC45] p-10 flex flex-col justify-center items-center rounded-lg ">
        <div className="bg-white w-16 h-16  items-center flex justify-center rounded-full">
          <span className="text-[#FCBC45] text-2xl">
            <TfiEmail />
          </span>
        </div>
        <h1 className="text-2xl  font-bold">Stay Updated with SocialLift Events</h1>
        <p>
          Subscribe to our newsletter and get notified about upcoming events,{" "}
          <br /> SocialLift initiatives, and impact stories delivered to your
          inbox.{" "}
        </p>
        {/* subscribe input */}
        <div className="mt-5">
          <div className="join">
            <div>
              <label className="input validator join-item">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input type="email" placeholder="mail@site.com" required />
              </label>
              <div className="validator-hint hidden">
                Enter valid email address
              </div>
            </div>
            <button className="btn btn-neutral join-item">Subscribe</button>
          </div>
        </div>
        < p className="text-[11px] mt-2">Join 5,000+ community members already subscribed</p>
      </div>
    </div>
  );
};

export default Newsletter;
