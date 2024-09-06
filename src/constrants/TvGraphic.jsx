import React, { useState, useEffect } from "react";
import "./TvGraphic.css";

import tvImg from "../assets/tv-graphic.png";
import tvMountImg from "../assets/mount-graphic.png";

import backgroundShape from "../assets/background_shape.png";

const TvGraphic = () => {
  // State to control when to apply the animation classes
  const [animationClasses, setAnimationClasses] = useState({
    tv: "",
    mount: "",
  });

  useEffect(() => {
    // Main delay for starting the animations
    const mainDelay = 1000; // 1 second delay before starting animations

    // Add the mount animation class after main delay + mount-specific delay
    const mountDelay = 500; // 2 seconds delay after the main delay
    const mountTimeout = setTimeout(() => {
      setAnimationClasses((prevState) => ({
        ...prevState,
        mount: "mountify__tvGraphic--Mount",
      }));
    }, mainDelay + mountDelay);

    // Add the TV animation class after mount delay + TV-specific delay
    const tvDelay = 225; // 2.5 seconds delay after the mount starts
    const tvTimeout = setTimeout(() => {
      setAnimationClasses((prevState) => ({
        ...prevState,
        tv: "mountify__tvGraphic--TV",
      }));
    }, mainDelay + mountDelay + tvDelay);

    // Clear the timeouts on cleanup
    return () => {
      clearTimeout(mountTimeout);
      clearTimeout(tvTimeout);
    };
  }, []);

  return (
    <>
      <div className="mountify__tvGraphic">
        <img
          className={`mountify__tvGraphic--image ${animationClasses.tv}`}
          src={tvImg}
          alt="TV-Graphic"
        />
        <img src={backgroundShape} className="backgroundShape" alt="" />
        <img
          className={`mountify__tvGraphic--image ${animationClasses.mount}`}
          src={tvMountImg}
          alt="TV_Mount-Graphic"
        />
      </div>
    </>
  );
};

export default TvGraphic;
