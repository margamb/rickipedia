import { useEffect, useState } from 'react';
import rickMortyAPI from './API';
import './App.css';
import logoRikMorty from './images/logoRickMorty.png';
import CharacterCard from './components/CharacterCard';

function App() {
  const [characters, setCharacters] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [currentPage, setCurrentPage] = useState('home');

  // setCurrentPage('favorite')

  const handleFavorited = ({ id, name, image }) => {
    // si la id del objeto esta en favoritos quitarla
    const favIndex = favorites.findIndex(
      ({ id: currentId }) => currentId === id
    );
    if (favIndex === -1) {
      favorites.push({ id, name, image });
    } else {
      favorites.splice(favIndex, 1);
    }
    setFavorites([...favorites]);
    console.log('Favorites set to ', favorites);
  };

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
          alt="Rickipedia logo"
          title="Rickipedia"
        />
        <div className="title">
          <h1 className="titleRickipedia">Rickipedia</h1>
          <i class="fa fa-home homeHeader" aria-hidden="true"></i>
          <i class="fa fa-heart heartHeader" aria-hidden="true"></i>
        </div>

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
          <CharacterCard
            key={character.id}
            character={character}
            onFavorited={handleFavorited}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
