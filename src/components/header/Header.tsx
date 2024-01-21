import { FaPhoneAlt } from "react-icons/fa";
import "./Header.scss";
import { MdEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { animateScroll } from "react-scroll";
import Sicons from "../social-icons/Sicons";
import { motion } from "framer-motion";
import { contactVariants, iconVariants } from "../../assets/ainmation/Navabar";
import { links } from "./Links";
import Sidebar from "../sidebar/Sidebar";
const Header = () => {
  let hTopRef = useRef(null);
  let nav = useRef(null);
  let header = useRef(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const scrollToTop = () => {
    animateScroll.scrollToTop({ duration: 300, smooth: "easeInOutQuad" });
  };
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

  useEffect(() => {
    if (window.innerWidth <= 1000) {
      setMobileMenu(true);
    } else {
      setMobileMenu(false);
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return mobileMenu ? (
    <Sidebar scrollToTop={scrollToTop} />
  ) : (
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
          <motion.div
            variants={contactVariants}
            initial="initial"
            animate="animate"
            className="nav-top--contact"
          >
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
          </motion.div>
          {/* SOCIAL */}
          <motion.div
            variants={iconVariants}
            initial="initial"
            animate="animate"
          >
            <Sicons />
          </motion.div>
        </div>
        <div className="nav-bottom">
          <div className="logo">
            <img src="/logo.png" alt="NLP Dubai" />
          </div>
          <div className="items">
            <span className="link">
              <NavLink className="link-item" to="/" onClick={scrollToTop}>
                Home
              </NavLink>
            </span>
            <span className="link">
              <NavLink className="link-item" to="about" onClick={scrollToTop}>
                About US
              </NavLink>
            </span>
            {links.map((item) => {
              return (
                <span key={item.id} className="link">
                  <NavLink
                    className="link-item"
                    onClick={scrollToTop}
                    to={`${item.route}`}
                  >
                    {item.heading}
                  </NavLink>
                  <div className="link-dropdown">
                    {item.subHeadings.map((subitem) => (
                      <NavLink
                        className="link-dropdown-item"
                        key={subitem.id}
                        to={`${item.route}/${subitem.id}`}
                      >
                        {subitem.heading}
                      </NavLink>
                    ))}
                  </div>
                </span>
              );
            })}
            <span className="link">
              <NavLink className="link-item" onClick={scrollToTop} to="/blog">
                Blog
              </NavLink>
            </span>
            <span className="link">
              <NavLink
                className="link-item"
                onClick={scrollToTop}
                to="/contact"
              >
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
