import React from 'react';
import './FavoriteCard.css';

const FavoriteCard = ({ id, image, name, onFavorited }) => {
  return (
    <div className="fav">
      <i
        onClick={() => {
          onFavorited({
            id,
            name,
            image,
          });
        }}
        className="fa fa-heart heartFav"
        aria-hidden="true"
      ></i>
      <img className="image" src={image} alt={name} />
      <h3 className="nameFav">{name}</h3>
    </div>
  );
};

export default FavoriteCard;
