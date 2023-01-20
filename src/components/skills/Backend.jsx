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
    <div className="skills__content">
      <h3 className="skills__title">Backend Development & Other Used Tools</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <img className="icons" src={nodeJs} alt="xyz" />

            <div>
              <h3 className="skills__name">NodeJS</h3>
            </div>
          </div>

          <div className="skills__data">
            <img className="icons" src={express} alt="xyz" />

            <div>
              <h3 className="skills__name">ExpressJS</h3>
            </div>
          </div>

          <div className="skills__data">
            <img className="icons" src={dsa} alt="xyz" />

            <div>
              <h3 className="skills__name">DSA</h3>
            </div>
          </div>

          <div className="skills__data">
            <img className="icons" src={vscode} alt="xyz" />

            <div>
              <h3 className="skills__name">VS Code</h3>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <img className="icons" src={mongodb} alt="xyz" />

            <div>
              <h3 className="skills__name">MongoDB</h3>
            </div>
          </div>

          <div className="skills__data">
            <img className="icons" src={cypress} alt="xyz" />

            <div>
              <h3 className="skills__name">Cypress</h3>
            </div>
          </div>

          <div className="skills__data">
            <img className="icons" src={github} alt="xyz" />

            <div>
              <h3 className="skills__name">Github</h3>
            </div>
          </div>

          <div className="skills__data">
            <img className="icons" src={testing} alt="xyz" />

            <div>
              <h3 className="skills__name">Testing</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
