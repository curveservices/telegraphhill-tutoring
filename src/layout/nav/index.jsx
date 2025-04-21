import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faFile,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import Button from '../../components/button';
import logo from "../../assets/images/logobgr.webp";
import MenuToggle from "../../components/menuToggle";
import './index.scss';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <header
        className={`${scrolled ? "navbar-scroll navbar-hidden" : ""} ${
          showNav ? "menu-open" : ""
        }`}
      >
        <NavLink to="/" aria-label="home page">
          <div className="title-container">
            <img
              src={logo}
              alt="Private 11 plus tutoring in southeast London"
              className="mobile-logo"
            />
          </div>
          <img
            src={logo}
            alt="Private 11 plus tutoring in southeast London"
            className="logo"
          />
        </NavLink>
        <nav className={showNav ? "mobile" : ""}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setShowNav(false)}
          >
            <div className="menu-container">
              <FontAwesomeIcon icon={faHouse} className="mobile-icon" />
              <div className="text">Home</div>
            </div>
          </NavLink>
          <NavLink
            to="tuition"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setShowNav(false)}
          >
            <div className="menu-container">
              <FontAwesomeIcon icon={faBook} className="mobile-icon" />
              <div className="text">Tuition</div>
            </div>
          </NavLink>
          <div
            className="dropdown"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <NavLink
              to="resources"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setShowNav(false)}
            >
              <div className="menu-container">
                <FontAwesomeIcon icon={faFile} className="mobile-icon" />
                <div className="text">Resources</div>
              </div>
            </NavLink>
            {showDropdown && (
              <div className="dropdown-menu">
                <NavLink
                  to="/11-plus-english-papers"
                  onClick={() => setShowDropdown(false) & setShowNav(false)}
                  className="dropdown-item"
                >
                  11 Plus English Solved Papers
                </NavLink>
                <NavLink
                  to="/11-plus-maths-papers"
                  onClick={() => setShowDropdown(false) & setShowNav(false)}
                  className="dropdown-item"
                >
                  11 Plus Maths Solved Papers
                </NavLink>
                <NavLink
                  to="/11-plus-verbal-reasoning-papers"
                  onClick={() => setShowDropdown(false) & setShowNav(false)}
                  className="dropdown-item"
                >
                  11 Plus Verbal Reasoning Papers
                </NavLink>
                <NavLink
                  to="/11-plus-non-verbal-reasoning-papers"
                  onClick={() => setShowDropdown(false) & setShowNav(false)}
                  className="dropdown-item"
                >
                  11 Plus Non-verbal Reasoning Papers
                </NavLink>
              </div>
            )}
          </div>
          <Button
            text="Contact Me"
            link="contact"
            onClick={() => setShowNav(false)}
          />
        </nav>
        <MenuToggle showNav={showNav} setShowNav={setShowNav} />
      </header>
    </>
  );
}

export default Navbar
