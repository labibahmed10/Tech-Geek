import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import userpic from "../../images/user.png";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../../firebase.init";
const auth = getAuth(app);

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser("");
        // User is signed out
        // ...
      }
    });
  }, []);

  const signOutId = () => {
    signOut(auth);
  };

  // console.log(user);

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
            onClick={signOutId}
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
          <img
            className="w-7 object-cover bg-transparent"
            src={user?.photoURL ? user.photoURL : userpic}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
