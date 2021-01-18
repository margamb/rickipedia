import { useEffect, useState } from 'react';
import rickMortyAPI from './API';
import './App.css';
import CharacterCard from './components/CharacterCard';
import Header from './components/Header';
import FavoriteCard from './components/FavoriteCard';
import Pagination from './components/Pagination';

function App() {
  const [characters, setCharacters] = useState([]);
  const [interfaceMode, setInterfaceMode] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [currentPage, setCurrentPage] = useState('home');
  const [searchTerm, setSearchTerm] = useState('');

  const [resultsPage, setResultsPage] = useState(1);
  const [totalResultPages, setTotalResultsPages] = useState(34);

  const [searchResultsPage, setSearchResultsPage] = useState(1);
  const [searchTotalResultsPage, setSearchTotalResultsPage] = useState(1);

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
  };

  useEffect(() => {
    async function fetchCharacters() {
      // Get characters data from API
      const charactersFromApi = await rickMortyAPI.getCharacters(resultsPage);
      // Set character state to that result
      setTotalResultsPages(charactersFromApi.pages);
      setCharacters(charactersFromApi.characters);
    }

    async function searchCharacter() {
      // Get characters data from API
      const charactersFromApi = await rickMortyAPI.searchCharacter(
        searchTerm,
        searchResultsPage
      );

      // Set character state to that result
      setSearchTotalResultsPage(charactersFromApi.pages);
      setCharacters(charactersFromApi.characters);
    }
    if (interfaceMode !== 'search') {
      fetchCharacters();
    } else {
      searchCharacter();
    }
  }, [resultsPage, searchTerm, searchResultsPage, interfaceMode]);

  async function handleSubmit(ev) {
    ev.preventDefault();
    const { value } = ev.target.elements.searchTerm;
    setSearchTerm(value);
    setInterfaceMode('search');
  }

  function handlePageUp() {
    if (interfaceMode === 'search') {
      setSearchResultsPage(searchResultsPage + 1);
    } else {
      setResultsPage(resultsPage + 1);
    }
  }

  function handlePageDown() {
    if (interfaceMode === 'search') {
      setSearchResultsPage(searchResultsPage - 1);
    } else {
      setResultsPage(resultsPage - 1);
    }
  }

  if (currentPage === 'home') {
    return (
      <main className="body">
        <Header
          setCurrentPage={setCurrentPage}
          handleSubmit={handleSubmit}
          currentPage={currentPage}
        />
        {interfaceMode === 'search' && (
          <>
            <p>Seeing results for {searchTerm}</p>
            <button
              onClick={() => {
                setInterfaceMode('');
                setSearchTerm('');
              }}
            >
              Reset Search
            </button>
          </>
        )}
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
        <Pagination
          resultsPage={
            interfaceMode !== 'search' ? resultsPage : searchResultsPage
          }
          totalPages={
            interfaceMode !== 'search'
              ? totalResultPages
              : searchTotalResultsPage
          }
          onPageUp={handlePageUp}
          onPageDown={handlePageDown}
        />
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
