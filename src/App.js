import { useEffect, useState } from 'react';
import rickMortyAPI from './API';
import './App.css';
import logoRikMorty from './images/logoRickMorty.png';
import CharacterCard from './components/CharacterCard';

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
    <main className="body">
      <header className="header">
        <img
          className="logoRickMorty logoRickiHide"
          src={logoRikMorty}
          title="Rickipedia"
        />
        <h1 className="titleRickipedia">Rickipedia</h1>
        <form onSubmit={handleSubmit}>
          <div className="input">
            <input
              className="inputText"
              placeholder="Type a character name"
              name="searchTerm"
              type="text"
            />

            <input className="inputSearch" type="submit" value="" />
            <i className="fa fa-search searchImg" aria-hidden="true"></i>
          </div>
        </form>
      </header>
      <div className="cards">
        {characters.map((character) => (
          <CharacterCard character={character} />
        ))}
      </div>
    </main>
  );
}

export default App;
