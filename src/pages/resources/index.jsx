import React, { useState } from 'react';
import HeroCard from '../../components/heroCard';
import hero from '../../assets/images/resource-hero.webp';
import DoubleImage from '../../components/doubleImage';
import img1 from '../../assets/images/gcse.webp';
import img2 from '../../assets/images/11plus2.webp';
import CTA from '../../components/cta';
import SubjectCards from '../../components/subjectCards';
import ResourceTable from '../../components/resourceTable';
import Button from '../../components/button';
import './index.scss';
import Helmet from '../../components/helmet';

const Resources = () => {
  const [selectedSubject, setSelectedSubject] = useState('english-11plus');

  const handleSubjectChange = (subject) => {
    setSelectedSubject(subject);
  }

  return (
    <div className="resources-page">
      <section className="hero">
        <div className="hero-inner">
          <div className="text-box">
            <div className="subtitle">
              <div className="indent"></div>
              <div>Practice Papers</div>
            </div>
            <h1 className="title">Resources to Boost Your Child's Potential</h1>
            <div className="hero-p">
              <div className="hero-indent"></div>
              <p>Helping Your Child Reach Their Full Potential</p>
            </div>
            <HeroCard
              title="Practice Papers"
              cardtitle1="Download Resources"
              p1="Help your child stay on track between sessions with our downloadable practice materials. These resources are designed to reinforce key skills and build confidence at home."
              cardtitle2="At Home"
              p2="Access to full sets of answers are available exclusively to members. By unlocking the answer sheets, you'll gain valuable insights into your child's progress and areas for improvement—helping you support their learning journey more effectively at home"
              showContact={false}
            />
          </div>
        </div>
        <img
          src={hero}
          alt="Private tutoring in South east London"
          className="hero-img"
          loading="lazy"
        />
      </section>
      <section className="second-section">
        <div className="background"></div>
        <div className="second-inner">
          <DoubleImage
            img1={img1}
            img2={img2}
            subtitle="solved test papers"
            title="11 Plus Practice Papers"
            p1="Preparing for the 11 Plus can be a challenging time for both children and parents. To support your child’s success, I’ve curated a selection of real 11+ English exam papers from top independent and grammar schools. These question papers are free to download and ideal for use at home to help build confidence, improve comprehension, and sharpen exam technique."
            p2="Each paper comes with a set of professionally solved answers, available behind a secure paywall. These detailed solutions are designed to guide both students and parents through the marking process, making it easier to identify areas for improvement and accelerate learning with clarity and focus."
            cards={[]}
          />
        </div>
      </section>
      <section className="third-section">
        <div className="third-inner">
          <div className="btn-container">
            <Button
              text="English"
              onClick={() => handleSubjectChange("english-11plus")}
            />
            <Button text="Maths" onClick={() => handleSubjectChange("maths")} />
            <Button
              text="Verbal"
              onClick={() => handleSubjectChange("verbal")}
            />
            <Button
              text="Non-Verbal"
              onClick={() => handleSubjectChange("non-verbal")}
            />
          </div>

          <ResourceTable
            name={selectedSubject}
            header="Practice Papers"
            title={`11 Plus ${selectedSubject}, Independent & Grammar School Past Exam Papers.`}
          />
        </div>
      </section>
      <section className="cta-section">
        <CTA />
      </section>
      <section className="forth-section">
        <div className="background"></div>
        <div className="forth-inner">
          <div className="text-box">
            <div className="subtitle">
              <div className="indent"></div>
              <div>Tuition subjects</div>
            </div>
            <h2 className="title">Tailored Learning Programs for Success</h2>
          </div>
          <div className="btn-container">
            <Button text="see all tuition" link="/tuition" />
          </div>
        </div>
        <SubjectCards
          link1="/tuition#1"
          link2="/tuition#1"
          link3="/tuition#3"
        />
      </section>
      <Helmet
        title="Resources | Private Tutoring in South East London"
        description="Telegraph Hill Tutoring, resources for key stage 1 and 2 and 11 plus prep"
        keywords="Private tutor, private lessons, 11 plus, key stage 1, key stage 2, South-east London, London"
      />
    </div>
  );
}

export default Resources
