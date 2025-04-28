import React from 'react';
import HeroCard from '../../components/heroCard';
import hero from '../../assets/images/tuition-hero.webp';
import about from '../../assets/images/about1.webp';
import english1 from '../../assets/images/english1.webp';
import english2 from "../../assets/images/english2.webp";
import online from '../../assets/images/online1.webp';
import gcse from '../../assets/images/gcse.webp';
import maths1 from '../../assets/images/maths1.webp';
import maths2 from '../../assets/images/ks3.webp';
import plus1 from '../../assets/images/11plus.webp';
import plus2 from '../../assets/images/11plus2.webp';
import CTA from '../../components/cta';
import DoubleImage from '../../components/doubleImage';
import './index.scss';

const Tuition = () => {
  return (
    <div className="tuition-page">
      <section className="hero">
        <div className="hero-inner">
          <div className="text-box">
            <div className="subtitle">
              <div className="indent"></div>
              <div>Personalised Tuition </div>
            </div>
            <h1 className="title">Tailored Learning Programs for Success</h1>
            <div className="hero-p">
              <div className="hero-indent"></div>
              {/* <p>
                I provide one on one tutoring in South East London for Key Stage
                1, Key Stage 2 and 11 plus exam prep.
              </p> */}
            </div>
            <HeroCard
              title="Local or Online"
              cardtitle1="Home Tuition"
              p1="If you live in the surrounding areas of Lewisham including Dulwich, Peckham & Camberwell, I can travel to you. I will deliver sessions in the comfort of your own home."
              cardtitle2="Online Tuition"
              p2="I offer online tuition over various platforms like google meet and skype so your child can access the same quality of teaching as with face to face home tutoring lessons."
              showContact={false}
            />
          </div>
        </div>
        <img
          src={hero}
          alt="Private tutor in blackheath Dulwich Peckham"
          className="hero-img"
          loading="lazy"
        />
      </section>
      <section className="second-section">
        <div className="second-inner">
          <div className="tuition-container">
            <div className="card">
              <div className="card-text">
                <div className="subtitle">
                  <div className="indent"></div>
                  <div>key Stage 1, 2 & 11 Plus prep</div>
                </div>
                <h2>Home Tuition £40ph</h2>
                <p>
                  If you want one to one tutoring, and live in the surrounding
                  areas of Lewisham including Dulwich, Peckham & Camberwell, I
                  can travel to you. I will deliver sessions in the comfort of
                  your own home. With home tuition, your child will have the
                  opportunity to work with me in person, which can help them
                  better understand the material and ask questions n real time.
                </p>
                <p>
                  It also allows for a multi-sensory style of teaching if your
                  child tends to learn better through this approach. You can be
                  reassured that your child is in safe hands as I have enhanced
                  DBS checks and always maintain a high level of
                  professionalism.
                </p>
              </div>
              <div className="img-container">
                <img
                  src={about}
                  alt="Private 11 plus exam prep lessons in London"
                  className="card-image"
                />
                <div className="square">
                  <div className="card-title">Home</div>
                  <div className="text">Tutoring</div>
                </div>
              </div>
            </div>
            <div className="card reverse">
              <div className="card-text">
                <div className="subtitle">
                  <div className="indent"></div>
                  <div>key Stage 1, 2 & 11 Plus prep</div>
                </div>
                <h2>Online Tuition £35</h2>
                <p>
                  I offer online tuition over various platforms like google meet
                  and skype so your child can access the same quality of
                  teaching as with face to face home tutoring lessons.
                </p>
                <p>
                  The added benefit is that lessons can be recorded so that you
                  can revisit them at a later date. Online tutoring also offers
                  more flexibility and choice at a lower price as travel costs
                  do not need to be taken into account.
                </p>
              </div>
              <div className="img-container">
                <img
                  src={online}
                  alt="Private 11 plus exam prep lessons in London"
                  className="card-image"
                />
                <div className="square">
                  <div className="card-title">Online</div>
                  <div className="text">Tutoring</div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-text">
                <div className="subtitle">
                  <div className="indent"></div>
                  <div>11 Plus preparation</div>
                </div>
                <h2>11 Plus Exam Prep</h2>
                <p>
                  I specialise in 11+ exam preparation. I have an excellent
                  student pass rate and will work with your child to develop the
                  academic skills needed to pass the exam, as well as giving
                  them the confidence, exam technique and resilience needed to
                  stand out amongst the rest.
                </p>
                <p>
                  I will assess your child and tailor the scheme of learning to
                  ensure success. While most independent schools write and mark
                  their own common entrance exams, 11+ entrance exams are based
                  on GL and CEM syllabi. I will tailor the learning for the
                  specific local requirements.
                </p>
              </div>
              <div className="img-container">
                <img
                  src={gcse}
                  alt="Private 11 plus exam prep lessons in London"
                  className="card-image"
                />
                <div className="square">
                  <div className="card-title">11 Plus</div>
                  <div className="text">Preparation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="third-section">
        <div className="third-inner">
          <div className="cta">
            <CTA />
          </div>
        </div>
      </section>
      <section className="forth-section">
        <div className="forth-inner">
          <div className="subject-container">
            <div className="subject" id="1">
              <div className="background"></div>
              <div className="top-text">
                <DoubleImage
                  img1={english1}
                  img2={english2}
                  subtitle="Learning by design"
                  title="English Tuition"
                  p1="English is often considered the most essential subject for long-term academic success. While it plays a vital role in helping students achieve their English qualifications, the skills developed through English tuition—reading, writing, comprehension, and critical thinking—are transferable across every subject."
                  p2="English is the language of communication, analysis, expression, and creativity. Whether it’s crafting ideas in a science report or interpreting themes in history, strong literacy skills empower students to understand and articulate concepts clearly and confidently."
                  cards={[
                    {
                      to: "/resources",
                      title: "KS1",
                      text: "Resources",
                      className: "ks1",
                    },
                    {
                      to: "/resources",
                      title: "KS2",
                      text: "Resources",
                      className: "ks2",
                    },
                    {
                      to: "/resources",
                      title: "11 +",
                      text: "Resources",
                      className: "11-plus",
                    },
                  ]}
                />
              </div>

              <div className="bottom-text">
                <div className="subject">
                  <div className="subtitle">
                    <div className="indent"></div>
                    <div>Key Stage 2 Learning</div>
                  </div>
                  <p>
                    At Key Stage 2, children take national SATs assessments to
                    determine whether they've met the expected standards in
                    reading, spelling, grammar, and punctuation. These results
                    play an important role in shaping their transition to
                    secondary school, including setting targets and placement
                    into teaching groups.
                  </p>
                  <p>
                    If you're based in Lewisham or the surrounding areas, I
                    offer in-home tutoring to support your child through this
                    important stage. My sessions are tailored to build the
                    skills and confidence needed for SATs success—all from the
                    comfort of your own home.
                  </p>
                </div>
                <div className="subject">
                  <div className="subtitle">
                    <div className="indent"></div>
                    <div>Key Stage 1 and Phonics</div>
                  </div>
                  <p>
                    In Year 1, children take the phonics screening assessment—a
                    key milestone in early literacy. I offer tailored support to
                    help your child meet the expected standard, so they can move
                    forward confidently without needing to retake the screening
                    in Year 2.
                  </p>
                  <p>
                    At the end of Key Stage 1, children are assessed in reading,
                    grammar, and punctuation. I provide focused preparation for
                    these benchmark assessments, using targeted practice
                    materials to strengthen the skills that need development.
                    Each session is designed to build confidence and ensure your
                    child feels ready and supported.
                  </p>
                </div>
              </div>
            </div>
            <div className="subject">
              <div className="background"></div>
              <div className="top-text reverse">
                <DoubleImage
                  img1={maths1}
                  img2={maths2}
                  subtitle="Learning by design"
                  title="Maths Tuition"
                  p1="Maths is one of the most in-demand subjects when parents consider extra academic support—and for good reason. Alongside English, it forms the foundation for logical reasoning, problem-solving, and critical thinking. The numeracy skills gained through Maths can be applied across a wide range of subjects, including Science, Engineering, Technology, and even the creative arts."
                  p2="Studies have shown that students who excel in Maths often develop greater grey matter volume in areas of the brain linked to attention and decision-making. With the right guidance, your child can build the confidence and skills needed to thrive—not just in Maths, but across their entire learning journey."
                  cards={[
                    {
                      to: "/resources",
                      title: "KS1",
                      text: "Resources",
                      className: "ks1",
                    },
                    {
                      to: "/resources",
                      title: "KS2",
                      text: "Resources",
                      className: "ks2",
                    },
                    {
                      to: "/resources",
                      title: "11 +",
                      text: "Resources",
                      className: "11-plus",
                    },
                  ]}
                />
              </div>

              <div className="bottom-text">
                <div className="subject">
                  <div className="subtitle">
                    <div className="indent"></div>
                    <div>Key Stage 1 maths</div>
                  </div>
                  <p>
                    I work closely with your child to build strong mental
                    fluency in whole numbers, counting, and place value—laying
                    the essential groundwork for future success in Maths. These
                    core skills form the foundation of early numeracy and are
                    key to developing confidence with numbers
                  </p>
                  <p>
                    By the end of this key stage, your child should confidently
                    know their number bonds to 20. I’ll ensure these skills are
                    firmly in place, so they feel prepared and self-assured when
                    it comes to sitting their National Maths tests.
                  </p>
                </div>
                <div className="subject">
                  <div className="subtitle">
                    <div className="indent"></div>
                    <div>Key stage 2 Maths</div>
                  </div>
                  <p>
                    At the beginning of Key Stage 2, your child will take a
                    multiplication tables check to assess their recall and
                    fluency with times tables. I’ll ensure this key area is
                    mastered early on, building a strong foundation before
                    moving on to preparation for the National SATs at the end of
                    the key stage.
                  </p>
                  <p>
                    The SATs are particularly important, as the results are
                    often used in secondary school to set academic targets and
                    determine teaching groups. If you’re based in Lewisham or
                    the surrounding area, I offer in-home tutoring to help your
                    child feel confident, capable, and fully prepared.
                  </p>
                </div>
              </div>
            </div>

            <div className="subject" id="3">
              <div className="background"></div>
              <div className="top-text reverse">
                <DoubleImage
                  img1={plus1}
                  img2={plus2}
                  subtitle="Learning by design"
                  title="11 Plus Exam Prep"
                  p1="I specialise in 11 Plus preparation and have an excellent track record of student success. I work closely with your child to develop the academic skills, exam technique, and confidence they need to stand out in a competitive environment. My approach also helps build the resilience and focus needed to perform under pressure."
                  p2="Every child is different, so I begin with an initial assessment to tailor a personalised scheme of learning that targets their strengths and areas for development. While many independent schools write and mark their own entrance exams, most 11+ assessments are based on the GL and CEM syllabi. I adapt my tutoring to meet the specific requirements of your chosen schools and local area."
                  cards={[
                    {
                      to: "/resources",
                      title: "KS1",
                      text: "Resources",
                      className: "ks1",
                    },
                    {
                      to: "/resources",
                      title: "KS2",
                      text: "Resources",
                      className: "ks2",
                    },
                    {
                      to: "/resources",
                      title: "11 +",
                      text: "Resources",
                      className: "11-plus",
                    },
                  ]}
                />
              </div>

              <div className="bottom-text">
                <div className="subject">
                  <div className="subtitle">
                    <div className="indent"></div>
                    <div>Key Stage 1 maths</div>
                  </div>
                  <p>
                    I work closely with your child to build strong mental
                    fluency in whole numbers, counting, and place value—laying
                    the essential groundwork for future success in Maths. These
                    core skills form the foundation of early numeracy and are
                    key to developing confidence with numbers
                  </p>
                  <p>
                    By the end of this key stage, your child should confidently
                    know their number bonds to 20. I’ll ensure these skills are
                    firmly in place, so they feel prepared and self-assured when
                    it comes to sitting their National Maths tests.
                  </p>
                </div>
                <div className="subject">
                  <div className="subtitle">
                    <div className="indent"></div>
                    <div>Key stage 2 Maths</div>
                  </div>
                  <p>
                    At the beginning of Key Stage 2, your child will take a
                    multiplication tables check to assess their recall and
                    fluency with times tables. I’ll ensure this key area is
                    mastered early on, building a strong foundation before
                    moving on to preparation for the National SATs at the end of
                    the key stage.
                  </p>
                  <p>
                    The SATs are particularly important, as the results are
                    often used in secondary school to set academic targets and
                    determine teaching groups. If you’re based in Lewisham or
                    the surrounding area, I offer in-home tutoring to help your
                    child feel confident, capable, and fully prepared.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Tuition
