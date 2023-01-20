import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="uil uil-graduation-cap about__icon"></i>
        <h3 className="about__title">Education</h3>
        <span className="about__subtitle">Full-Stack Web Dev.</span>
      </div>

      <div className="about__box">
        <i class="uil uil-award about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">1200+ hours Coding</span>
      </div>

      <div className="about__box">
        <i class="uil uil-briefcase-alt about__icon"></i>
        <h3 className="about__title">Projects</h3>
        <span className="about__subtitle">5+ Completed</span>
      </div>
    </div>
  );
};

export default Info;
