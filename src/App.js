import React from 'react';
import Textbox from './components/Textbox.js';

const App = () => {
  const quotes = [
    'to die or not to die',
    'better in than out as i always say',
    'hey wheres the beef',
    'copwabunga',
    `i'm so hungry`,
    `don't have a cow man`
  ]
  let quote = quotes[Math.floor(Math.random() * quotes.length)];
  return (
      <Textbox quote ={quote}/>
  )
}

export default App