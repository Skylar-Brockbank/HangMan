import React from 'react';

function letterJail(props){
  let uniqueList = new array;
  let letterJailOutput = new array;
  props.targetWord.forEach(element => {
    if (!uniqueList.includes(element)){
      uniqueList.push(element);
    }
  });
  props.lettersAvailable.forEach(letter=>{
    if (!uniqueList.includes(letter)){
      letterJailOutput.push(letter);
    }
  });
  return(
    <React.Fragment>
      {letterJailOutput}
    </React.Fragment>
  );
}

export default letterJail;