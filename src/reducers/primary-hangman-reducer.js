export default (state={}, action) => {
  const{ strikes, playing, lettersAvailable, targetWord, guess} = action;
  switch(action.type){
    case 'NEW_GAME':
      return Object.assign({},state,{
        strikes: 0,
        playing: true,
        lettersAvailable: {A:true,B:true,C:true,D:true,E:true,F:true,G:true,H:true,I:true,J:true,K:true,L:true,M:true,N:true,O:true,P:true,Q:true,R:true,S:true,T:true,U:true,V:true,W:true,X:true,Y:true,Z:true},
        targetWord: targetWord,
        guess: targetWord.map(() => {return ('_')})
      });
    case 'GAME_OVER':
      return Object.assign({},state,{
        strikes: strikes,
        playing: !playing,
        lettersAvailable: lettersAvailable,
        targetWord: targetWord,
        guess: guess
      });
    case 'EDIT_STATE':
      return Object.assign({},state,{
        strikes: strikes,
        playing: playing,
        lettersAvailable: lettersAvailable,
        targetWord: targetWord,
        guess: guess
      });
    default:
      return state;
    
  }
}