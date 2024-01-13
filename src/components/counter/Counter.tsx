import { useState } from "react";
import "./Counter.scss";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
const Counter = () => {
  const [animate, setAnimate] = useState(true);

  const CValue = ({ value, text }) => (
    <div>
      <span className="numText">
        <CountUp start={0} end={value} delay={0} />+
      </span>
      <span className="letText">{text}</span>
    </div>
  );
  return (
    <ScrollTrigger
      onEnter={() => setAnimate(true)}
      onExit={() => setAnimate(false)}
    >
      <section className="counter">
        <div className="text">
          <h1>We are always ahead.</h1>
          <h2>Professional Solutions for Your Business.</h2>
        </div>

        <div className="numbers">
          {animate ? <CValue value={40} text={"COUNTRIES"} /> : ""}
          {animate ? <CValue value={80} text={"CITIES"} /> : ""}
          {animate ? (
            <CValue value={650} text={"COACHES CERTIFIED YEARLY"} />
          ) : (
            ""
          )}
          {animate ? <CValue value={100} text={"EVENT ORGANIZED"} /> : ""}
        </div>
      </section>
      ;
    </ScrollTrigger>
  );
};

export default Counter;
