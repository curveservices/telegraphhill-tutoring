import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Socials from "../socials";
import "./index.scss";

const HeroCard = (props) => {
  const {
    title,
    cardtitle1,
    cardtitle2,
    p1,
    p2,
    showContact = true,
    divLine = true,
  } = props;
  return (
    <div className="hero-card">
      <div className="title-container">
        <div className="indent"></div>
        <h2>{title}</h2>
      </div>

      {cardtitle1 && <div className="card-title">{cardtitle1}</div>}

      <p className="card-body">{p1}</p>
      { divLine && <div className="div-line"></div>}

      {cardtitle2 && <div className="card-title">{cardtitle2}</div>}

      {p2 && <p className="card-body">{p2}</p>}
      {showContact && (
        <>
          <div className="div-line"></div>

          <div className="contact-container">
            <div className="contact">
              <FontAwesomeIcon icon={faPhone} />
              <p>+44 7980 483384</p>
            </div>
            <div className="contact">
              <FontAwesomeIcon icon={faEnvelope} />
              <p>vanessaslade@gmail.com</p>
            </div>
            <div className="contact">
              <FontAwesomeIcon icon={faLocation} />
              <p>Musgrove Road, New Cross, London</p>
            </div>
            <Socials />
          </div>
        </>
      )}
    </div>
  );
};

export default HeroCard;
