import React, { useRef, useEffect } from "react";
import "../styles/Header.css";

import headerImage from "../assets/project_2.png";

const Header = () => {
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const serviceArea = ["Gold Coasts", "Burleighs"];
  const el = useRef(null);

  const writeLoop = async () => {
    let curServiceAreaIndex = 0;

    while (true) {
      const curWord = serviceArea[curServiceAreaIndex];

      // Typing phase
      for (let i = 0; i <= curWord.length; i++) {
        if (el.current) {
          el.current.innerText = curWord.substring(0, i);
        }
        await sleep(100); // Adjust typing speed
      }

      await sleep(1500); // Pause after typing the word

      // Deleting phase
      for (let i = curWord.length; i >= 0; i--) {
        if (el.current) {
          el.current.innerText = curWord.substring(0, i);
        }
        await sleep(100); // Adjust deleting speed
      }

      await sleep(500); // Pause before starting the next word

      curServiceAreaIndex = (curServiceAreaIndex + 1) % serviceArea.length; // Move to the next word
    }
  };

  useEffect(() => {
    writeLoop();

    // Cleanup if needed (e.g., stopping the loop)
    return () => {
      // Optionally add logic here to stop the loop if needed
    };
  }, []);

  return (
    <div className="app__header suse-heading">
      <div className="app__header-contents">
        <h1 className="app__header-title">
          <span ref={el} className="typewriter"></span> <br />
          TV & Soundbar <br /> Mounting
        </h1>

        <p className="app__header-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          libero modi enim et facilis sint aliquid non, eaque delectus corrupti
          suscipit provident aperiam sed optio?
        </p>

        <a href="" className="app__header-button custom_button ">
          Contact Today
        </a>
      </div>

      <div className="app__header-image">
        <img src={headerImage} alt="Mounted Tv" />
      </div>
    </div>
  );
};

export default Header;
