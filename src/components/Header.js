import React from 'react';
import logoRikMorty from '../images/logoRickMorty.png';
import './Header.css';

const Header = ({ handleSubmit, setCurrentPage, currentPage }) => {
  function changeFavorites() {
    setCurrentPage('favorites');
  }

  function changeHome() {
    setCurrentPage('home');
  }

  return (
    <header className="header">
      <img
        className="logoRickMorty logoRickiHide"
        src={logoRikMorty}
        alt="Rickipedia logo"
        title="Rickipedia"
      />
      <div className="title">
        <h1 className="titleRickipedia">Rickipedia</h1>
      </div>
      <nav>
        <i
          onClick={changeHome}
          className={`fa fa-home ${
            currentPage === 'home' ? 'homeHeaderAct' : 'homeHeader'
          }`}
          aria-hidden="true"
        ></i>
        <i
          onClick={changeFavorites}
          className={`fa fa-heart ${
            currentPage === 'favorites' ? 'heartHeaderAct' : 'heartHeader'
          }`}
          aria-hidden="true"
        ></i>
      </nav>
      {/* si aparece handleSubmit que aparezca el buscador -> por eso utilizamos el ternario si no un div con el mismo tamaño */}
      {handleSubmit ? (
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
      ) : (
        <div style={{ width: '319px' }} />
      )}
    </header>
  );
};

export default Header;
