import React, { useRef, useEffect, useState } from "react";
import projects from "./index";
import "./ProjectCarousel.css";

const ProjectCarousel = () => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Scroll handler to update the active card index based on percentage scroll
  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const carousel = carouselRef.current;
        const totalScrollWidth = carousel.scrollWidth - carousel.clientWidth; // Total scrollable width
        const scrollPosition = carousel.scrollLeft; // Current scroll position
        const numberOfCards = projects.length;

        // Calculate how far we've scrolled as a percentage of the total scrollable width
        const scrollPercentage = (scrollPosition / totalScrollWidth) * 100;

        // Calculate breakpoints based on the number of cards
        const breakpointPercentage = 100 / (numberOfCards - 1);

        let newIndex = 0; // Default to the first card

        // Check if we're at the very start of the carousel (or very close)
        if (scrollPosition <= 0) {
          newIndex = 0;
        }
        // Check if we're at or beyond the last breakpoint
        else if (scrollPercentage >= 100) {
          newIndex = numberOfCards - 1;
        }
        // Loop through breakpoints to determine which card should be active
        else {
          for (let i = 1; i < numberOfCards; i++) {
            if (
              scrollPercentage >= breakpointPercentage * (i - 1) &&
              scrollPercentage < breakpointPercentage * i
            ) {
              newIndex = i;
              break;
            }
          }
        }

        setActiveIndex(newIndex); // Update the active card
      }
    };

    const carouselElement = carouselRef.current;
    if (carouselElement) {
      carouselElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []); // Empty dependency array: run once when the component mounts

  return (
    <div className="project-carousel" ref={carouselRef}>
      {projects.map((project, index) => (
        <div
          key={index}
          className={`project-card ${activeIndex === index ? "active" : ""}`}
        >
          <img
            src={project.imgSrc}
            alt={project.title}
            className="project-image"
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectCarousel;
