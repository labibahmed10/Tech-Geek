import React from "react";

const Login = () => {
  return (
    <div className=" h-[80vh] flex justify-center items-center ">
      <div className="border-2  py-14 px-8 text-[#3a8cbb] shadow-lg w-80 h-96">
        <h1 className="text-center pb-10 text-2xl ">Login</h1>

        <div className="pb-6">
          <label className="block pb-1" htmlFor="email">
            Email:
          </label>
          <input
            className="border-2 rounded-md border-[#39a2df] px-5 py-2 w-full"
            type="email"
            name="email"
            id="email"
            placeholder="Email here"
            required
          />
        </div>
        <div>
          <label className="block pb-1" htmlFor="password">
            Password:
          </label>
          <input
            className="border-2 rounded-md border-[#39a2df] px-5 py-2 w-full "
            type="password"
            name="password"
            id="pasword"
            placeholder="Type Password"
            required
          />
        </div>
        <button
          className="block mt-8 ml-auto py-2
         px-4 bg-[#42a0d6] rounded-md text-white hover:bg-[#3a8cbb]"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
