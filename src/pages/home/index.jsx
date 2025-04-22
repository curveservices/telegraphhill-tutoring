import React from 'react';
import hero from '../../assets/images/home-img.webp'
import HeroCard from '../../components/heroCard';
import DoubleImage from '../../components/doubleImage';
import img1 from '../../assets/images/online1.webp';
import img2 from '../../assets/images/about1.webp';
import vanessa from '../../assets/images/vanessa.webp';
import Button from '../../components/button';
import SubjectCards from '../../components/subjectCards';
import './index.scss';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-inner">
          <div className="text-box">
            <div className="subtitle">
              <div className="indent"></div>
              <div>Private tutoring</div>
            </div>
            <h1 className="title">Expert Tutoring for Brighter Futures</h1>
            <div className="hero-p">
              <div className="hero-indent"></div>
              <p>
                I provide one on one tutoring in South East London for Key Stage
                1, Key Stage 2 and 11 plus exam prep.
              </p>
            </div>
            <HeroCard />
          </div>
        </div>
        <img
          src={hero}
          alt="Private tutor in blackeath Dulwich Peckham"
          className="hero-img"
        />
      </section>
      <section className="second-section">
        <div className="second-inner">
          <DoubleImage
            img1={img1}
            img2={img2}
            subtitle="About Me"
            title="Expert Tutoring for Brighter Futures"
            p1="If You Live In The Surrounding Areas Of Lewisham Including
                  Dulwich, Peckham & Camberwell, I Can Travel To You. I Will
                  Deliver Sessions In The Comfort Of Your Own Home."
            p2="I Offer Online Tuition Over Various Platforms Like Google Meet
                  And Skype So Your Child Can Access The Same Quality Of
                  Teaching As With Face To Face Home Tutoring Lessons."
          />
        </div>
      </section>
      <section className="third-section">
        <div className="third-inner">
          <div className="text-box">
            <div className="subtitle">
              <div className="indent"></div>
              <div>Tuition subjects</div>
            </div>
            <h2 className="title">Tailored Learning Programs for Success</h2>
          </div>
          <div className="btn-container">
            <Button text="see all tuition" link="tuition" />
          </div>
        </div>
        <SubjectCards />
      </section>
      <section className="forth-section">
        <div className="background"></div>
        <div className="forth-inner">
          <div className="top">
            <div className="tutor-container">
              <img
                src={vanessa}
                alt="Private 11 plus tutor in London"
                className="tutor-img"
              />
              <p>Get In Touch With Me for Private Tutoring Sessions</p>
              <Button link="contact-m" text="Contact Me" />
            </div>
            <div className="right-container"></div>
            <div className="text-box">
              <div className="subtitle">
                <div className="indent"></div>
                <div>Why Choose Me</div>
              </div>
              <h2 className="title">Why I’m Your Trusted Tutor</h2>
              <div className="hero-p">
                <p>
                  With years of experience and a strong success rate, I provide
                  reliable, personalised support in a calm, encouraging
                  environment—helping every child grow in confidence and achieve
                  their potential.
                </p>
              </div>
              <ul className="list-container">
                <li className="title">
                  <h2 className="number">01 </h2>
                  <div className="indent"></div>
                  <h3> Expertise and Experience</h3>
                </li>
                <li className="desc">
                  Qualified, experienced tutor with a proven track record of
                  helping students succeed in core subjects and entrance exams.
                </li>
                <li className="title">
                  <h2 className="number">02</h2>
                  <div className="indent"></div>
                  <h3>Personalised Approach</h3>
                </li>
                <li className="desc">
                  Tailored lessons to suit your child’s unique learning style,
                  pace, and goals for maximum progress and confidence.
                </li>
                <li className="title">
                  <h2 className="number">03</h2>
                  <div className="indent"></div>
                  <h3>Confidentiality and Trust</h3>
                </li>
                <li className="desc">
                  A safe, supportive learning space built on trust, discretion,
                  and genuine care for your child’s development and success.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home
