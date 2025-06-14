import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import AllGuesses from '../AllGuesses/AllGuesses';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [listGuesses, setListGuesses] = useState([])

  function handleSubmitGuess(guessInput) {
    const updatedGuesses = [...listGuesses, guessInput]
    setListGuesses(updatedGuesses)
  }


  return (
    <>
      <AllGuesses listGuesses={listGuesses} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  )
}

export default Game;
