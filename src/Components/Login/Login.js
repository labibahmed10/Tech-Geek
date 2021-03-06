import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthState, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error1, setError1] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  const handleEmailOfUser = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordOfUser = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    if (password.length < 8) {
      setError1("Password length is too short! Give atleast 8 digits.");
      return;
    } else {
      signInWithEmailAndPassword(email, password);
      setError1("");
    }
  };
  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div className=" h-[80vh] flex justify-center items-center ">
      <div className="border py-6 px-8 text-[#3a8cbb] shadow-xl w-96 h-auto">
        <h1 className="text-center pb-8 text-2xl">Login</h1>

        <form action="" onSubmit={handleSubmitForm}>
          <div className="mb-2">
            <label className="block pb-1" htmlFor="email">
              Email:
            </label>
            <input
              onBlur={handleEmailOfUser}
              className="border-2 rounded-md border-[#39a2df] px-5 py-2 w-full focus:outline-0"
              type="email"
              name="email"
              id="email"
              placeholder="Email here"
            />
          </div>
          <div className="mb-2">
            <label className="block pb-1" htmlFor="password">
              Password:
            </label>
            <input
              onBlur={handlePasswordOfUser}
              className="border-2 rounded-md border-[#39a2df] px-5 py-2 w-full focus:outline-0"
              type="password"
              name="password"
              id="pasword"
              placeholder="Type Password"
              autoComplete="false"
            />
            {<p className="text-red-500 text-xs pt-1">{error1 ? error1 : ""}</p>}
            {<p className="text-red-500 text-xs pt-1">{error ? error?.message : ""}</p>}
          </div>

          <button
            type="submit"
            className="block mt-8 w-full py-2
         px-4 bg-[#42a0d6] rounded-md text-white hover:bg-[#3a8cbb]"
          >
            Login
          </button>

          <p className="text-md my-2 text-gray-600 text-center">
            New to Tech Geeks?
            <Link className="underline text-[#39a2df] ml-1" to="/signup">
              Create an Account
            </Link>
          </p>

          <div className="flex cursor-pointer items-center justify-evenly py-3 mt-5 shadow-md bg-[#F8FAFC] border border-[#39a2df]">
            <img
              className="w-7 object-contain"
              src="https://developers.google.com/identity/images/g-logo.png"
              alt=""
            />
            <p>Sign In with Google</p>
          </div>
          <div className="flex cursor-pointer items-center justify-evenly py-3 mt-5 shadow-md bg-[#F8FAFC] border border-[#39a2df]">
            <img
              className="w-7 object-contain"
              src="https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19751.png"
              alt=""
            />
            <p>Sign In with Facebook</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
