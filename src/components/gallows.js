import React from 'react';
import PropTypes from "prop-types";

function Gallows(props) {
  let output;
  switch(props.strikes){
    case 0:
      output = <p>nothing</p>
      break;
    case 1:
      output = <p>Head</p>
      break;
    case 2:
      output = <p>Head, body</p>
      break;
    case 3:
      output = <p>Head, body, left arm</p>
      break;
    case 4:
      output = <p>Head, body, left arm, right arm</p>
      break;
    case 5:
      output = <p>Head, body, left arm, right arm, left leg</p>
      break;
    case 6:
      output = <p>Head, body, left arm, right arm, left leg, right leg</p>
      break;
    default:
      output = <p>I'm just an old man, I ain't hurtin me no-one</p>
    }
    return(
      <React.Fragment>
        <h1 className='gallowsZone'>
        {output}
        </h1>
      </React.Fragment>
    )
}

Gallows.propTypes ={
  strikes: PropTypes.number
}

export default Gallows;