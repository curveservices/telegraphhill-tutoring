import React from "react";
import hero from "../../assets/images/home-img.webp";
import HeroCard from "../../components/heroCard";
import DoubleImage from "../../components/doubleImage";
import img1 from "../../assets/images/online1.webp";
import img2 from "../../assets/images/about1.webp";
import vanessa from "../../assets/images/vanessa.webp";
import Button from "../../components/button";
import SubjectCards from "../../components/subjectCards";
import "./index.scss";
import useScrollStates from "../../components/scrollState";
import Helmet from "../../components/helmet";

const Home = () => {
  const { second, third, forth } = useScrollStates();

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
              <p>I Provide one-on-one tutoring in South East London.</p>
              <div className="hero-indent"></div>
            </div>
            <HeroCard
              title="Find Me"
              p1=" 
              My tutoring can be provided from the comfort of your home, or online
              using a platform of you choice"
              divLine={false}
            />
          </div>
        </div>
        <img
          src={hero}
          alt="Private tutor in blackeath Dulwich Peckham"
          className="hero-img"
          loading="lazy"
        />
      </section>
      <section className={`second-section ${second ? "anim" : "none"}`}>
        <div className="background"></div>
        <div className={`second-inner `}>
          <DoubleImage
            img1={img1}
            img2={img2}
            subtitle="About Me"
            title="What to Expect from my Tutoring Sessions"
            p1="If You Live In The Surrounding Areas Of Lewisham Including Dulwich, Peckham & Camberwell, I Can Travel To You. I Will Deliver Sessions In The Comfort Of Your Own Home."
            p2="I Offer Online Tuition Over Various Platforms Like Google Meet And Skype So Your Child Can Access The Same Quality Of Teaching As With Face To Face Home Tutoring Lessons."
            cards={[
              {
                to: "tuition/#1",
                title: "English",
                text: "Tuition",
                className: "ks1",
              },
              {
                to: "tuition/#2",
                title: "Maths",
                text: "Tuition",
                className: "ks2",
              },
              {
                to: "resources",
                title: "11 +",
                text: "Resources",
                className: "11-plus",
              },
            ]}
          />
        </div>
      </section>
      <section className={`third-section ${third ? "anim" : "none"}`}>
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
        <SubjectCards
          link1='/tuition/#1'
          link2='/tuition/#1'
          link3='/tuition/#3'
        />
      </section>
      <section className="forth-section">
        <div className="forth-inner">
          <div className="background"></div>
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
      <Helmet
        title="Telegraph Hill Tutoring | Private Tutoring in South East London"
        description="Telegraph Hill Tutoring, I provide private tutoring for key stage 1 and 2 and 11 plus prep"
        keywords="Private tutor, private lessons, 11 plus, key stage 1, key stage 2, South-east London, London"
      />
    </div>
  );
};

export default Home;
