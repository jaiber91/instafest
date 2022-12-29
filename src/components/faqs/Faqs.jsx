import React from "react";
import "./Faqs.css";
import arrowdown from "../../assets/icons/arrow-down.svg";

const Faqs = ({props}) => {
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
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, quibusdam provident molestias architecto impedit deleniti iste perspiciatis nesciunt magnam nihil cupiditate minus culpa hic dolor dolores illo numquam officiis ipsum!</p>
          </buttom>
        </div>
        <div className="faqs_line"></div>
      </div>
    </div>
  );
};

export default Faqs;
