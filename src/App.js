import React, {useState, useEffect} from 'react';
import Textbox from './components/Textbox.js';

// quote = ["quote", favorite: boolean]
let quotes = [
  ['to die or not to die', false],
  ['better in than out as i always say', false],
  ['hey wheres the beef', false],
  ['cowabunga', false],
  [`i'm so hungry`, false],
  [`don't have a cow man`, false]
];

const App = () => {
  let [quoteId, setQuoteId] = useState(Math.floor(Math.random() * quotes.length))
  let [favStatus, setFavStatus] = useState(quotes[quoteId][1]);

  useEffect(() => {
    setFavStatus(quotes[quoteId][1]);
  }, [quoteId])

  function adjustQuoteId() {
    setQuoteId(() => Math.floor(Math.random() * quotes.length));
  }

  function adjustFav() {
    setFavStatus((c) => {
      quotes[quoteId][1] = !c;
      return !c;
    })
  }

  return (
      <Textbox
      quote ={quotes[quoteId]}
      favStatus={favStatus}
      shuffleQuote={() => adjustQuoteId()}
      favoriteAQuote={() => adjustFav()}
      />
  )
}

export default App;