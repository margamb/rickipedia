import { useEffect, useState } from 'react';
import rickMortyAPI from './API';
import './App.css';
import dead from './images/dead1.png';
import alive from './images/alive.png';
function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchCharacters() {
      // Get characters data from API
      const charactersFromApi = await rickMortyAPI.getCharacters();
      // Set character state to that result
      setCharacters(charactersFromApi);
    }
    fetchCharacters();
  }, []);

  async function handleSubmit(ev) {
    ev.preventDefault();
    const { value } = ev.target.elements.searchTerm;
    const characters = await rickMortyAPI.searchCharacter(value);
    setCharacters(characters);
  }

  return (
    <div className="body">
      <div className="header">
        <h1>Rickipedia</h1>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Type a character name"
            name="searchTerm"
            type="text"
          />
          <input type="submit" value="Search" />
        </form>
      </div>
      <div className="cards">
        {characters.map((character) => (
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
                <span className="typeGrey">Origin:</span>{' '}
                {character.origin.name}
              </p>
              <p className="locationCharacter">
                <span className="typeGrey">Location:</span>{' '}
                {character.location.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
