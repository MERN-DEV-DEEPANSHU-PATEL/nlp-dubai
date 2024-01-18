import { Link } from "react-router-dom";
import { animateScroll } from "react-scroll";
import "./Card.scss";

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

export default Card;
