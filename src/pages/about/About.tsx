import { Faculty, Strategy } from "../../ConstantData";
import Heading from "../../components/page-heading/Heading";
import "./About.scss";

const FacultyCard = ({ name, img, position, about }) => {
  return (
    <div className="faculty">
      <div className="faculty__info">
        <img src={img} alt={name} />
        <span className="faculty__info--name">{name}</span>
        <span className="faculty__info--position">{position}</span>
      </div>
      <div className="faculty__about">
        <h1>{name}</h1>
        <hr />
        <p>{about}</p>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section className="about">
      <Heading extraText={"us"} />
      <div className="about__container">
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
        <div className="section-2">
          <h2>Mission</h2>
          <hr />
          <p>
            To transform the lives of individuals by offering premium quality
            Certified NLP Training and Coaching, that provide practical
            knowledge and skills, resources and strategies, to help them grow
            personally and professionally and lead more fulfilling lives.
          </p>
          <h2>Founders & Faculty</h2>
          <hr />
          <h3>
            We don’t just add value, we create transformations and transformers
          </h3>
          <p>
            As an organisation that operates on the basis of integrity and a
            commitment to bring out the best in people, we believe that each of
            our programs must be vital for the person experiencing it, to bring
            about a true, positive change in their lives. Our leaders and
            faculty resonate with this belief and strive to create an overall
            coaching experience that will not only empower participants to
            enhance their lives but which will make their entire learning
            journey impactful and bring about an empowering shift. The sessions
            conducted are enjoyable along with great learnings to last a
            lifetime.
          </p>
          <div className="faculties">
            {Faculty.map((item) => (
              <FacultyCard
                name={item.name}
                position={item.position}
                about={item.about}
                img={item.img}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
