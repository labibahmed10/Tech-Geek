import React, { useEffect, useState } from "react";
import BlogDetails from "../BlogDetails/BlogDetails";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://retro-tech-talks.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      {blogs.map((item) => (
        <BlogDetails key={item._id} item={item}></BlogDetails>
      ))}
    </div>
  );
};

export default Home;
