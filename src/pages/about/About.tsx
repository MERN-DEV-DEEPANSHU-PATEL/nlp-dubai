import { Strategy } from "../../ConstantData";
import Heading from "../../components/page-heading/Heading";
import "./About.scss";

const About = () => {
  return (
    <section className="about">
      <Heading extraText={"us"} />
      <div className="container">
        <div className="section-1">
          <div className="row">
            <h3>Enabling Transformation!</h3>
            <p>
              When we liberate ourselves from the unconstructive beliefs forced
              upon us by our own selves and others that imprison us, we allow
              into this space, real life transformational experiences. These
              experiences will raise us to our full potential, increase our
              understanding, allow us to take control of our self. Only when we
              have this control can we take responsibility to truly support
              others and bring about a transformation in their lives.”
            </p>
          </div>
          <div className="row">
            <h3>
              NLP Training Dubai, a Global NLP coaching platform which offers
              quality{" "}
            </h3>
            <p>
              NLP training and coaching certification programs in Dubai. We are
              known for conducting high-quality NLP Programs which are designed
              to develop versatile and highly applicable coaching & NLP skill
              sets for those of you who want to step into the field of coaching
              or to apply NLP to change or improve any area of their lives.
            </p>
          </div>
          <div className="row">
            <h3>Certified NLP Training and Coaching Programs</h3>
            <p>
              The journey and goal of becoming an NLP Practitioner will not just
              empower you to specifically and objectively identify the
              physiological, mental-emotional state and mental strategies you
              use in different life situations, but will also provide practical
              skills, strategies, and resources that you can adopt to bring
              about the change that could only be termed as rewarding.
            </p>
          </div>
          <div className="row">
            <h3>Certified NLP Training and Coaching</h3>
            <p>
              – one of the best life skills tools to take control of one’s life,
              steering it towards a better and more fulfilling life!
            </p>
          </div>
          <div className="row">
            <h3>Benefits of being a Certified NLP Trainer and Coach</h3>
          </div>
          <div className="row">
            <h3>
              As a Coach, you will gain process knowledge, strategy and tools
              to:
            </h3>
            <div className="strategy">
              <ul>
                {Strategy.map((row) => {
                  return (
                    <li>
                      <h3>
                        {row.number}. {row.title}
                      </h3>
                      <p>{row.description}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
