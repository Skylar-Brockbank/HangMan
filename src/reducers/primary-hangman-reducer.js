export default (state={}, action) => {
  const{ strikes, playing, lettersAvailable, targetWord, guess} = action;
  switch(action.type){
    case 'ADD_STRIKE':
      return Object.assign({},state,{
        strikes: (strikes+1),
        playing: playing,
        lettersAvailable: lettersAvailable,
        targetWord: targetWord,
        guess: guess
      });
    case 'GAME_OVER':
      let newState ={...state};
      newState.playing = !newState.playing;
      return newState;
    default:
        return state;
    
  }
}