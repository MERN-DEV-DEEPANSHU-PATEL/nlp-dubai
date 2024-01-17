import { FaPhoneAlt } from "react-icons/fa";
import "./Header.scss";
import { MdEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";
import { animateScroll } from "react-scroll";
import Sicons from "../social-icons/Sicons";

const Header = () => {
  let hTopRef = useRef(null);
  let nav = useRef(null);
  let header = useRef(null);

  const scrollToTop = () => {
    animateScroll.scrollToTop({ duration: 300, smooth: "easeInOutQuad" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const navTopHeight = hTopRef.current.clientHeight;

      if (scrollY > navTopHeight) {
        // User scrolled down
        header.current.classList.add("header-fixed");
      } else {
        // User scrolled back to top
        header.current.classList.remove("header-fixed");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header ref={header}>
      <nav
        className={`nav ${
          header.current && header.current.classList.contains("header-fixed")
            ? "nav-fixed"
            : ""
        }`}
        ref={nav}
      >
        <div className="nav-top" ref={hTopRef}>
          {/* CONTACT */}
          <div className="nav-top--contact">
            <span className="c-item">
              <FaPhoneAlt />
              <a href="tel:+971 4 8525752, +971 50 670 5615">
                +971 4 8525752, +971 50 670 5615
              </a>
            </span>
            <span className="c-item">
              <MdEmail />
              <a href="mailto:nlptraining@uvconsultants.com">
                nlptraining@uvconsultants.com
              </a>
            </span>
          </div>
          {/* SOCIAL */}
          <Sicons />
        </div>
        <div className="nav-bottom">
          <div className="logo">
            <img src="/logo.png" alt="NLP Dubai" />
          </div>
          <div className="items">
            <span className="link">
              <NavLink to="/" onClick={scrollToTop}>
                Home
              </NavLink>
            </span>
            <span className="link">
              <NavLink to="about" onClick={scrollToTop}>
                About US
              </NavLink>
            </span>
            <span className="link">
              <NavLink onClick={scrollToTop} to="/courses">
                Courses
              </NavLink>
            </span>
            <span className="link">
              <NavLink onClick={scrollToTop} to="/training">
                Training
              </NavLink>
            </span>
            <span className="link">
              <NavLink onClick={scrollToTop} to="/events">
                Events
              </NavLink>
            </span>
            <span className="link">
              <NavLink onClick={scrollToTop} to="/blog">
                Blog
              </NavLink>
            </span>
            <span className="link">
              <NavLink onClick={scrollToTop} to="/contact">
                Contact
              </NavLink>
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
