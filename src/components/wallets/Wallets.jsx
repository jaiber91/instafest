import React from "react";
import "./Wallets.css";
import logoMetamask from "../../assets/icons/metamask.svg";
import arrowRight from "../../assets/icons/arrow-up-right.svg";

const Wallets = (props) => {

  const handleClick = () => {
    props.onClick();
  };

  return (
    <>
    <div className="btn_wallets">
      <button className="btn_elements" onClick={handleClick}>
        <div className="btn_elements_title">
          <img src={props.imgLogo} alt="logo de wallet" />
          <span>{props.nameWallet}</span>
        </div>
        <img className="btn_arrow" src={arrowRight} alt="flecha" />
      </button>
    
    </div>
    
    </>
  );
};

export default Wallets;
