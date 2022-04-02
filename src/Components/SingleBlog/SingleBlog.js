import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleBlog = () => {
  const blogid = useParams();

  const [singleBlog, setSingleBlog] = useState([]);

  useEffect(() => {
    fetch(`https://retro-tech-talks.herokuapp.com/getBlog/${blogid}`)
      .then((res) => res.json())
      .then((data) => setSingleBlog(data));
  }, [blogid]);

  const { admin, story, imageName, imageURL, title } = singleBlog;
  return (
    <div>
      <div className="py-20 bg-sky-800">
        <h1>{admin}</h1>
      </div>
    </div>
  );
};

export default SingleBlog;
