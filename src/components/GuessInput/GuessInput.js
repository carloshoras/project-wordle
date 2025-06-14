import React, { useState } from 'react';

function GuessInput({handleSubmitGuess}) {
  const [guessInput, setGuessInput] = useState('')

  function handleSubmit(event) {
    event.preventDefault();
    setGuessInput('')
    handleSubmitGuess(guessInput)

  }
  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          id="guess-input"
          type="text"
          pattern=".{5}"
          value={guessInput}
          onChange={(event) => {
            setGuessInput(event.target.value.toUpperCase())
          }} />
      </form>
    </>
  )
}

export default GuessInput;
