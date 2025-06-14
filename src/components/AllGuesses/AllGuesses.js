import React from 'react';
import Guess from '../Guess/Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

function AllGuesses({ listGuesses, answer }) {
  const guessTries = NUM_OF_GUESSES_ALLOWED

  return (
    <>
      <div className="guess-results">
        {range(guessTries).map((num) => (
          <Guess key={num} word={listGuesses[num]} answer={answer}/>
        ))}
      </div>
    </>

  )
}

export default AllGuesses;
