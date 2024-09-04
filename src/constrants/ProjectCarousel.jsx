import React, { useRef, useEffect, useState } from "react";
import projects from "./index";

const ProjectCarousel = () => {
  const carouselRef = useRef(null);
  const [specialIndex, setSpecialIndex] = useState(0);

  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = () => {
      if (carouselRef.current) {
        const carouselWidth = carouselRef.current.offsetWidth;
        const projectWidth = carouselRef.current.children[0].offsetWidth;
        const margin = 24; // Adjust according to your margin
        const scrollAmount = projectWidth + margin;

        // Calculate the index of the project card that should have the special class
        const scrollPosition = carouselRef.current.scrollLeft;
        const visibleIndex = Math.round(scrollPosition / scrollAmount);

        if (visibleIndex !== specialIndex) {
          setSpecialIndex(visibleIndex);
        }
      }
    };

    const carouselElement = carouselRef.current;

    if (carouselElement) {
      // Attach scroll event listener
      carouselElement.addEventListener("scroll", handleScroll);

      // Initial check
      handleScroll();
    }

    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, [specialIndex]);

  useEffect(() => {
    // Automatically scroll the carousel on load
    const scrollToPosition = () => {
      if (carouselRef.current) {
        const carouselWidth = carouselRef.current.offsetWidth;
        const scrollAmount = carouselWidth * 0.4; // Scroll 10% of the carousel width
        carouselRef.current.scrollTo({
          left: scrollAmount,
          behavior: "smooth", // Smooth scroll effect
        });
      }
    };

    // Delay the scroll action to ensure the component is fully rendered
    const timer = setTimeout(scrollToPosition, 1000); // Delay for 1 second

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, []);

  return (
    <div className="mountify__header-projects" ref={carouselRef}>
      {projects.map((project, index) => (
        <div
          key={index}
          className={`mountify__header-project_card ${
            specialIndex === index ? "special" : ""
          }`}
        >
          <img
            className="mountify__header-project_card-image"
            src={project.imgSrc}
            alt={project.title}
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectCarousel;
