import React from "react";
import "./Faqs.css";
import arrowdown from "../../assets/icons/arrow-down.svg";

const Faqs = (props) => {
  return (
    <div className="faqs">
      <div className="faqs_list">
        <span>{props.number +"."}</span>
        <div>
          <buttom>
            <div>{props.questions}</div>
            <div  className="faqs_arrow">
              <img src={arrowdown} alt="arrow" />
            </div>
          </buttom>
        </div>
        <div className="faqs_line"></div>
      </div>
    </div>
  );
};

export default Faqs;
