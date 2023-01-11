import React from 'react';
import './styles/style.css';

const ShuffleQuoteButton = ({shuffleQuote}) => {
  return (
    <button name="shuffle" onClick={shuffleQuote}>🔀</button>
  )

}

export default ShuffleQuoteButton;