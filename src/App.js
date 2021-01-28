import { useState } from 'react';

import './App.css';
import Favorites from './views/Favorites';
import Home from './views/Home';

function App() {
  const [favorites, setFavorites] = useState([]);
  const [currentPage, setCurrentPage] = useState('home');

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

  if (currentPage === 'home') {
    return (
      <Home
        isFavorite={isFavorite}
        handleFavorited={handleFavorited}
        setCurrentPage={setCurrentPage}
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
