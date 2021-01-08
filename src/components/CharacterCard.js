import React from 'react';
import dead from '../images/dead1.png';
import alive from '../images/alive.png';
import './CharacterCard.css';

const CharacterCard = ({ character, isFavorite, onFavorited }) => {
  return (
    <div className="card">
      <div key={character.name}>
        <div className="headerCard">
          <h1 className="titleCharacter">{character.name}</h1>
          <i
            onClick={() => {
              onFavorited({
                id: character.id,
                name: character.name,
                image: character.image,
              });
            }}
            className={`fa ${
              isFavorite ? 'fa-heart heart-fav' : 'fa-heart-o heart'
            } `}
            aria-hidden="true"
          ></i>
        </div>
        <div className="relative">
          <img
            className="imgCharacter"
            src={character.image}
            alt={character.name}
          />
          <img
            className="imgStatus"
            alt={character.status}
            src={character.status === 'Alive' ? alive : dead}
          />
        </div>

        <div className="genderCharacter">
          <p>
            {character.species} {character.gender}
          </p>
          <p className="status">{character.status}</p>
        </div>

        <p className="originCharacter">
          <span className="typeGrey">Origin:</span> {character.origin.name}
        </p>
        <p className="locationCharacter">
          <span className="typeGrey">Location:</span> {character.location.name}
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;
