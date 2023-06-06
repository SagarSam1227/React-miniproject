import React from "react";
import {Link} from 'react-router-dom';

export const Card = ({ card }) => {
  return (
    <div className="card">
      <Link to={`/product/111`}>
      <img
        className="card-img-top"
        src={card.images.portraitURL}
        alt="Card image cap"
        ></img>
        </Link>
      <div className="card-body">
        <h4 className="card-title">{card.title}</h4>
        <h5>{card.subtitle}</h5>
        <h3>{card?.price?.currentPrice} ₹</h3>
      </div>
    </div>
  );
};
