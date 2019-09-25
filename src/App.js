import React from 'react';
import BoxComponent from './box-component';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [...Array(16).keys()].map(n => ({
        color: this.getRandomColor(),
        text: n
      }))
    };
  }
  dragStardHandler = (ev, draggedBox) => {
    ev.dataTransfer.setData('text', draggedBox.text);
  }
  dropHandler = (ev, droppedBox) => {
    const draggedBoxId = ev.dataTransfer.getData('text');
    const draggedBox = this.state.boxes.filter(box => box.text.toString() === draggedBoxId).shift();
    if (!draggedBox) {
      return;
    }
    this.setState(state => ({
      boxes: state.boxes.map(box => {
        switch(box.text) {
          case draggedBox.text: return droppedBox;
          case droppedBox.text: return draggedBox;
          default: return box;
        }
      })
    }));
  }
  render() {
    return (
      <div className="App">
        <h2>4x4 board</h2>
        <div className="board-container">
          {this.state.boxes.map((box,i) => <BoxComponent box={box} key={i}
            dragStart={this.dragStardHandler} drop={this.dropHandler}/>)}
        </div>
      </div>
    );
  }
  getRandomColor() {
    const rgb = [...Array(3).keys()]
            .map(_ => Math.floor(Math.random() * 256));
    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]}`;
  }
}

export default App;
