import { useLocation } from "react-router-dom";
import "./Heading.scss";

const Heading = ({ headingText = false, extraText = false }) => {
  const { pathname } = useLocation();
  return (
    <div className="page-heading">
      {headingText ? headingText : pathname.split("/")[1]}{" "}
      {extraText ? extraText : ""}
    </div>
  );
};

export default Heading;
