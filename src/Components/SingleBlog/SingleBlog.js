import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { IoMdArrowRoundBack } from "react-icons/io";
import { BlogContext } from "../../App";

const SingleBlog = () => {
  const { blogid } = useParams();
  const [blogs, setBlogs] = useContext(BlogContext);

  const singleblog = blogs?.find((item) => item?._id === blogid);
  const { imageURL, story, title, imageName } = singleblog;

  return (
    <div>
      <div className="h-64 text-[#2d7faf] bg-gradient-to-r from-sky-900 to-sky-600">
        <Link className="ml-5 py-4 text-white text-2xl flex items-center w-24" to="/">
          <IoMdArrowRoundBack className="pr-1 text-3xl"></IoMdArrowRoundBack> Back
        </Link>
        <img className="mx-auto mt-12 w-96 border-4 border-slate-500" src={imageURL} alt="" />
        <p className="text-center pt-5 text-xl font-semibold">{imageName}</p>

        <h2 className="text-center py-4 text-2xl font-semibold">{title}</h2>

        <p className="w-3/4 mx-auto font-semibold">{story}</p>
      </div>
    </div>
  );
};

export default SingleBlog;
