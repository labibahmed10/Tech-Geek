import React, { useContext, useEffect } from "react";
import { BlogContext } from "../../App";
import BlogDetails from "../BlogDetails/BlogDetails";

const Home = () => {
  // const [blogs, setBlogs] = useState([]);

  const [blogs, setBlogs] = useContext(BlogContext); //context used for the first time

  useEffect(() => {
    fetch("blogs.json")
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
