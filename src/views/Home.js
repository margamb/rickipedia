import React from 'react';
import { useEffect, useState } from 'react';
import rickMortyAPI from '../API';
import Header from '../components/Header';
import CharacterCard from '../components/CharacterCard';
import Pagination from '../components/Pagination';

const Home = ({
  setCurrentPage,

  isFavorite,
  handleFavorited,
}) => {
  const [characters, setCharacters] = useState([]);
  const [resultsPage, setResultsPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [interfaceMode, setInterfaceMode] = useState('');
  const [totalResultPages, setTotalResultsPages] = useState(34);
  const [searchResultsPage, setSearchResultsPage] = useState(1);
  const [searchTotalResultsPage, setSearchTotalResultsPage] = useState(1);

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
  return (
    <main className="body">
      <Header
        setCurrentPage={setCurrentPage}
        handleSubmit={handleSubmit}
        currentPage="home"
      />
      {interfaceMode === 'search' && (
        <div className="searchMode">
          <p className="searchMode-title">
            Seeing results for{' '}
            <span className="searchMode-word">{searchTerm}</span>
          </p>
          <button
            className="searchMode-btn"
            onClick={() => {
              setInterfaceMode('');
              setSearchTerm('');
            }}
          >
            reset
          </button>
        </div>
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
          interfaceMode !== 'search' ? totalResultPages : searchTotalResultsPage
        }
        onPageUp={handlePageUp}
        onPageDown={handlePageDown}
      />
    </main>
  );
};

export default Home;
