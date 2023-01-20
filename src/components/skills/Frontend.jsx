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
    <div className="skills__content">
      <h3 className="skills__title">Frontend Development</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <img className="icons" src={html} alt="xyz" />

            <div>
              <h3 className="skills__name">HTML</h3>
            </div>
          </div>

          <div className="skills__data">
            <img className="icons" src={javascript} alt="xyz" />

            <div>
              <h3 className="skills__name">Javascript</h3>
            </div>
          </div>

          <div className="skills__data">
            <img className="icons" src={nextJs} alt="xyz" />

            <div>
              <h3 className="skills__name">NextJS</h3>
            </div>
          </div>

          <div className="skills__data">
            <img className="icons" src={storybook} alt="xyz" />

            <div>
              <h3 className="skills__name">StoryBook</h3>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <img className="icons" src={css} alt="xyz" />

            <div>
              <h3 className="skills__name">CSS</h3>
            </div>
          </div>

          <div className="skills__data">
            <img className="icons" src={react} alt="xyz" />

            <div>
              <h3 className="skills__name">ReactJS</h3>
            </div>
          </div>

          <div className="skills__data">
            <img className="icons" src={redux} alt="xyz" />

            <div>
              <h3 className="skills__name">Redux</h3>
            </div>
          </div>

          <div className="skills__data">
            <img className="icons" src={chakraUI} alt="xyz" />

            <div>
              <h3 className="skills__name">Chakra UI</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
