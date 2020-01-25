import React from "react";
import "./cards.css";

function Card(props) {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={props.src}
        alt={props.name}
        onClick={() => props.clickPicture(props.id)}
      />
    </div>
  );
}

export default Card;
