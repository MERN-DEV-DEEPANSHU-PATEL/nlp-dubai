import Heading from "../../../components/page-heading/Heading";
import "./SingleCourse.scss";
import OwlCarousel from "react-owl-carousel";

import AllCourseData from "./AllCoursesData";
import { useParams } from "react-router-dom";
// defining Template for all courses
//1. heading//
//2. Image//
//3. stikers or logo o//
//4. titile of course//
//5. Register button//
//6. colored bgc content//
//7. Program syllabus//
//8. course benifit//
//9. come fast//
//10. support//
//11 . about trainer

const Stikers = ({ url, width }) => (
  <img
    style={{ width: width ? width : "20rem" }}
    src={url}
    alt="Image not found"
  />
);

const TrainerCard = ({ name, position, image, paragraph }) => {
  return (
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
                and Mentor Coach and an NLP Trainer & Coach who facilitates NLP
                and Coaching programs across the globe. He is also a Licensed
                Behavioral Master Trainer, Licensed Meta-NLP Trainer certified
                by Michael Hall (co-founder of Neuro-Semantics) and Certified
                NLP Trainer (ABNLP, USA) and Member NLP Trainer (ANLP, UK).
                Vikram is also a Licensed NLP Coach (Certified by Richard
                Bandler, co-founder of NLP) and has attended the International
                NLP Coach & New Code Practitioner training directly with John
                Grinder (co-founder of NLP).
              </p>
              <p>
                ​Vikram has been listed by Global Gurus in the World’s Top 30
                NLP Professionals for 2021, 2022 & 2023. He has also been listed
                among the top 100 coaches globally both in 2017, 2020 and 2023
                and was presented with the “Talent Award” during the world
                coaching summit for his tremendous contribution to the world of
                coaching. He has co-authored the book “The Ultimate Coaching
                Guide”.
              </p>
              <p>
                He is the founder of “NLP Coaching Academy”, holds a Master’s
                Degree in Computer Science from Bradley University, USA and is a
                modern day Business Growth Hacker and a Business Coach. In his
                corporate career, he has worked with market leaders in many
                roles, including but not limited to IT Risk Management, Cyber
                Security, Business Sales, Leadership & Team Development and
                Leadership Coaching for over a decade and half.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const SingleCourse = ({}) => {
  const { id } = useParams();
  const course = AllCourseData[id];
  const options = {
    items: 1,
    loop: true,
    autoplayTimeout: 5000,
    animateOut: "fadeOut",
    autoplay: true,
    nav: true,
    dots: true,
    margin: 10,
  };

  return (
    <div>
      <Heading headingText={course.heading} />
      {course.onlyText ? (
        <div
          className="course__container"
          dangerouslySetInnerHTML={{ __html: course.htmlData }}
        ></div>
      ) : (
        <div className="course__container">
          <div className="image">
            <img src={`/${course.image}`} alt={course.heading} />
          </div>
          <div className="stickers">
            {course?.stickerSrc.map((url, index) => (
              <Stikers url={"/stickers/" + url} key={index} />
            ))}
          </div>
          <div className="course__container--heading">
            <h2>{course.heading}</h2>
          </div>
          <div className="btn-register">
            <button>Register</button>
          </div>
          <div
            className="about-course"
            dangerouslySetInnerHTML={{ __html: course.colorContainer }}
          ></div>
          <div style={{ backgroundColor: "cyan" }}>
            <div className="syllabus-course">
              <div className="syllabus">
                <h3>What you will learn:</h3>
                <div className="list">
                  {course.syllabus?.map((lis, index) => (
                    <ul
                      key={index}
                      dangerouslySetInnerHTML={{ __html: lis }}
                    ></ul>
                  ))}
                </div>
              </div>
              <div className="img">
                <img src={`/${course.syllabusImg}`} alt="image here" />
              </div>
            </div>
            <div className="review-car">
              <div className="course-card">
                <h3>WHAT PEOPLE SAY </h3>
                <OwlCarousel className="owl-theme" {...options}>
                  <div className="review-card">
                    <h3>Manoj Ramchand Khiara </h3>
                    <p>
                      VP Menon is a powerhouse of immense knowledge. He is cool,
                      jolly, and very motivating teacher.
                    </p>
                  </div>
                  <div className="review-card">
                    <h3>Amit Powar </h3>
                    <p>
                      VP is one of the best Trainer, Coach, and Motivational
                      Speaker I've ever met in my life. His enthusiasm &
                      positivity is contagious. — Amit Powar
                    </p>
                  </div>
                  <div className="review-card">
                    <h3>Mohan Kamath</h3>
                    <p>
                      “Team UV is passionate about what they are doing and they
                      make the learning process fun and entertaining” — Mohan
                      Kamath
                    </p>
                  </div>
                  <div className="review-card">
                    <h3>Ijaz Hussain -</h3>
                    <p>
                      “I found Team UV highly professional and friendly. They
                      transfer every bit of knowledge possible. I was amazed at
                      their transparency in doing so.”
                    </p>
                  </div>
                  <div className="review-card">
                    <h3>Nimmi Shibu -</h3>
                    <p>
                      “VP introduced me to the exciting world of NLP. I was
                      lucky to learn under his flagship and get enlightened to
                      this amazing concept.”
                    </p>
                  </div>
                  <div className="review-card">
                    <h3>Anand Rajan, Chattered Accountant -</h3>
                    <p>
                      “Truly awesome learning session. I am positive it will go
                      a long way in my journey of rediscovering myself.”
                    </p>
                  </div>
                </OwlCarousel>
                ;
              </div>
            </div>
          </div>
          <div>
            <div className="benifits syllabus-course">
              <div className="img">
                <img
                  style={{ width: "80%", height: "80%", margin: " 2rem auto" }}
                  src={`/${course.benifitImg}`}
                  alt="The course Benifits"
                />
              </div>
              <div className="syllabus">
                <h3>Course Benifit :</h3>
                <div className="list">
                  {course.benifits?.map((lis, index) => (
                    <ul
                      key={index}
                      dangerouslySetInnerHTML={{ __html: lis }}
                    ></ul>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="extra">
            <div className="extra__box">
              <h4>Powerful advantages when you enroll now</h4>
              <h2>Early Bird Bonus</h2>
              <p>
                Typically at every training program, we offer our early-bird
                participants a significant enrollment discount. This is done to
                reward everyone who’s taken the time out of their busy lives to
                commit to their learning and attended the training.
              </p>
              <div style={{ width: "100%", textAlign: "center" }}>
                <Stikers width={"15rem"} url={"/imgpsh_fullsize_anim-2.png"} />
              </div>
            </div>
            <div className="extra__box">
              <h4>Incourse Bonus</h4>
              <h2>Community Support</h2>
              <p>
                es, this is just for you as a token of appreciation for joining
                our EI tribe. You’ll be part of a special PRIVATE community
                interacting with fellow participants through a closed WhatsApp
                Group and FREE to attend Quarterly Meetups.
              </p>
              <div style={{ width: "100%", textAlign: "center" }}>
                <Stikers
                  width={"15rem"}
                  url={"/Certifications_image_11zon.jpg"}
                />
              </div>
            </div>
          </div>
          <div className="trainer">
            <h1>About the Trainer</h1>
            {course.trainerDetails ? (
              <TrainerCard
                image={course.trainerDetails.image}
                position={course.trainerDetails.position}
                name={course.trainerDetails.name}
                paragraph={course.trainerDetails.paragraph}
              />
            ) : (
              <TrainerCard />
            )}
          </div>
          <div className="ending">
            <p>
              If you’re excited by the potential of transforming your life, we
              invite you to enroll in this Program now. You get intensive
              training, powerful resources and more.
            </p>
            <p>So go ahead. ENROLL NOW and get started.</p>
            <button>Register Now</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleCourse;
