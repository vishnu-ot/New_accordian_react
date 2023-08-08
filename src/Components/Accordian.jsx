import React, { useState } from "react";
import "./Accordian.css";
function Accordian({ faq }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const itemClickHandle = (index) => {
    setActiveIndex((prevInd) => (prevInd === index ? null : index));
    // console.log(activeIndex, "Active index");
    // console.log(index, "current index");
  };

  return (
    <div className="main-box">
      <img
        src={window.location.origin + "/images/image 1.jpg"}
        alt=""
        className="hero-image"
      />
      <h1 className="heading">FAQ</h1>
      {faq.map((item, index) => {
        return (
          <div key={index}>
            <div
              onClick={() => itemClickHandle(index)}
              className="question-class"
            >
              {item.title}
              {activeIndex === index ? <spn>-</spn> : <spn>+</spn>}
            </div>
            {activeIndex === index && (
              <div className="answer-class">{item.content}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Accordian;
