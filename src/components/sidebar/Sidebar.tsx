import { motion } from "framer-motion";
import "./Sidebar.scss";
import ToggleBtn from "./toggleBtn/ToggleBtn";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { links } from "../header/Links";
import {
  SidebarLinksItemVariants,
  SidebarLinksVariants,
  SidebarVariants,
} from "../../assets/ainmation/Navabar";
const Sidebar = ({ scrollToTop }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.header className="sidebar" animate={open ? "open" : "closed"}>
      <motion.nav className="sideNav" variants={SidebarVariants}>
        <motion.div variants={SidebarLinksVariants} className="sideNav-links">
          <motion.span variants={SidebarLinksItemVariants} className="link">
            <NavLink className="link-item" to="/" onClick={scrollToTop}>
              Home
            </NavLink>
          </motion.span>
          <motion.span variants={SidebarLinksItemVariants} className="link">
            <NavLink className="link-item" to="about" onClick={scrollToTop}>
              About US
            </NavLink>
          </motion.span>
          {links.map((item) => {
            return (
              <motion.span
                key={item.id}
                variants={SidebarLinksItemVariants}
                className="link"
              >
                <NavLink
                  className="link-item"
                  onClick={scrollToTop}
                  to={`${item.route}`}
                >
                  {item.heading}
                </NavLink>
                <div className="link-dropdown">
                  <NavLink className="link-dropdown-item" to={`${item.route}`}>
                    Go To {item.heading}
                  </NavLink>
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
              </motion.span>
            );
          })}
          <motion.span variants={SidebarLinksItemVariants} className="link">
            <NavLink className="link-item" onClick={scrollToTop} to="/blog">
              Blog
            </NavLink>
          </motion.span>
          <motion.span variants={SidebarLinksItemVariants} className="link">
            <NavLink className="link-item" onClick={scrollToTop} to="/contact">
              Contact
            </NavLink>
          </motion.span>
        </motion.div>
      </motion.nav>
      <ToggleBtn setOpen={setOpen} />
    </motion.header>
  );
};

export default Sidebar;
