import { Link } from "react-router-dom";
import Heading from "../../components/page-heading/Heading";
import "./Courses.scss";
import CoursesListData from "./CourseListData";
import { animateScroll } from "react-scroll";

const Card = ({ id, heading, subText, image }) => {
  const scrollToTop = () => {
    animateScroll.scrollToTop({ duration: 300, smooth: "easeInOutQuad" });
  };

  return (
    <div className="course__card">
      <img src={`/${image}`} alt="heading" />
      <Link onClick={scrollToTop} to={`${id}`}>
        {" "}
        {heading}{" "}
      </Link>
      <p>{subText}</p>
      <Link onClick={scrollToTop} to={`${id}`} className="button">
        Read more
      </Link>
    </div>
  );
};

const Courses = () => {
  return (
    <section className="courses">
      <Heading />
      <div className="courses__container">
        {CoursesListData.map((course) => (
          <Card
            id={course.id}
            heading={course.heading}
            subText={course.subtext}
            key={course.id}
            image={course.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Courses;
