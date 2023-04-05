import React from "react";
import nodeJs from "../../assets/nodeJs.png";
import express from "../../assets/express.png";
import dsa from "../../assets/dsa.png";
import vscode from "../../assets/vscode.png";
import mongodb from "../../assets/mongodb.png";
import cypress from "../../assets/cypress.png";
import github from "../../assets/github.png";
import testing from "../../assets/testing.png";

const Backend = () => {
  return (
    <div className="skills__content skills-card">
      <h3 className="skills__title">Backend Development & Other Used Tools</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data skills-card">
            <img className="icons skills-card-img" src={nodeJs} alt="xyz" />

            <div>
              <h3 className="skills__name skills-card-name">NodeJS</h3>
            </div>
          </div>

          <div className="skills__data skills-card">
            <img className="icons skills-card-img" src={express} alt="xyz" />

            <div>
              <h3 className="skills__name skills-card-name">ExpressJS</h3>
            </div>
          </div>

          <div className="skills__data skills-card">
            <img className="icons skills-card-img" src={dsa} alt="xyz" />

            <div>
              <h3 className="skills__name skills-card-name">DSA</h3>
            </div>
          </div>

          <div className="skills__data skills-card">
            <img className="icons skills-card-img" src={vscode} alt="xyz" />

            <div>
              <h3 className="skills__name skills-card-name">VS Code</h3>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data skills-card">
            <img className="icons skills-card-img " src={mongodb} alt="xyz" />

            <div>
              <h3 className="skills__name skills-card-name">MongoDB</h3>
            </div>
          </div>

          <div className="skills__data skills-card">
            <img className="icons skills-card-img" src={cypress} alt="xyz" />

            <div>
              <h3 className="skills__name skills-card-name">Cypress</h3>
            </div>
          </div>

          <div className="skills__data skills-card">
            <img className="icons skills-card-img" src={github} alt="xyz" />

            <div>
              <h3 className="skills__name skills-card-name">Github</h3>
            </div>
          </div>

          <div className="skills__data skills-card">
            <img className="icons skills-card-img" src={testing} alt="xyz" />

            <div>
              <h3 className="skills__name skills-card-name">Testing</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
