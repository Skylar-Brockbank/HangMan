import React from 'react';
import PropTypes from "prop-types";
import Gary0 from "../img/gary0.png";
import Gary1 from "../img/gary1.png";
import Gary2 from "../img/gary2.png";
import Gary3 from "../img/gary3.png";
import Gary4 from "../img/gary4.png";
import Gary5 from "../img/gary5.png";
import Gary6 from "../img/garyDed.png";

function Gallows(props) {
  let output;
  switch(props.strikes){
    case 0:
      output = Gary0;
      break;
    case 1:
      output = Gary1;
      break;
    case 2:
      output = Gary2;
      break;
    case 3:
      output = Gary3;
      break;
    case 4:
      output = Gary4;
      break;
    case 5:
      output = Gary5;
      break;
    case 6:
      output = Gary6;
      break;
    default:
      output = <p>I'm just an old man, I ain't hurtin me no-one</p>
    }
    return(
      <React.Fragment>
        <h1 className='gallowsZone'>
        <img src={output} alt="gary"/>
        </h1>
      </React.Fragment>
    );
}

Gallows.propTypes ={
  strikes: PropTypes.number
}

export default Gallows;