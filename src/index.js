import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './board-component';
import * as serviceWorker from './serviceWorker';

const boxes = [...Array(16).keys()].map(n => ({
  id: n,
  text: n.toString(),
  color: getRandomColor()
}))

ReactDOM.render(<Board boxes={boxes}/>, document.getElementById('root'));

function getRandomColor() {
  const rgb = [...Array(3).keys()]
          .map(_ => Math.floor(Math.random() * 256));
  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]}`;
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
