import Heading from "../../components/page-heading/Heading";
import "./Courses.scss";
import CoursesListData from "./CourseListData";
import Card from "../../components/card/Card";

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
