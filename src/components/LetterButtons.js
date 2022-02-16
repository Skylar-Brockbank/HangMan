import React from "react";
import PropTypes from "prop-types";

function LetterButtons(props) {
  return (
    <React.Fragment>
      <div className="letterButtonZone">
        {Object.keys(props.availableLetters).map((letter) =>
          <button
            className="btn letterButton"
            disabled={!props.availableLetters[letter]}
            onClick={() => props.onLetterClick(letter)}
            key={letter}
          >
            {letter}
          </button>
        )}
      </div>
    </React.Fragment>
  );
}

LetterButtons.propTypes = {
  availableLetters: PropTypes.object,
  onLetterClick: PropTypes.func
}

export default LetterButtons;