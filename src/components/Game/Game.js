import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import AllGuesses from '../AllGuesses/AllGuesses';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [listGuesses, setListGuesses] = useState([])
  const [isGameWon, setIsGameWon] = useState(false)

  function handleSubmitGuess(guessInput) {
    const updatedGuesses = [...listGuesses, guessInput]
    setListGuesses(updatedGuesses)
    if (guessInput === answer) setIsGameWon(true)
  }


  return (
    <>
      <AllGuesses listGuesses={listGuesses} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess}/>
      {isGameWon && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {listGuesses.length} guesses</strong>.
          </p>
        </div>
      )}
      {listGuesses.length === NUM_OF_GUESSES_ALLOWED && (
        <div className="sad banner">
          <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        </div>
      )

      }
    </>
  )
}

export default Game;
