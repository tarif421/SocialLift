import React, { useContext } from "react";
import { BsUnity } from "react-icons/bs";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("Logged out");
      })
      .catch((err) => console.error(err));
  };

  const links = (
    <>
      <NavLink to="/" className="hover:text-[#FCBC45]">
        Home
      </NavLink>
      <NavLink to="/upcoming" className="hover:text-[#FCBC45]">
        Upcoming Events
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-[#000000de] shadow-sm px-4">
      
      {/* LEFT */}
      <div className="navbar-start">
        <div className="flex items-center">
          <span className="text-[#f3e3e3] text-4xl">
            <BsUnity />
          </span>
          <div className="ml-2">
            <h1 className="text-2xl font-bold text-[#f3e3e3]">
              Social<span className="text-[#caa767]">Lift</span>
            </h1>
            <p className="text-[10px] text-[#f3e3e3]">
              Make World Happier
            </p>
          </div>
        </div>
      </div>

      {/* CENTER */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-6 text-[#F0F0F0]">
          {links}
        </ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end gap-3">

        {/* 🔑 IF NOT LOGGED IN */}
        {!user && (
          <Link to="/auth/login">
            <button className="btn bg-[#FCBC45]">Login</button>
          </Link>
        )}

        {/* 👤 IF LOGGED IN */}
        {user && (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full bg-[#caa767] flex justify-center items-center text-white font-bold">
                {user.email?.charAt(0).toUpperCase()}
              </div>
            </label>

            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-[#1a1a1a] rounded-box w-52 text-[#f0f0f0]"
            >
              <li>
                <Link to="/create-event">Create Event</Link>
              </li>
              <li>
                <Link to="/manage-events">Manage Events</Link>
              </li>
              <li>
                <button onClick={handleLogout} className="text-red-400">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}

      </div>
    </div>
  );
};

export default Navbar;
