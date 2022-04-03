import React from "react";

const Videos = () => {
  return (
    <div className="text-[#2d7faf]">
      <h1 className="text-center py-6 text-4xl font-semibold"> This is the latest Iphone 13 pro</h1>
      <p className="text-center pb-16 text-xl">
        Iphone 13 just got release.Here is what you need to know about the new Phone
      </p>
      <iframe
        className="mx-auto"
        width="880"
        height="610"
        src="https://www.youtube.com/embed/XKfgdkcIUxw"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Videos;
