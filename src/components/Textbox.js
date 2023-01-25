import React, {useState} from 'react';
import ShuffleQuoteButton from './ShuffleQuoteButton.js';
import FavoritesButton from './FavoritesButton.js';
import './styles/style.css'

function Textbox({quote, shuffleQuote, favStatus, favoriteAQuote}) {
  return (
    <>
  <div className="quote-box">{quote[0]}</div>
  <div className="buttons-container">
  <FavoritesButton favStatus={favStatus} favoriteAQuote={favoriteAQuote}/>
  <ShuffleQuoteButton shuffleQuote={shuffleQuote}/>
  </div>
  </>
  );
}
export default Textbox;