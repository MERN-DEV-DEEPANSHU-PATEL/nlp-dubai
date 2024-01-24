import { useNavigate } from "react-router-dom";
import Heading from "../../components/page-heading/Heading";
import EventListData from "./EventListData";
import "./Events.scss";

const Card = ({ heading, paragraph, image, id }) => {
  const navigate = useNavigate();
  return (
    <div className="e-card">
      <div className="image">
        <img
          onClick={() => navigate(`${id}`)}
          src={`/${image}`}
          alt="NLP Couching"
        />
      </div>
      <div className="text">
        <h2 onClick={() => navigate(`${id}`)}>{heading}</h2>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

const Events = () => {
  return (
    <section className="events">
      <Heading />
      <div className="events-container">
        <div className="cards-list">
          {EventListData.map((item) => (
            <Card
              id={item.id}
              key={item.id}
              heading={item.heading}
              paragraph={item.paragraph}
              image={item.image}
              route={item.route}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
