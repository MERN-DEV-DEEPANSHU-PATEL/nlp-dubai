import { useNavigate } from "react-router-dom";
import "./BlogItem.scss";

const BlogItem = ({ image, id, heading, subtext }) => {
  const navigate = useNavigate();
  return (
    <div className="card-container">
      <div className="blog__card">
        <div className="card-image">
          <img
            src={`/blog-normal/${image}`}
            alt={heading}
            onClick={() => navigate(`/blog/${id}`)}
          />
        </div>
        <div className="card-details">
          <h3 onClick={() => navigate(`/blog/${id}`)}>{heading}</h3>
          <p>{subtext}</p>
          <button onClick={() => navigate(`/blog/${id}`)}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
