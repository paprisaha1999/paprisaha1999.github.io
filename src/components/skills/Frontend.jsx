import React from "react";
import html from "../../assets/html.png";
import javascript from "../../assets/javascript.png";
import nextJs from "../../assets/nextJs.png";
import storybook from "../../assets/storybook.png";
import react from "../../assets/react.png";
import css from "../../assets/css.png";
import redux from "../../assets/redux.png";
import chakraUI from "../../assets/chakraUI.png";

const Frontend = () => {
  return (
    <div className="skills__content skills-card">
      <h3 className="skills__title">Frontend Development</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data skills-card">
            <img className="icons skills-card-img" src={html} alt="xyz" />

            <div>
              <h3 className="skills__name skills-card-name">HTML</h3>
            </div>
          </div>

          <div className="skills__data skills-card">
            <img className="icons skills-card-img" src={javascript} alt="xyz" />

            <div>
              <h3 className="skills__name skills-card-name">Javascript</h3>
            </div>
          </div>

          <div className="skills__data skills-card">
            <img className="icons skills-card-img" src={nextJs} alt="xyz" />

            <div>
              <h3 className="skills__name skills-card-name">NextJS</h3>
            </div>
          </div>

          <div className="skills__data skills-card">
            <img className="icons skills-card-img" src={storybook} alt="xyz" />

            <div>
              <h3 className="skills__name skills-card-name">StoryBook</h3>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data skills-card">
            <img className="icons skills-card-img" src={css} alt="xyz" />

            <div>
              <h3 className="skills__name skills-card-name">CSS</h3>
            </div>
          </div>

          <div className="skills__data skills-card">
            <img className="icons skills-card-img" src={react} alt="xyz" />

            <div>
              <h3 className="skills__name skills-card-name">ReactJS</h3>
            </div>
          </div>

          <div className="skills__data skills-card">
            <img className="icons skills-card-img" src={redux} alt="xyz" />

            <div>
              <h3 className="skills__name skills-card-name">Redux</h3>
            </div>
          </div>

          <div className="skills__data skills-card">
            <img className="icons skills-card-img" src={chakraUI} alt="xyz" />

            <div>
              <h3 className="skills__name skills-card-name">Chakra UI</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
