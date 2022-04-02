import React from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import svg from "../../images/indicator.svg";

const BlogDetails = ({ blog }) => {
  console.log(blog);

  const { admin, story, imageName, imageURL, title } = blog;
  return (
    <div className="flex justify-between max-w-5xl mx-auto my-20">
      <div>
        <img className="w-2/3 mx-auto border-[#1D7BB2] border-4" src={imageURL} alt="" />
        <h2 className="text-center text-xl pt-2 text-[#1D7BB2]">{imageName}</h2>
      </div>
      <div className="w-1/2 text-[#2d7faf]">
        <h1 className="text-3xl">{title}</h1>
        <p className="flex items-center pt-2">
          <img className="pr-3" src={svg} alt=""></img>
          {admin}
        </p>
        <p className="pt-5">
          {story.length > 400 ? story.slice(0, 390) : story}...
          <Link className=" text-md font-semibold text-[#155479]" to={`blogdetail/${blog._id}`}>
            Read More
          </Link>
        </p>
      </div>
      {/* <Outlet></Outlet> */}
    </div>
  );
};

export default BlogDetails;
