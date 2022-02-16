import React from "react";
import {connect} from 'react-redux';
import LetterButtons from "./LetterButtons";
import Gallows from "./gallows";
import WordDisplay from "./WordDisplay";

class App extends React.Component{
  // constructor(props){
  //   super(props);
  // }
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

  addStrikes = () => this.updateState({strikes: this.props.strikes+1});

  handleGuess = (letter) => {
    console.log(`You clicked ${letter}`);
    console.log(this.props.lettersAvailable[letter]);
    // State Changes: call guess action
  }

  render(){
    return(
      <React.Fragment>
      <div onClick={this.addStrikes}>test button thing</div>
      <Gallows strikes={this.props.strikes}/>
      <WordDisplay guess={this.props.guess}/>
      <LetterButtons availableLetters={this.props.lettersAvailable} onLetterClick={this.handleGuess}/>
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