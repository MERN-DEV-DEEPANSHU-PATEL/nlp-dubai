import { useParams } from "react-router-dom";
import CollapseBar from "../../../../components/collapseBar/CollapseBar";
import Heading from "../../../../components/page-heading/Heading";
import RegiterBtn from "../../../../components/r-btn/RegiterBtn";
import Stickers from "../../../../components/stickers/Stickers";
import TrainerCard from "../../../../components/tainerCard/TrainerCard";
import "./Template1.scss";
import AllData from "../template-2/AllData";

const Template1 = () => {
  const { id } = useParams();
  let course = AllData[id];
  return (
    <div className="single-event">
      <Heading />
      <div className="section-1">
        <img src={`/${course.image}`} alt="any img" />
        <div className="describe">
          <img className="side-poster" src={`/${course.sidePoster}`} alt="" />
          <div className="describe-container">
            <h3>{course.describeContainer.h3}</h3>
            <div
              className="points"
              dangerouslySetInnerHTML={{
                __html: course.describeContainer.table,
              }}
            ></div>
            {course.extraPoint ? (
              <div
                className="extra-point"
                dangerouslySetInnerHTML={{ __html: course.extraPoint }}
              ></div>
            ) : (
              ""
            )}
            <div className="sub-describe">
              <p>
                <span className="spann">
                  <strong>We support you through the complete journey.</strong>
                </span>
              </p>
              <p>
                To know more about our&nbsp;
                <strong>
                  <span className="wixui-rich-text__text">
                    ICF approved coach specific training program under the ACSTH
                    path
                  </span>
                </strong>
                , please submit your details here. &nbsp;One of our team members
                will then contact you to discuss the details.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-2">
        <RegiterBtn />
        <div className="heading-blue">
          <h3>
            ICF credentials add legitimacy to your coaching practice and boost
            your bottom line. Achieving credentials through ICF signifies a
            coach’s commitment to integrity, understanding and mastery of
            coaching skills, and dedication to clients.
          </h3>
        </div>
        <div style={{ margin: "5rem" }}></div>
        <TrainerCard />
        <RegiterBtn />
        <p className="para-mid">
          UV Consultants runs these programs in association with NLP Coaching
          Academy. NLP Coaching Academy holds the formal ICF Accreditation, and
          the course is delivered by Mr. Vikram Dhar – Certified NLP Trainer,
          Licensed Meta-NLP Trainer and ICF Mentor Coach.
        </p>

        <Stickers
          data={[
            "ICF-logos-03.jpg",
            "ICF-logos-02.jpg",
            "Untitled-design-1.png",
            "lg-42.jpg",
            "IN-ASSOCIATION-WITH.png",
          ]}
        />
      </div>
    </div>
  );
};

export default Template1;
