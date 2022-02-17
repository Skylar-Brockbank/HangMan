import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import reducer from './reducers/primary-hangman-reducer';
import {Provider} from 'react-redux';
import RandomWords from 'random-words';

const store = createStore(reducer);
const inputWord = RandomWords().toUpperCase().split('');

store.dispatch({type:'NEW_GAME', targetWord: inputWord});
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
