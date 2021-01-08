import { useEffect, useState } from 'react';
import rickMortyAPI from './API';
import './App.css';
import CharacterCard from './components/CharacterCard';
import Header from './components/Header';
import FavoriteCard from './components/FavoriteCard';

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

  const isFavorite = (id) => {
    const favIndex = favorites.findIndex(
      ({ id: currentId }) => currentId === id
    );

    return favIndex !== -1;
    // return favIndex !== -1 ? true : false
    // Aqui si que haria falta el condicional porque no queremos devolver un boolean directamente
    // return favIndex !== -1 ? "ON" : "OFF"
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

  if (currentPage === 'home') {
    return (
      <main className="body">
        <Header
          setCurrentPage={setCurrentPage}
          handleSubmit={handleSubmit}
          currentPage={currentPage}
        />
        <div className="cards">
          {characters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              isFavorite={isFavorite(character.id)}
              onFavorited={handleFavorited}
            />
          ))}
        </div>
      </main>
    );
  } else {
    return (
      <div>
        <Header setCurrentPage={setCurrentPage} currentPage={currentPage} />
        <h1 className="titleFav">My favorites list</h1>;
        <div className="allFavs">
          {favorites.map((favorite) => (
            <FavoriteCard
              key={favorite.id}
              name={favorite.name}
              image={favorite.image}
              id={favorite.id}
              onFavorited={handleFavorited}
              isFavorite={isFavorite(favorite.id)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
