import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Socials from '../socials';
import './index.scss';

const HeroCard = () => {
  return (
    <div className="hero-card">
      <div className="title-container">
        <div className="indent"></div>
        <h2 className="card-title">Find Me</h2>
      </div>
      <p className="card-body">
        My tutoring can be provided from the comfort of your home, or online
        using a platform of you choice
      </p>
      <div className="div-line"></div>
      <div className="contact-container">
        <div className="contact">
          <FontAwesomeIcon icon={faPhone} />
          <p> +44 7980 483384</p>
        </div>
        <div className="contact">
          <FontAwesomeIcon icon={faEnvelope} />
          <p> vanessaslade@gmail.com</p>
        </div>
        <div className="contact">
          <FontAwesomeIcon icon={faLocation} />
          <p> Musgrove Road, New Cross, London</p>
        </div>
        <Socials />
      </div>
    </div>
  );
}

export default HeroCard
