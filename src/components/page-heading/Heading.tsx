import { useLocation } from "react-router-dom";
import "./Heading.scss";

const Heading = ({ extraText = false }) => {
  const { pathname } = useLocation();
  return (
    <div className="page-heading">
      {pathname.split("/")[1]} {extraText ? extraText : ""}
    </div>
  );
};

export default Heading;
