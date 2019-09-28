import React from 'react';
import BoxComponent from './box-component';
import './board.css';

class Board extends React.Component {

  dragStardHandler(ev, draggedBoxId) {
    ev.dataTransfer.setData('text', draggedBoxId);
  }
  dropHandler(ev, droppedBoxId) {
    const draggedBoxId = ev.dataTransfer.getData('text');
    this.props.swap(draggedBoxId, droppedBoxId);
  }
  render() {
    return (
      <div className="App">
        <h2>4x4 board</h2>
        <div className="board-container">
          {this.props.boxes.map((box,i) =>
          <div className="board-box" key={i}>
            <BoxComponent box={box} dragStart={this.dragStardHandler.bind(this)}
              index={i} drop={this.dropHandler.bind(this)}/>
          </div>
          )}
        </div>
      </div>
    );
  }
}

export default Board;
