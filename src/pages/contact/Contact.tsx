import { FaLocationDot } from "react-icons/fa6";
import Heading from "../../components/page-heading/Heading";
import "./Contact.scss";
import { IoMdCall } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
  return (
    <section className="contact">
      <Heading />
      <div className="contact__container">
        <div className="info">
          <h1>Contact Information</h1>
          <hr />
          <img src="logo.png" alt="NLP Training Dubai" />
          <div className="item">
            <span>
              <FaLocationDot />
            </span>
            <span> Powered by UV Consultants LLC FZ</span>
          </div>
          <div className="item">
            <span>
              <FaLocationDot />
            </span>
            <span> P.O.Box 49528, Dubai, UAE.</span>
          </div>
          <div className="item">
            <span>
              <IoMdCall />
            </span>
            <span> +971 4 8525752, +971 50 670 5615</span>
          </div>
          <div className="item">
            <span>
              <MdOutlineMail />
            </span>
            <span> nlptraining@uvconsultants.com</span>
          </div>
        </div>
        <div className="inputs">
          <h1>send a message</h1>
          <hr />
          <div className="inputs__container">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <input type="text" placeholder="Phone No." />
            <input type="text" id="message" placeholder="Message" />
            <button className="btn-submit">Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
