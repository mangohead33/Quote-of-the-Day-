import React, {useState, useEffect} from 'react';
import Textbox from './components/Textbox.js';
import './components/styles/style.css'

// quote = ["quote", favorite: boolean]
let quotes = [
  ['Be yourself; everyone else is already taken.', false],
  [`Two things are infinite: the universe and human stupidity; and I'm not sure about the universe`, false],
  ['So many books, so little time.', false],
  [`Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.`, false],
  [`You know you're in love when you can't fall asleep because reality is finally better than your dreams.`, false],
  [`If you tell the truth, you don't have to remember anything.`, false],
  [`I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.`, false],
  [`Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.`, false]
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
    <>
    <h1>Quote of The Day</h1>
    <Textbox
    quote ={quotes[quoteId]}
    favStatus={favStatus}
    shuffleQuote={() => adjustQuoteId()}
    favoriteAQuote={() => adjustFav()}
    />
    </>
  )
}

export default App;