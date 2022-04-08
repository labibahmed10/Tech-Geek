import React, { useState } from "react";
import { Link } from "react-router-dom";
import app from "../../firebase.init";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const auth = getAuth(app);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [error2, setError2] = useState("");

  const handleEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePassword = (event) => {
    const value = event.target.value;
    if (!/(?=.*?[A-Z0-9])/.test(value)) {
      setError("Password must contain a number and uppercase letter");
    } else {
      setError("");
    }
    setPassword(value);
  };

  const handleConfirmPassword = (event) => {
    const value = event.target.value;

    if (password !== value) {
      setError2("password confirmation required");
    } else {
      setError2("");
    }
    setConfirmPassword(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email && !password) {
    }
  };

  const handleGoogleSignin = () => {
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(auth, googleProvider)
      .then((res) => console.log(res.user))
      .catch((error) => console.log(error.message));
  };

  return (
    <div className=" h-[80vh] flex justify-center items-center ">
      <div className="border py-6 px-8 text-[#3a8cbb] shadow-xl w-96 h-auto">
        <h1 className="text-center pb-10 text-2xl ">Login</h1>

        <form action="" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="block pb-1" htmlFor="email">
              Email:
            </label>
            <input
              onChange={handleEmail}
              className="border-2 rounded-md border-[#39a2df] px-5 py-2 w-full focus:outline-0"
              type="email"
              name="email"
              id="email"
              placeholder="Email here"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block pb-1" htmlFor="password">
              Password:
            </label>
            <input
              onChange={handlePassword}
              className="border-2 rounded-md border-[#39a2df] px-5 py-2 w-full focus:outline-0"
              type="password"
              name="password"
              id="pasword"
              placeholder="Type Password"
              required
            />
            {password && <p className="text-red-500 text-xs pt-1">{error}</p>}
          </div>
          <div className="mb-2">
            <label className="block pb-1" htmlFor="password">
              Confirm Password:
            </label>
            <input
              onChange={handleConfirmPassword}
              className="border-2 rounded-md border-[#39a2df] px-5 py-2 w-full focus:outline-0"
              type="password"
              name="password"
              id="pasword"
              placeholder="Confirm Password"
              required
            />
          </div>
          {password && <p className="text-red-500 text-xs pt-1">{error2}</p>}
          <button
            className="block mt-8 w-full py-2
         px-4 bg-[#42a0d6] rounded-md text-white hover:bg-[#3a8cbb]"
          >
            Login
          </button>

          <p className="text-sm my-2 text-gray-600">
            New to Tech Geeks?
            <Link className="underline text-[#39a2df]" to="/">
              Create an Account
            </Link>
          </p>

          <div
            onClick={handleGoogleSignin}
            className="flex cursor-pointer items-center justify-evenly py-3 mt-5 shadow-md bg-[#F8FAFC] border border-[#39a2df]"
          >
            <img
              className="w-7 object-contain"
              src="https://developers.google.com/identity/images/g-logo.png"
              alt=""
            />
            <p>Sign In with Google</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
