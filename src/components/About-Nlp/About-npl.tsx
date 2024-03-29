
import { useState } from "react";
import { Collapse } from "react-bootstrap";
import "./About-Nlp.scss"

const Card = ({ title, content }) => {
  const [open, setOpen] = useState(false);
  
  
  const toggleCollapse = () => {
    setOpen(!open);
  };


  return (
    <div className="card">
      <button
        className="collpase-button"
        onClick={toggleCollapse}
      >
        {title}
      </button>
      <Collapse in={open}>
        <div className="collapse-text">{content}</div>
      </Collapse>
    </div>
  );
};

const AboutNlp = () => {
  return (
    <>
      <div className="about-npl-container">
        <h1 className="About-NLP-heading">About NLP</h1>
        <p className="paragraph">
          {" "}
          “A Life Transformation Tool like no other”{" "}
        </p>
        <p className="paragraph">
          {" "}
          NLP – Neuro-Linguistic Programming, is a study of human psyche and how
          our mind responds to various life situations. Study has revealed that,
          in any given situation, our mind has the capacity to comprehend and
          run ‘mental programs’ referred to as ‘mental strategies’ in a
          perfectly ordered sequence of instructions (or set of internal
          representations) in a highly organized and systematic manner.{" "}
        </p>

        <p className="paragraph">
          In simple words, our mind has the capability to create and store
          personal instructions for success and failure, which is later
          understood and utilised in similar situations. If one wants to break
          free of these self-defeating patterns and imbibe patterns of thinking
          that will only attain excellence, then the answer lies in learning NLP
          techniques and implementing the same. NLP has developed a
          well-researched, structured process that understands self-defeating
          patterns and breaks them into fragments to create more successful
          patterns which can be utilised in{" "}
          <span className="Mindfulness-Wellbeing"> Mindfulness Wellbeing </span>
          , and to decisively choose the level of success one wants to attain in
          life.
        </p>

        <h2 className="ICF-ACC-Accredited-heading">ICF ACC Accredited.</h2>
        <p className="paragraph">
          Highest quality, international programs, fully approved by the
          International Coach Federation.
        </p>
        <p className="paragraph"> Certificates issued by: </p>
        <ul className="paragraph">
          <li>
            NLP Coaching Academy and their programs are approved by ABNLP – The
            American Board of Neuro-Linguistic Programming
          </li>
          <li>ICF – International Coach Federation</li>
          <li>
            IAPCCT – International Association of Professional Coaches,
            Counsellors and Therapists SOAL – School of Accelerated Learning
          </li>
        </ul>
      </div>

      <div className="section3 p-5">
        <div>
          <img
            src="https://www.nlptrainingdubai.com/wp-content/uploads/2017/08/about-one.png"
            alt="img"
          />
        </div>
        <div className="text-container">
          <h1 className="section-3-heading"> Welcome To NLP Training Dubai</h1>
          <div className="card-container-section-3">
            <Card
              title="Certified NLP Practitioner & Coach"
              content="Whatever you may BE whatever you may DO, this program is beneficial to YOU! Transforming the lives of Business Professionals to Home-makers."
            />
            <Card
              title="Emotional Intelligence Coach Practitioner"
              content="Leaders who make a real difference in the lives of their people and their organisation are the people who leave their mark in the business world. What do they have in common? Why do other people look up to them, follow them?"
            />
            <Card
              title="Certified Diploma in NLP"
              content="Leadership is about having a clear vision, and planning how to effectively achieve that vision."
            />
            <Card
              title="Certified NLP Master Practitioner"
              content="Become a CERTIFIED NLP MASTER PRACTITIONER in 8 Days Take your NLP training to a whole new level… Achieve mastery of NLP by going deeper than ever before."
            />
            <Card
              title="Advanced Diploma in NLP & Coaching"
              content="NLP Presuppositions (Beliefs of Excellence) I Model (New Behavior Generator) IOutcome Frames I Well-formed Outcomes ISwish Pattern I Reframing IStates IMeta Model I Milton Model (Hypnosis& Hypnotic Inductions) INLP Success formula I TFAR Coaching model ISensory Acuity and Calibration I Anchoring, Stacking Anchors I Sub-modalities for Coaching I The Communication Model I Coachingwith values"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutNlp;
