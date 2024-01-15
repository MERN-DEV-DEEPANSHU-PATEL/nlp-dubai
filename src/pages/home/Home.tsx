import SCarousel from "../../components/carousel/SCarousel";
import Counter from "../../components/counter/Counter";
import AboutNlp from "../../components/About-Nlp/About-npl";
import CoursesCarousel from "../../components/CoursesCarousel/CoursesCarousel";

import "./Home.scss";

const Home = () => {
  const data = [
    {
      img_url: "banner-1.jpg",
      text: "Certified NLP Practitioner and Coach Workshop",
    },
    {
      img_url: "banner-2.jpg",
      text: "Emotional Intelligence Coach Practitioner",
    },
    {
      img_url: "banner-3.jpg",
      text: "Certified NLP Master Practitioner",
    },
    {
      img_url: "banner-4.jpg",
      text: "Certified Diploma in NLP & Coaching",
    },
  ];
  return (
    <div className="home">
      <div className="carouse-container">
        <SCarousel data={data} />
      </div>
      <AboutNlp/>
      <Counter />
      <CoursesCarousel/>
    </div>
  );
};

export default Home;
