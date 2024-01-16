import { Link } from "react-router-dom";
import Sicons from "../social-icons/Sicons";
import { FaTelegramPlane } from "react-icons/fa";
import { animateScroll } from "react-scroll";
import "./Footer.scss";
const Footer = () => {
  const scrollToTop = () => {
    animateScroll.scrollToTop({ duration: 300, smooth: "easeInOutQuad" });
  };
  return (
    <section className="footer">
      <div className="footer-cols">
        <div className="footer-cols--col-1">
          <img src="logo.png" alt="NLP Dubai" />
          <p>powered by</p>
          <img src="img.png" alt="UV consultants" />
          <Sicons />
        </div>
        <div className="footer-cols--col">
          <h3>UseFul Links</h3>
          <ul className="footer-cols--col-links">
            <li>
              <Link onClick={scrollToTop} to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to={"/about"}>
                About
              </Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to={"/events"}>
                Event Details
              </Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to={"/courses"}>
                Courses
              </Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to={"/training"}>
                Training
              </Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to={"/contact"}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-cols--col">
          <h3>Newsletter</h3>
          <div className="inputs">
            <input type="text" placeholder="Enter you Email Here" />
            <button>
              <FaTelegramPlane />
            </button>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        &copy; Copyright NLPTrainingDubai 2018. All Right Reserved. Designed and
        Developed by <Link to="">SyStos Technology</Link>
      </div>
    </section>
  );
};

export default Footer;
