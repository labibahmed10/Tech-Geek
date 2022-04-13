import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../firebase.init";
import logo from "../../images/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [user] = useAuthState(auth);

  const logOut = () => {
    signOut(auth);
  };
  console.log(user?.email);

  return (
    <div
      className={`${
        pathname.includes("blog") ? "hidden" : "flex"
      } flex items-center justify-between px-10 bg-slate-50 shadow-xl py-2 sticky top-0 `}
    >
      <img onClick={() => navigate("/")} src={logo} alt="" />
      <div className="flex items-center space-x-8 font-semibold text-xl">
        <NavLink className={({ isActive }) => (isActive ? "text-[#1D6DA8]" : "text-blue-400")} to="/">
          Home
        </NavLink>

        <NavLink className={({ isActive }) => (isActive ? "text-[#1D6DA8]" : "text-blue-400")} to="/videos">
          Videos
        </NavLink>

        {user?.email ? (
          <NavLink
            onClick={logOut}
            className={({ isActive }) => (isActive ? "text-[#1D6DA8]" : "text-blue-400")}
            to="/login"
          >
            Log Out
          </NavLink>
        ) : (
          <NavLink className={({ isActive }) => (isActive ? "text-[#1D6DA8]" : "text-blue-400")} to="/login">
            Log in
          </NavLink>
        )}

        <div>
          <img className="w-7 object-cover bg-transparent" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
