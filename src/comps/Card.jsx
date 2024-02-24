import "./Card.css";
import React from "react";

const Card = ({ head, body }) => {
  return (
    <div className="card">
      <h2 className="gradient_text">{head}</h2>
      <p>{body}</p>
    </div>
  );
};

export default Card;
