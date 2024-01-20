import Heading from "../../components/page-heading/Heading";
import EventListData from "./EventListData";
import "./Events.scss";

const Card = ({ heading, paragraph, image }) => {
  return (
    <div className="e-card">
      <div className="image">
        <img src={`/${image}`} alt="NLP Couching" />
      </div>
      <div className="text">
        <h2>{heading}</h2>
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
              key={item.id}
              heading={item.heading}
              paragraph={item.paragraph}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
