import React from "react";
import { IoIosPin } from "react-icons/io";

const Card = (props) => {
  const searchTerm = props.title.replaceAll(` `, `+`); //Is there an easier way to do this automatically? It mostly works except for the Paris link

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
          <IoIosPin aria-hidden="true" className="pin" />
          <span className="country">{props.country}</span>

          <a
            target="_blank"
            rel="noopener noreferrer"
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
