import Card from "../../components/card/Card";
import Heading from "../../components/page-heading/Heading";
import "./Training.scss";
import TListData from "./TrainingListData";

const Training = () => {
  return (
    <section className="training">
      <Heading />
      <div className="taining__container">
        {TListData.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            image={item.image}
            heading={item.heading}
            subText={item.subtext}
          />
        ))}
      </div>
    </section>
  );
};

export default Training;
