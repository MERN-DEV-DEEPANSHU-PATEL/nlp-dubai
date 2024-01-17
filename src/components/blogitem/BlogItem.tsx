import { useNavigate } from "react-router-dom";
import "./BlogItem.scss";
import { animateScroll } from "react-scroll";

const BlogItem = ({ image, id, heading, subtext }) => {
  const navigate = useNavigate();
  const scrollToTop = () => {
    animateScroll.scrollToTop({ duration: 300, smooth: "easeInOutQuad" });
  };
  return (
    <div className="card-container">
      <div className="blog__card">
        <div className="card-image">
          <img
            src={`/blog-normal/${image}`}
            alt={heading}
            onClick={() => {
              scrollToTop();
              navigate(`/blog/${id}`);
            }}
          />
        </div>
        <div className="card-details">
          <h3
            onClick={() => {
              scrollToTop();
              navigate(`/blog/${id}`);
            }}
          >
            {heading}
          </h3>
          <p>{subtext}</p>
          <button
            onClick={() => {
              scrollToTop();
              navigate(`/blog/${id}`);
            }}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
