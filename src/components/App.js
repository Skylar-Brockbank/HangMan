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

  addStrikes = (lettersAvailable) => this.updateState({strikes: this.props.strikes+1, lettersAvailable: lettersAvailable});
  addGuess = (guess, lettersAvailable) => this.updateState({guess: guess, lettersAvailable: lettersAvailable});

  handleGuess = (letter) => {
    console.log(`You clicked ${letter}`);
    console.log(this.props.lettersAvailable[letter]);
  }

  handleSomeonePushingYourButtons = (letter) =>{
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

  render(){
    return(
      <React.Fragment>
      <div onClick={this.addStrikes}>test button thing</div>
      <Gallows strikes={this.props.strikes}/>
      <WordDisplay guess={this.props.guess}/>
      <LetterButtons availableLetters={this.props.lettersAvailable} onLetterClick={this.handleSomeonePushingYourButtons}/>
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