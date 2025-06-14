import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../../src/game-helpers'

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : 'cell'
  return <span className={className}>
    {letter}
  </span>
}

function Guess({ word, answer }) {
  const guessChecked = checkGuess(word, answer)

  return (

    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={guessChecked ? guessChecked[num].letter : undefined}
          status={guessChecked ? guessChecked[num].status : undefined} />

      ))}
    </p>
  )

}

export default Guess;
