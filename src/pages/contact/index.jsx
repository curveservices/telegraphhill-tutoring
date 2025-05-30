import React, { useRef } from "react";
import Socials from '../../components/socials';
import Helmet from '../../components/helmet';
import profile from '../../assets/images/vanessa.webp';
import './index.scss';

const Contact = () => {
  const refForm = useRef();
  const handleSubmit = async (e) => {const refForm = useRef();
    const handleSubmit = async (e) => {
      e.preventDefault();
      const formEle = document.querySelector("form");
      const formInput = new FormData(formEle);
    }
  };
  return (
    <div className="contact-page">
      <div className="hero-left">
        <h1>Contact Me</h1>
        <img
          className="portrait-image"
          src={profile}
          alt="Private Tutoring in South east London"
        />
        <p>
          If you would like to contact me about private lessons please fill out my contact form or
          drop me an email vanessaslade@gmail.com
        </p>
      </div>
      <div className="contact-form">
        <form ref={refForm} onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" id="name">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="full name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" id="email">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email@example.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject" id="subject">
              Subject
            </label>
            <input type="text" name="subject" id="subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message" id="message">
              Your Message
            </label>
            <textarea name="message" id="message" rows={8} required></textarea>
            <div className="btn-container">
              <input type="submit" value="submit" className="submit-button" />
            </div>
          </div>
        </form>
        <Socials />
      </div>
      <Helmet
        title="Contact Me | Private Tutoring in South East London"
        description="Telegraph Hill Tutoring, I provide private tutoring for key stage 1 and 2 and 11 plus prep"
        keywords="Private tutor, private lessons, 11 plus, key stage 1, key stage 2, South-east London, London"
      />
    </div>
  );
};

export default Contact;
