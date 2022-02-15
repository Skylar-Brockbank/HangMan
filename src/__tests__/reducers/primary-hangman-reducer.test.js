import hangManReducer from '../../reducers/primary-hangman-reducer';

describe('hangManReducer',()=>{
  let action;
  const currentState = {
    strikes: 0,
    playing: 'true',
    lettersAvailable: {a:true, b:false},
    targetWord: ['w','h','a','t','e','v','e','r'],
    guess: ['_','_','_','_','_','_','_','_']
  } 

  test('should increment the strikes by 1', ()=>{
    const { strikes, playing, lettersAvailable, targetWord, guess } = currentState;
    action = {
      type: 'ADD_STRIKE',
      strikes: strikes,
      playing: playing,
      lettersAvailable: lettersAvailable, 
      targetWord: targetWord,
      guess: guess
    }
    expect(hangManReducer(currentState,action)).toEqual({
      strikes: 1,
    playing: 'true',
    lettersAvailable: {a:true, b:false},
    targetWord: ['w','h','a','t','e','v','e','r'],
    guess: ['_','_','_','_','_','_','_','_']
    });
  });
});