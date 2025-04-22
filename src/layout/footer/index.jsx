import React from "react";
import logo from "../../assets/images/logobgr.webp";
import Socials from "../../components/socials";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import './index.scss';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-left">
          <img
            src={logo}
            alt="telegraph hill private tutoring in South East London"
            className="logo"
          />
          <p>Follow Me!</p>
          <Socials />
        </div>
        <div className="nav-container">
          <div className="card-title">Navigation</div>
          <ul className="site-links">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="tuition">Tuition</NavLink>
            </li>
            <li>
              <NavLink to="resources">Resources</NavLink>
            </li>
            <li>
              <NavLink to="contact">Contact Me</NavLink>
            </li>
          </ul>
        </div>
        <div className="contact-container">
          <div className="card-title">Contact Me</div>
          <p className="text">Get in touch with me to start private tutoring sessions</p>
          <div className="contact">
            <FontAwesomeIcon icon={faPhone} />
            <p className="text"> +44 7980 483384</p>
          </div>
          <div className="contact">
            <FontAwesomeIcon icon={faEnvelope} />
            <p className="text"> vanessaslade@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="div-line"></div>
      <p className="copy">
        &copy; {year} created by{" "}
        <a
          href="https://immutable-studio.co.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Immutable Studio
        </a>
      </p>
    </footer>
  );
};

export default Footer;
