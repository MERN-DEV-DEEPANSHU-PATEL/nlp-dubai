import SCarousel from "../../components/carousel/SCarousel";
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
    <div>
      <div className="carouse-container">
        <SCarousel data={data} />
      </div>
    </div>
  );
};

export default Home;
