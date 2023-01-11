import React from 'react';

const FavoritesButton = ({favStatus, favoriteAQuote}) => {
    return (
      <button name="favorites" onClick={favoriteAQuote}>{favStatus ? '❤️' : '♡'}</button>
    )
}

export default FavoritesButton;