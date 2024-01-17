// Error404.jsx

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Error404.scss";

const Error404 = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(8);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    controls.start({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 1,
      },
    });

    return () => clearInterval(interval);
  }, [controls]);

  useEffect(() => {
    if (countdown === 0) {
      navigate("/");
    }
  }, [countdown, navigate]);

  return (
    <motion.div
      className="error404-container"
      initial={{ opacity: 0, y: -20, scale: 0.8 }}
      animate={controls}
    >
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for might be in another universe.</p>
      <p>Redirecting to the home page in {countdown} seconds...</p>
    </motion.div>
  );
};

export default Error404;
