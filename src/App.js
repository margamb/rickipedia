import { useEffect, useState } from 'react';
import rickMortyAPI from './API';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchCharacters() {
      // Get characters data from API
      const characters = await rickMortyAPI.getCharacters();
      // Set character state to that result
      setCharacters(characters);
    }
    fetchCharacters();
  }, []);

  return (
    <div>
      <input type="text" />
      {characters.map((character) => (
        <div key={character.name}>
          <h1>{character.name}</h1>
        </div>
      ))}
    </div>
  );
}

export default App;
