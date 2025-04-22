import React from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';

const DoubleImage = (props) => {
  return (
    <>
      <div className="image-container">
        <div className="square-shape"></div>
        <img
          src={props.img1}
          alt="Private 11 plus tutor in London"
          className="image"
          style={{ marginBottom: "60px" }}
        />
        <img
          src={props.img2}
          alt="Private tutoring lessons in south east London"
          className="image"
          style={{ marginTop: "60px" }}
        />
        <div className="circle-shape"></div>
        <div className="subject-container">
          <NavLink to="tuition">
            <div className="card ks1">
              <div className="card-title">KS1</div>
              <div className="text">Tuition</div>
            </div>
          </NavLink>
          <NavLink to="tuition">
            <div className="card ks2">
              <div className="card-title">KS2</div>
              <div className="text">Tuition</div>
            </div>
          </NavLink>
          <NavLink to="resources">
            <div className="card 11-plus">
              <div className="card-title">11 +</div>
              <div className="text">Resources</div>
            </div>
          </NavLink>
        </div>
      </div>
      <div className="text-box">
        <div className="subtitle">
          <div className="indent"></div>
          <div>{props.subtitle}</div>
        </div>
        <h2 className="title">{props.title}</h2>
        <div className="hero-p">
          <div className="text-box-bottom">
            <p>{props.p1}</p>
            <p>{props.p2}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DoubleImage
