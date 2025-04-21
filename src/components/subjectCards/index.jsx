import React from 'react'
import { NavLink } from 'react-router-dom';
import img1 from '../../assets/images/ks2.webp';
import img2 from '../../assets/images/ks3.webp';
import img3 from '../../assets/images/gcse.webp';
import './index.scss';

const SubjectCards = () => {
  return (
    <div className="card-container">
      <div className="card">
        <img src={img1} alt="private tutor in London" className="image" />
        <div className="card-text">
          <div className="top-text">One-on-one Tutoring</div>
          <div className="card-title">Personalised KS1 Tutoring</div>
          <div className="card-body">
            Your child will be ready to take tests in May. You’ll be sent the
            results of your child’s teacher assessments automatically.
          </div>
          <NavLink to="/" className="link">
            LEARN MORE
          </NavLink>
        </div>
      </div>
      <div className="card">
        <img src={img2} alt="private tutor in London" className="image" />
        <div className="card-text">
          <div className="top-text">One-on-one Tutoring</div>
          <div className="card-title">Personalised KS2 Tutoring</div>
          <div className="card-body">
            Your child will be ready to take tests in July. The school will send
            results of your child’s tests and teacher assessments.
          </div>
          <NavLink to="/" className="link">
            LEARN MORE
          </NavLink>
        </div>
      </div>
      <div className="card">
        <img src={img3} alt="private tutor in London" className="image" />
        <div className="card-text">
          <div className="top-text">One-on-one Tutoring</div>
          <div className="card-title">Personalised 11 Plus Prep</div>
          <div className="card-body">
            Your child will be ready to take tests in July. The school will send
            results of your child’s tests and teacher assessments.
          </div>
          <NavLink to="/" className="link">
            LEARN MORE
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default SubjectCards
