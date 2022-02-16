import React from 'react';
import PropTypes from 'prop-types';

function WordDisplay(props) {

  return (
    <React.Fragment>
      <div className="wordDisplayZone">
        {Object.keys(props.guess).map((letter) =>
          <p key={letter} className="guessLetter">
            {props.guess[letter]}&nbsp;
          </p>
        )}
      </div>
    </React.Fragment>
  );
}

WordDisplay.propTypes = {
  guess: PropTypes.array
}

export default WordDisplay;