import React, { useState } from "react";
import "./Faqs.css";
import arrowdown from "../../assets/icons/arrow-down.svg";
import arrowsky from "../../assets/icons/arrow-sky.svg";

const Faqs = ({props}) => {
  let[open, setOpen]=useState(false);

  const clickOpen= ()=>{
    setOpen(!open)
  }

  return (
    <div className="faqs">
      <div className="faqs_list">
          <button  onClick={() => clickOpen()}>
            <span>{props.number +"."}</span>
            <div className="faqs-icons">
              <p className="faqs--p">{props.questions}</p>
              <div  className="faqs_arrow">
                {
                  open ? 
                    <img src={arrowsky} alt="arrow" /> : 
                    <img src={arrowdown} alt="arrow" />
                }
                
              </div>
            </div>
          </button>
            <p className={ open ? '' : 'close'}>{props.response}</p>
        <div className="faqs_line"></div>
      </div>
    </div>
  );
};

export default Faqs;
