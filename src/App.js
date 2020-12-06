import { useEffect, useState } from 'react';

const charachtersUrl = 'https://rickandmortyapi.com/api/character';
const locationsUrl = 'https://rickandmortyapi.com/api/location';

const rickMortyAPI = {
  getCharacters: async function fetchCharacters() {
    const res = await fetch(charachtersUrl);
    const data = await res.json();
    return data.results;
    // return fetch(charachtersUrl).then((res) => res.json());
  },

  getLocation: async function fetchCharacters() {
    const res = await fetch(locationsUrl);
    const data = await res.json();
    return data.results;
  },
};

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
