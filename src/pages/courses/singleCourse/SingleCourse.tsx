import Heading from "../../../components/page-heading/Heading";
import "./SingleCourse.scss";

// defining Template for all courses
//1. heading
//2. Image
//3. stikers or logo o
//4. titile of course
//5. Register button
//6. colored bgc content
//7. Program content
//8. course benifit
//9. come fast
//10. support
//11 . about trainer

const Stikers = ({ url }) => (
  <img style={{ width: "20rem" }} src={url} alt="Image not found" />
);

const SingleCourse = ({}) => {
  return (
    <div>
      <Heading />
      <div className="course__container">
        <div className="image">
          <img
            src="/imgpsh_fullsize_anim-5.png"
            alt="imgpsh_fullsize_anim-5.png"
          />
        </div>
        <div className="stickers">
          <Stikers url={"/lg-32.jpg"} />
          <Stikers url={"/lg-32.jpg"} />
          <Stikers url={"/lg-32.jpg"} />
          <Stikers url={"/lg-32.jpg"} />
        </div>
        <div className="course__container--heading">
          <h2>Certified NLP Practitioner and Coach Workshop</h2>
        </div>
        <div className="btn-register">
          <button>Register</button>
        </div>
        <div className="about-course">
          <p>
            If your emotional abilities aren’t in hand, if you don’t have
            self-awareness, if you are not able to manage your distressing
            emotions, if you can’t have empathy and have effective
            relationships, then no matter how smart you are, you are not going
            to get very far. – Daniel Goleman ​This workshop provides hands-on
            interactive process of learning where participants learn to
            facilitate their clients to develop more rapidly and get more
            satisfying results. They become better equipped to help their
            clients set goals, take actions, make better decisions and make full
            use of their natural strengths, and inner resources. During the
            program, participants learn and familiarize themselves with the
            coaching framework that outlines a coaching process and will
            practice coaching competencies through one-to-one practice, and
            experiential group exercises. ​The content of this program is based
            on Emotional Intelligence and Neuroscience which helps participants
            earn the Emotional Intelligence Coach Practitioner certification.
            Our Coaching program is aligned with the International Coach
            Federation (ICF) Code of Ethics and the ICF Core Coaching
            Competencies Certifications Certified Emotional Intelligence Coach
            Practitioner (ICF approved – 7 CCE hours) Licensed Emotional
            Intelligence Coach Practitioner (IAPCCT approved) Certificate in
            Neuroscience Coaching (IAPCCT approved)
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
