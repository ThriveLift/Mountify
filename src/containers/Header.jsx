import React, { useRef, useEffect } from "react";
import "../styles/Header.css";

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
    let isCancelled = false;

    const startWriting = async () => {
      if (!isCancelled) {
        await writeLoop();
      }
    };

    startWriting();

    return () => {
      isCancelled = true; // This stops the loop when the component unmounts or re-renders
    };
  }, []);

  return (
    <div className="mountify__header">
      <div className="mountify__header-contents">
        <h1 className="app__header-title suse">
          <span ref={el} className="typewriter"></span> <br />
          TV & Soundbar Mounting
        </h1>
        <div className="custom_button">Free Quote</div>
      </div>

      <div className="mountify__header-projects">
        <div className="mountify__header-project_card">Project 1</div>
        <div className="mountify__header-project_card">Project 2</div>
        <div className="mountify__header-project_card">Project 3</div>
        <div className="mountify__header-project_card">Project 4</div>
        {/* Add more cards as needed */}
      </div>
    </div>
  );
};

export default Header;
