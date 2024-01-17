import "./SCarousel.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
const SCarousel = ({ data }) => {
  return (
    <div className="scarousel">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        interval={2500}
        autoFocus={true}
        stopOnHover={false}
        transitionTime={500}
        infiniteLoop={true}
        showStatus={false}
        animationHandler="fade"
      >
        {data.map((item, index) => (
          <div className="poster-block" key={index}>
            <div className="posterImage">
              <img src={`${item.img_url}`} />
            </div>
            <div className="posterImage__overlay">
              <div className="posterImage__text">
                <div className="posterImage__text--title">
                  {item ? item.text : ""}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      <Link className="btn-click" to={"/"}>
        Click Here
      </Link>
    </div>
  );
};

export default SCarousel;
