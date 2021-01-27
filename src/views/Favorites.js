import React from 'react';
import Header from '../components/Header';
import FavoriteCard from '../components/FavoriteCard';

const Favorites = ({
  setCurrentPage,
  favorites,
  handleFavorited,
  isFavorite,
}) => {
  return (
    <div>
      <Header setCurrentPage={setCurrentPage} currentPage="favorites" />
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
};

export default Favorites;
