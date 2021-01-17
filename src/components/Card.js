import React from "react";
import "../style/Card.css";

function Card(props) {
  return (
    <div>
      <div className="Waycard">
        <img src={props.imagesrc} alt="Avatar" className="wayImage" />
        <div className="waycool_container">
          <h4 className="coolway_name">{props.name}</h4>
          <p className="coolway_title">{props.title}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
