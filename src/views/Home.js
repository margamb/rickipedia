import React from 'react';
import Header from '../components/Header';
import CharacterCard from '../components/CharacterCard';
import Pagination from '../components/Pagination';

const Home = ({
  setCurrentPage,
  handleSubmit,
  interfaceMode,
  searchTerm,
  setInterfaceMode,
  setSearchTerm,
  characters,
  isFavorite,
  handleFavorited,
  resultsPage,
  searchResultsPage,
  totalResultPages,
  searchTotalResultsPage,
  handlePageDown,
  handlePageUp,
}) => {
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
