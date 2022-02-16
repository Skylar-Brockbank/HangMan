gallows component
  pass strikes state in
  display body parts based on state

LetterButton component
  pass in available letters state
  display buttons for each letter in the alphabet
  disable buttons for letters that are unavailable
  pass in guess function
  each button triggers guess function for its letter

letterJail component
  pass in available letters state
  pass in target word state
  display all unavailable letters that are not in the word

WordDisplay component
  pass in guess state
  display guess state




if targetWord.Includes(letter)
{
  {
    targetWord.map((x, index)=>{
      if(x===letter){
        standinGuess[index] === x;
      }
    })
  }
  //make an action container that changes the guess state
}else{
  //add strike
}