import { useParams } from "react-router-dom";
import "./SingleEvent.scss";
import Template1 from "./template-1/Template1";
import Template2 from "./template-2/Template2";

const SingleEvent = () => {
  const { id } = useParams();
  if (id == 1 || id == 0) return <Template1 />;
  else return <Template2 />;
};

export default SingleEvent;
