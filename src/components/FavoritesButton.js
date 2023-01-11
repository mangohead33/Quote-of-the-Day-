import React from 'react';
import './styles/style.css';

const FavoritesButton = ({favStatus, favoriteAQuote}) => {
    return (
      <button name="favorites" onClick={favoriteAQuote}>{favStatus ? '❤️' : '♡'}</button>
    )
}

export default FavoritesButton;