import OwlCarousel from "react-owl-carousel";
import AllTraingData from "./AllTrainingData";
import "./SingleTraining.scss";
import { useParams } from "react-router-dom";

const SingleTraining = () => {
  const { id } = useParams();
  let item = AllTraingData[id];
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
    <div className="single-training--page">
      <section>
        {/* <img src="/case-studies-2-min.jpg" alt="" /> */}
        <div className="content">
          {item.section1?.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </section>
      <section>
        <div className="content2">
          <p>{item.section2?.paragraph}</p>

          <div className="slider">
            <OwlCarousel autoplaySpeed={500} className="owl-theme" {...options}>
              {item.section2?.list.map((item, index) => {
                return (
                  <div key={index} className="slide">
                    <h2>{item.heading}</h2>
                    <ul>
                      {item.lis.map((list, index) => (
                        <li key={index}>{list}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleTraining;
