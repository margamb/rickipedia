import { useEffect, useState } from 'react';
import rickMortyAPI from './API';
import './App.css';
import Favorites from './views/Favorites';
import Home from './views/Home';

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
      <Home
        characters={characters}
        isFavorite={isFavorite}
        handleFavorited={handleFavorited}
        handlePageDown={handlePageDown}
        handlePageUp={handlePageUp}
        handleSubmit={handleSubmit}
        totalResultPages={totalResultPages}
        setCurrentPage={setCurrentPage}
        interfaceMode={interfaceMode}
        searchTerm={searchTerm}
        setInterfaceMode={setInterfaceMode}
        setSearchTerm={setSearchTerm}
        resultsPage={resultsPage}
        searchResultsPage={searchResultsPage}
        searchTotalResultsPage={searchTotalResultsPage}
      />
    );
  } else {
    return (
      <Favorites
        setCurrentPage={setCurrentPage}
        favorites={favorites}
        handleFavorited={handleFavorited}
        isFavorite={isFavorite}
      />
    );
  }
}

export default App;
