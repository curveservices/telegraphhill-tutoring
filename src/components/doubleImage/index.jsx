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
          <div className="card">
            <div className="card-title">KS1</div>
            <NavLink to='tuition'>Tuition</NavLink>
          </div>
          <div className="card">
            <div className="card-title">KS2</div>
            <NavLink to='tuition'>Tuition</NavLink>
          </div>
          <div className="card">
            <div className="card-title">11 +</div>
            <NavLink to='resources'>Resources</NavLink>
          </div>
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
