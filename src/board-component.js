import React from 'react';
import BoxComponent from './box-component';
import './board.css';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: this.props.boxes
    };
  }
  dragStardHandler(ev, draggedBox) {
    ev.dataTransfer.setData('text', draggedBox.id);
  }
  dropHandler(ev, droppedBox) {
    const draggedBoxId = ev.dataTransfer.getData('text');
    const draggedBox = this.state.boxes.filter(box => box.id.toString() === draggedBoxId).shift();
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
          {this.state.boxes.map((box,i) =>
          <div className="board-box" key={i}>
            <BoxComponent box={box} dragStart={this.dragStardHandler.bind(this)} drop={this.dropHandler.bind(this)}/>
          </div>
          )}
        </div>
      </div>
    );
  }
}

export default Board;
