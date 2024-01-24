import "./TrainerCard.scss";

const TrainerCard = ({ name, position, image, paragraph }) => {
  return (
    <div className="trainer">
      <h1>About the Trainer</h1>
      <div className="trainer__about">
        <h1 className="name">{name ? name : "Vikram Dhar"}</h1>
        <h5>{position ? position : "Lead Tainer"}</h5>
        <div className="trainer__container">
          <div className="image">
            <img
              src={`/${image ? image : "ezgif.com-gif-maker-3.jpg"}`}
              alt={``}
            />
          </div>
          <div className="trainer__container--text">
            {paragraph ? (
              paragraph.map((para, index) => <p key={index}>{para}</p>)
            ) : (
              <>
                {" "}
                <p>
                  Vikram Dhar is an internationally acclaimed ICF Coach Trainer
                  and Mentor Coach and an NLP Trainer & Coach who facilitates
                  NLP and Coaching programs across the globe. He is also a
                  Licensed Behavioral Master Trainer, Licensed Meta-NLP Trainer
                  certified by Michael Hall (co-founder of Neuro-Semantics) and
                  Certified NLP Trainer (ABNLP, USA) and Member NLP Trainer
                  (ANLP, UK). Vikram is also a Licensed NLP Coach (Certified by
                  Richard Bandler, co-founder of NLP) and has attended the
                  International NLP Coach & New Code Practitioner training
                  directly with John Grinder (co-founder of NLP).
                </p>
                <p>
                  ​Vikram has been listed by Global Gurus in the World’s Top 30
                  NLP Professionals for 2021, 2022 & 2023. He has also been
                  listed among the top 100 coaches globally both in 2017, 2020
                  and 2023 and was presented with the “Talent Award” during the
                  world coaching summit for his tremendous contribution to the
                  world of coaching. He has co-authored the book “The Ultimate
                  Coaching Guide”.
                </p>
                <p>
                  He is the founder of “NLP Coaching Academy”, holds a Master’s
                  Degree in Computer Science from Bradley University, USA and is
                  a modern day Business Growth Hacker and a Business Coach. In
                  his corporate career, he has worked with market leaders in
                  many roles, including but not limited to IT Risk Management,
                  Cyber Security, Business Sales, Leadership & Team Development
                  and Leadership Coaching for over a decade and half.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerCard;
