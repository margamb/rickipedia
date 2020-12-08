import { useEffect, useState } from 'react';
import rickMortyAPI from './API';

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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Type a character name"
          name="searchTerm"
          type="text"
        />
        <input type="submit" value="Search" />
      </form>
      {characters.map((character) => (
        <div key={character.name}>
          <h1>{character.name}</h1>
        </div>
      ))}
    </div>
  );
}

export default App;
