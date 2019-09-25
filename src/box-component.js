import React, { Component } from 'react';

class BoxComponent extends Component {
  render() {
    const box = this.props.box;
    return (
      <div draggable="true" className="board-box" style={{backgroundColor: box.color}}
        onDragStart={(e) => this.props.dragStart(e, box)}
        onDrop={(e) => this.props.drop(e, box)}
        onDragOver={this.allowDrop} data-testid={`boxItem${box.text}`}
      >
        {box.text}
      </div>
    );
  }

  allowDrop(ev) {
    ev.preventDefault();
  }
}

export default BoxComponent;