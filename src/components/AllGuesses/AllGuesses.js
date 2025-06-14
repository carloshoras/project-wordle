import React from 'react';

function AllGuesses({listGuesses}) {

  return (
    <>
      <div className="guess-results">
        {listGuesses.length >= 0 && listGuesses.map((guess, index) => (
          <p
            className="guess"
            key={index}
          >
            {guess}
          </p>
        ))}
      </div>
    </>

  )
}

export default AllGuesses;
