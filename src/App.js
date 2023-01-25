import React, {useState, useEffect} from 'react';
import Textbox from './components/Textbox.js';
import ToggleFavorites from './components/ToggleFavorites.js';
import './components/styles/style.css'

// quote = ["quote", favorite: boolean]
let quotes = [
  [`Well that's not very nice - it's hideous!`, true],
  [`Two things are infinite: the universe and human stupidity; and I'm not sure about the universe`, false],
  [`Well, it's no wonder you don't have any friends.`, true],
  [`Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.`, false],
  [`You know you're in love when you can't fall asleep because reality is finally better than your dreams.`, false],
  [`If you tell the truth, you don't have to remember anything.`, false],
  [`I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.`, false],
  [`Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.`, false],
  [`Ogres are like onions: ogres have layers, and onions have layers.`, true]
];

const App = () => {

  let [quoteId, setQuoteId] = useState(Math.floor(Math.random() * quotes.length));
  let [favStatus, setFavStatus] = useState(quotes[quoteId][1]);
  let [toggleStatus, setToggle] = useState(false);

  useEffect(() => {
    setFavStatus(quotes[quoteId][1]);
  }, [quoteId])

  function adjustQuoteId() {
    setQuoteId((curr) => {
      while (true) {
        let newQuote = Math.floor(Math.random() * quotes.length);
        if (newQuote !== curr) return newQuote;
      }
    });
  }

  function adjustFav() {
    setFavStatus((c) => {
      quotes[quoteId][1] = !c;
      return !c;
    })
  }

  function adjustToggle() {
    setToggle((c) => !c)
  }

  return (
    <div className="app-container">
    <h1>Quote of The Day</h1>
    <Textbox
    quote ={quotes[quoteId]}
    favStatus={favStatus}
    shuffleQuote={adjustQuoteId}
    favoriteAQuote={adjustFav}
    />
    </div>
    )
}

export default App;