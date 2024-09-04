import React from "react";
import projects from "./index";

const ProjectCarousel = () => {
  return (
    <div className="mountify__header-projects">
      {projects.map((project, index) => (
        <div key={index} className="mountify__header-project_card">
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
