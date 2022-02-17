import React from "react";
import {connect} from 'react-redux';
import LetterButtons from "./LetterButtons";
import Gallows from "./gallows";
import WordDisplay from "./WordDisplay";

class App extends React.Component{
  updateState = (input) =>{
    const {dispatch}=this.props;
    const {strikes, playing, lettersAvailable, targetWord, guess} = input;
    const action ={
      type: 'EDIT_STATE',
      strikes: strikes||this.props.strikes,
      playing: playing||this.props.playing,
      lettersAvailable: lettersAvailable||this.props.lettersAvailable,
      targetWord: targetWord||this.props.targetWord,
      guess: guess||this.props.guess
    };
    dispatch(action);
  }
  
  swapGameState = () =>{
    const {dispatch}=this.props;
    dispatch({...this.props, type: 'GAME_OVER'});
  }
  // endTheGame=()=>{
  //   if(this.props.strikes)
  // }
  
  addStrikes = (lettersAvailable) => {
    this.updateState({strikes: this.props.strikes+1, lettersAvailable: lettersAvailable});
    // if (this.props.strikes > 5) {
    //   this.swapGameState();
    // }
  }

  addGuess = (guess, lettersAvailable) => {
    // if (guess.join('') === this.props.targetWord.join('')) {
    //   this.swapGameState();
    // } else {
      this.updateState({guess: guess, lettersAvailable: lettersAvailable});
    // }
  }

  handleSomeonePushingYourButtons = (letter) =>{
    if(this.props.playing){
      let newLettersAvailable = {...this.props.lettersAvailable};
      newLettersAvailable[letter] = !newLettersAvailable[letter];
      let standInGuess = [...this.props.guess];
      if (this.props.targetWord.includes(letter)) {
        this.props.targetWord.map((x, index)=> {
          if(x===letter){
            standInGuess[index] = x;
          }
          return null;
        });
        this.addGuess(standInGuess, newLettersAvailable);
      } else {
        this.addStrikes(newLettersAvailable);
      }
    }
    
  }
//conditional rendering if playing==false and guess==targetWord => you win
//                      if playing==false and guess!=targetWord => you lose
//                      else you're still playing
  render(){
    if(this.props.strikes >=6 || this.props.guess.join('') === this.props.targetWord.join('')){
      if (this.props.playing) this.swapGameState();
    }
    let endGame = null;
    if (!this.props.playing) {
      if (this.props.guess.join('') === this.props.targetWord.join('')) {
        endGame = <button className="btn" onClick={()=>window.location.reload()}><h1>Winner! Play again?</h1></button>;
      }
      else {
        endGame = <button className="btn" onClick={()=>window.location.reload()}><h1>He died because of you</h1></button>;
      }
    }

    return(
      <React.Fragment>
      <div onClick={this.addStrikes}>test button thing</div>
      <Gallows strikes={this.props.strikes}/>
      <WordDisplay guess={this.props.guess}/>
      <LetterButtons availableLetters={this.props.lettersAvailable} onLetterClick={this.handleSomeonePushingYourButtons}/>
      <div className="endGame">{endGame}</div>
      </React.Fragment>
      );
    }
  }
  const mapStateToProps = state =>{
    return{
      lettersAvailable: state.lettersAvailable,
      strikes: state.strikes,
      playing: state.playing,
      targetWord: state.targetWord,
      guess: state.guess
    }
  }
  App = connect(mapStateToProps)(App);
  export default App;