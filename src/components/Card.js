import React from "react";
import PinIcon from "../assets/pin-icon.svg";

const Card = (props) => {
  const searchTerm = props.title.replaceAll(` `, `+`);

  return (
    <div className="card">
      <div className="photo-container">
        <img
          src={`../assets/${props.id}.jpg`}
          className="photo"
          alt={props.title}
        />
      </div>
      <div className="content">
        <div className="location">
          <img src={PinIcon} aria-hidden="true" />
          <span className="country">{props.country}</span>

          <a
            href={`https://www.google.com/maps/search/${searchTerm}`}
            className="google-maps">
            View on Google Maps
          </a>
        </div>
        <h2 className="card-title">{props.title}</h2>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
