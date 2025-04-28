import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./index.scss";

const DoubleImage = ({ img1, img2, subtitle, title, p1, p2, cards }) => {
  return (
    <>
      <motion.div
        className="image-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="square-shape" />
        <img
          src={img1}
          alt="Private 11 plus tutor in London"
          className="image"
          loading="lazy"
          style={{ marginBottom: "60px" }}
        />
        <img
          src={img2}
          alt="Private tutoring lessons in south east London"
          className="image"
          loading="lazy"
          style={{ marginTop: "60px" }}
        />
        <div className="circle-shape" />

        <div className="subject-container">
          {cards?.map((card, i) => (
            <NavLink
              to={card.to}
              key={i}
              aria-label={card.ariaLabel || card.text}
            >
              <div
                className={`card ${card.className || ""}`}
                role="button"
                tabIndex={0}
              >
                <div className="card-title">{card.title}</div>
                <div className="text">{card.text}</div>
              </div>
            </NavLink>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="image-text-box"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <div className="subtitle">
          <div className="indent" />
          <div>{subtitle}</div>
        </div>
        <h2 className="title">{title}</h2>
        <div className="hero-p">
          <div className="text-box-bottom">
            <p>{p1}</p>
            <p>{p2}</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default DoubleImage;
