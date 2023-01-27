import React from "react";
import PinIcon from "../assets/pin-icon.svg";

const Card = (props) => {
  const searchTerm = props.title.replaceAll(` `, `+`);
  console.log(props.title);

  return (
    <div className="card">
      <img src={`../assets/${props.id}.jpg`} className="photo" />
      <div className="content">
        <div className="location">
          <img src={PinIcon} />
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
