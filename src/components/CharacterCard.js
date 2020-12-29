import React from 'react';

import dead from '../images/dead1.png';
import alive from '../images/alive.png';

const CharacterCard = ({ character }) => {
  return (
    <div className="card">
      <div key={character.name}>
        <div className="headerCard">
          <h1 className="titleCharacter">{character.name}</h1>
          <i class="fa fa-heart-o heart" aria-hidden="true"></i>
          {/* <i class="fa fa-heart" aria-hidden="true"></i> */}
        </div>
        <div className="relative">
          <img className="imgCharacter" src={character.image} />
          <img
            className="imgStatus"
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
