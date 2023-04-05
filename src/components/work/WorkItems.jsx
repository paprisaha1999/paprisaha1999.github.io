import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card project-card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title project-title">{item.title}</h3>
      <p className="work__description project-description">
        {item.description}
      </p>
      <h5 className="work__techStack project-tech-stack">{item.techStack}</h5>
      <div className="work__buttons">
        <a
          href={item.githubLink}
          className="work__icon project-github-link"
          target="_blank"
        >
          <i class="uil uil-github "></i>
        </a>
        <a
          href={item.netlifyLink}
          className="work__icon project-deployed-link"
          target="_blank"
        >
          <i class="uil uil-video "></i>
        </a>
      </div>
    </div>
  );
};

export default WorkItems;
