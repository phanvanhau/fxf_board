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
    const boxes = [ ...this.state.boxes];
    const draggedIndex = boxes.indexOf(boxes.filter(box => box.text.toString() === draggedBoxId).shift());
    const droppedIndex = boxes.indexOf(droppedBox);
    boxes[droppedIndex] = {...boxes[draggedIndex]};
    boxes[draggedIndex] = {...droppedBox};
    this.setState({boxes});
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
    const hexaValues = '0123456789ABCDEF';
    return [...Array(6).keys()]
            .reduce((color) => color + hexaValues[Math.floor(Math.random() * 16)], '#');
  }
}

export default App;
