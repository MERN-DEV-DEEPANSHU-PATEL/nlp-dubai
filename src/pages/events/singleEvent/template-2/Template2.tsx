import Heading from "../../../../components/page-heading/Heading";
import RegiterBtn from "../../../../components/r-btn/RegiterBtn";
import Stickers, { Stiker } from "../../../../components/stickers/Stickers";
import TrainerCard from "../../../../components/tainerCard/TrainerCard";
import OwlCarousel from "react-owl-carousel";
import "./Template2.scss";
import AllData from "./AllData";
import { useParams } from "react-router-dom";

const Template2 = () => {
  const { id } = useParams();
  let course = AllData[id];
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
      <Heading />
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

          <Stickers data={course?.stickerSrc} />

          <div className="course__container--heading">
            <h2>{course.heading}</h2>
            {course.extraDetails?.map((para, index) => (
              <p
                key={index}
                className="some-text"
                dangerouslySetInnerHTML={{ __html: para }}
              ></p>
            ))}
          </div>
          <RegiterBtn />
          <div className="about-course2">
            {course.colorContainerImage ? (
              <img src={`/${course.colorContainerImage}`} alt="" />
            ) : (
              <div
                className="course-price"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                dangerouslySetInnerHTML={{
                  __html: [course.certificate, course.invesment],
                }}
              ></div>
            )}
            <div
              className="about-course2-text"
              dangerouslySetInnerHTML={{ __html: course.colorContainer }}
            ></div>
          </div>
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
          <div
            className="extra-content"
            dangerouslySetInnerHTML={{ __html: course.extraColorContainer }}
          ></div>
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
          <div
            className="course-price"
            dangerouslySetInnerHTML={{
              __html: [course.certificate, course.invesment],
            }}
          ></div>
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
                <Stiker width={"15rem"} url={"/imgpsh_fullsize_anim-2.png"} />
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
                <Stiker
                  width={"15rem"}
                  url={"/Certifications_image_11zon.jpg"}
                />
              </div>
            </div>
          </div>
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
          <div
            className="extraTrainer"
            dangerouslySetInnerHTML={{ __html: course.extraTrainer }}
          ></div>
          <div className="ending">
            <p>
              If you’re excited by the potential of transforming your life, we
              invite you to enroll in this Program now. You get intensive
              training, powerful resources and more.
            </p>
            <p>So go ahead. ENROLL NOW and get started.</p>
            <RegiterBtn />
          </div>
        </div>
      )}
    </div>
  );
};

export default Template2;
