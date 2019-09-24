import React, { Component } from 'react';

class BoxComponent extends Component {
  render() {
    return (
      <div draggable="true" className="board-box" style={{backgroundColor: this.props.box.color}}
        onDragStart={(e) => this.props.dragStart(e, this.props.box)}
        onDrop={(e) => this.props.drop(e, this.props.box)}
        onDragOver={this.allowDrop}
      >
        {this.props.box.text}
      </div>
    );
  }

  allowDrop(ev) {
    ev.preventDefault();
  }
}

export default BoxComponent;