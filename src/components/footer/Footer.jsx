import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Papri Saha</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#calender" className="footer__link">
              Calender
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://github.com/paprisaha1999"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-github-alt"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/papri-saha/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-linkedin-alt"></i>
          </a>
          <a
            href="https://twitter.com/stylopaps"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-twitter-alt"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Papri Saha. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
