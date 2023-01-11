import React from 'react';

const ShuffleQuoteButton = ({shuffleQuote}) => {
  return (
    <button name="shuffle" onClick={shuffleQuote}>🔀</button>
  )

}

export default ShuffleQuoteButton;