import React from "react";
import "./CardOpinion.css";
import news from "../../assets/images/landing/news.jpg";

const cardOpinion = (props) => {
  return (
    <div className="cardOpinon">
      <img src={news} alt="imagen de noticias" />
      <div className="cardOption_dateTitle">
        <h6>{props.title}</h6>
        <time datetime="2022-12-25T19:00">{props.date}</time>
      </div>
        <p>{props.text}</p>
        <a href="#">{props.more}</a>
    </div>
  );
};

export default cardOpinion;
