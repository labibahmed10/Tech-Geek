import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between px-10 bg-slate-50 shadow-xl py-2 sticky top-0">
      <img onClick={() => navigate("/")} src={logo} alt="" />
      <div className="flex space-x-8 font-semibold text-xl">
        <Link to="/">Home</Link>
        <Link to="/videos">Videos</Link>
        <Link to="/login">Log in </Link>
      </div>
    </div>
  );
};

export default Navbar;
