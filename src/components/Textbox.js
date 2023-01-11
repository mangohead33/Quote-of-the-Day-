import React, {useState} from 'react';
import ShuffleQuoteButton from './ShuffleQuoteButton.js';
import FavoritesButton from './FavoritesButton.js';
import './styles/style.css'

function Textbox({quote, shuffleQuote, favStatus, favoriteAQuote}) {
  return (
    <>
  <div class="quote-style">{quote[0]}</div>
  <div class="button-container">
  <FavoritesButton favStatus={favStatus} favoriteAQuote={favoriteAQuote}/>
  <ShuffleQuoteButton shuffleQuote={shuffleQuote}/>
  </div>
  </>
  );
}
export default Textbox;