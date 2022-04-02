import React, { useEffect, useState } from "react";
import BlogDetails from "../BlogDetails/BlogDetails";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("Blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  console.log(blogs);
  return (
    <div>
      {blogs.map((blog) => (
        <BlogDetails key={blog._id} blog={blog}></BlogDetails>
      ))}
    </div>
  );
};

export default Home;
