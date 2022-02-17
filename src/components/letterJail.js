import React from 'react';

function letterJail(props){
  let uniqueList=[];
  let letterJailOutput=[];
  props.targetWord.forEach(element => {
    if (!uniqueList.includes(element)){
      uniqueList.push(element);
    }
  });
  for(const thing in props.lettersAvailable){
    console.log(thing.value);
    if (!uniqueList.includes(thing.key)&&thing.value===false){
      letterJailOutput.push(thing.key);
      
    }
  }
  const letterJailOutputtext = letterJailOutput.join(',');
  return(
    <React.Fragment>
      {letterJailOutputtext}
    </React.Fragment>
  );
}

export default letterJail;