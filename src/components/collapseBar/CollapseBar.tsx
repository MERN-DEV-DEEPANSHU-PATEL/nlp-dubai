import { useState } from "react";
import "./CollapseBar.scss";

const CollapseBar = () => {
  const [open, setOpen] = useState("");

  return (
    <div className={`collapse-card ${open}`}>
      <div className="collapse-card-items">
        <h5
          onClick={() => setOpen((prev) => (prev === "open" ? "" : "open"))}
          className="collapse-card-item"
        >
          About ICF – International Coaching Federation
        </h5>
        <div className="card_body ">
          <p
            id="viewer-f4li11936999"
            className="-Zro6 -ZADH IjV6v AnCKd _57WYp"
          >
            <span className="d0767">
              The International Coaching Federation (ICF) is the leading global
              organization for coaches and coaching. ICF is dedicated to
              advancing the coaching profession by setting high standards,
              providing independent certification and building a worldwide
              network of trained coaching professionals. ICF offers globally
              recognized, independent credentialing program for coach
              practitioners. ICF Credentials are awarded to professional coaches
              who have met stringent education and experience requirements and
              have demonstrated a thorough understanding of the coaching
              competencies that set the standard in the profession. Achieving
              credentials through ICF signifies a coach’s commitment to
              integrity, understanding and mastery of coaching skills, and
              dedication to clients.
            </span>
          </p>
          <p
            id="viewer-wrzeq1937000"
            className="-Zro6 -ZADH IjV6v AnCKd _57WYp"
          >
            <span className="d0767">
              ICF also accredits programs that deliver coach-specific training.
              ICF-accredited training programs must complete a rigorous review
              process and demonstrate that their curriculum aligns with the ICF
              Core Competencies and Code of Ethics. ICF is consistently
              recognized among coaching professionals worldwide for:
            </span>
          </p>
          <ul className="xErDo AnCKd">
            <li className="_04hd2 IjV6v" dir="auto">
              <div>
                <p
                  id="viewer-zlbst1937002"
                  className="-Zro6 -ZADH IjV6v AnCKd _57WYp"
                >
                  <span className="d0767">
                    Developing coaching core competencies
                  </span>
                </p>
              </div>
            </li>
            <li className="_04hd2 IjV6v" dir="auto">
              <div>
                <p
                  id="viewer-mdzm51937004"
                  className="-Zro6 -ZADH IjV6v AnCKd _57WYp"
                >
                  <span className="d0767">
                    Establishing a professional code of ethics and standards
                  </span>
                </p>
              </div>
            </li>
            <li className="_04hd2 IjV6v" dir="auto">
              <div>
                <p
                  id="viewer-7i9f41937006"
                  className="-Zro6 -ZADH IjV6v AnCKd _57WYp"
                >
                  <span className="d0767">
                    Creating an internationally recognized credentialing program
                  </span>
                </p>
              </div>
            </li>
            <li className="_04hd2 IjV6v" dir="auto">
              <div>
                <p
                  id="viewer-wp9qc1937008"
                  className="-Zro6 -ZADH IjV6v AnCKd _57WYp"
                >
                  <span className="d0767">
                    Setting guidelines through accreditation for coach-specific
                    training programs
                  </span>
                </p>
              </div>
            </li>
            <li className="_04hd2 IjV6v" dir="auto">
              <div>
                <p
                  id="viewer-fl0bf1937010"
                  className="-Zro6 -ZADH IjV6v AnCKd _57WYp"
                >
                  <span className="d0767">
                    Providing continuous education through world-class events,
                    Communities of Practice (CPs) and archived learning
                  </span>
                </p>
              </div>
            </li>
            <li className="_04hd2 IjV6v" dir="auto">
              <div>
                <p
                  id="viewer-90s351937012"
                  className="-Zro6 -ZADH IjV6v AnCKd _57WYp"
                >
                  <span className="d0767">
                    Leading and informing conversations about the future of
                    coaching.
                  </span>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CollapseBar;
