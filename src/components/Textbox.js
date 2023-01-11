import React, {useState} from 'react';
import ShuffleQuoteButton from './ShuffleQuoteButton.js';
import FavoritesButton from './FavoritesButton.js';

function Textbox({quote, shuffleQuote, favStatus, favoriteAQuote}) {
  return (
    <div>
  <div>{quote[0]}</div>
  <FavoritesButton favStatus={favStatus} favoriteAQuote={favoriteAQuote}/>
  <ShuffleQuoteButton shuffleQuote={shuffleQuote}/>
  </div>
  );
}
export default Textbox;