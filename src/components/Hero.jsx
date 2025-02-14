import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 justify-center">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Virtual build{" "}
        <span className="bg-gradient-to-r from-orange-500 to-red-800 bg-clip-text text-transparent">
          for developers
        </span>
      </h1>

      <p className="my-10 text-neutral-500 text-center max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>

      <div className="flex items-center space-x-6">
        <a
          href="#"
          className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
        >
          Start for free
        </a>
        <a href="#" className=" py-2 px-3 rounded-md border">
          Documentation
        </a>
      </div>

      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support video tag.
        </video>
      </div>
    </div>
  );
};

export default Hero;
