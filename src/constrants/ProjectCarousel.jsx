import React, { useRef, useEffect, useState } from "react";
import projects from "./index";
import "./ProjectCarousel.css";

const ProjectCarousel = () => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to smoothly scroll to a position
  const scrollToPosition = (targetPosition, duration) => {
    if (carouselRef.current) {
      const start = carouselRef.current.scrollLeft;
      const startTime = performance.now();

      const scroll = (currentTime) => {
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easeInOut =
          progress < 0.5
            ? 2 * progress * progress
            : -1 + (4 - 2 * progress) * progress;

        carouselRef.current.scrollLeft =
          start + (targetPosition - start) * easeInOut;

        if (timeElapsed < duration) {
          requestAnimationFrame(scroll);
        }
      };

      requestAnimationFrame(scroll);
    }
  };

  // Convert viewport width (vw) to pixels
  const vwToPixels = (vw) => {
    return (vw / 100) * window.innerWidth;
  };

  // Scroll handler for active index update on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const carousel = carouselRef.current;
        const carouselWidth = carousel.offsetWidth;
        const scrollPosition = carousel.scrollLeft;

        let newActiveIndex = 0;
        let closestDistance = Infinity;

        Array.from(carousel.children).forEach((child, index) => {
          const childWidth = child.offsetWidth;
          const childLeft = child.offsetLeft;

          // Calculate distance from the center of the viewport
          const distance = Math.abs(
            childLeft + childWidth / 2 - (scrollPosition + carouselWidth / 2)
          );

          if (distance < closestDistance) {
            closestDistance = distance;
            newActiveIndex = index;
          }
        });

        setActiveIndex(newActiveIndex);
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
  }, []);

  // Effect for initial scroll on load
  useEffect(() => {
    const delay = 1560; // Delay in milliseconds before scrolling
    const duration = 900; // Duration of the scroll animation
    const scrollAmountVW = 32; // Amount to scroll (in viewport width units)

    const scrollAmountPixels = vwToPixels(scrollAmountVW);

    const timer = setTimeout(() => {
      scrollToPosition(scrollAmountPixels, duration);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

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
