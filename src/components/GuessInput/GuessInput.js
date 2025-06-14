import React, { useState } from 'react';

function GuessInput() {
  const [guessInput, setGuessInput] = useState('')

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ guessInput })
    setGuessInput('')

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
