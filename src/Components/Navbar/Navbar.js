import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div
      className={`${
        pathname.includes("blog") ? "hidden" : "flex"
      } flex items-center justify-between px-10 bg-slate-50 shadow-xl py-2 sticky top-0 `}
    >
      <img onClick={() => navigate("/")} src={logo} alt="" />
      <div className="flex space-x-8 font-semibold text-xl">
        <NavLink className={({ isActive }) => (isActive ? "text-[#1D6DA8]" : "text-blue-400")} to="/">
          Home
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "text-[#1D6DA8]" : "text-blue-400")} to="/videos">
          Videos
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "text-[#1D6DA8]" : "text-blue-400")} to="/login">
          Log in{" "}
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
