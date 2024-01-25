import { useState } from "react";
import "./CollapseBar.scss";

const CollapseBar = ({ heading, paragraph }) => {
  const [open, setOpen] = useState("");

  return (
    <div className={`collapse-card ${open}`}>
      <div className="collapse-card-items">
        <h5
          onClick={() => setOpen((prev) => (prev === "open" ? "" : "open"))}
          className="collapse-card-item"
        >
          {heading}
        </h5>
        <div
          className="text_content"
          dangerouslySetInnerHTML={{ __html: paragraph }}
        ></div>
      </div>
    </div>
  );
};

export default CollapseBar;
