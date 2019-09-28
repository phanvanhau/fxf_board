import React, { Component } from 'react';

class BoxComponent extends Component {
  render() {
    const box = this.props.box;
    const index = this.props.index;
    return (
      <div draggable="true" style={{backgroundColor: box.color}}
        onDragStart={(e) => this.props.dragStart(e, index)}
        onDrop={(e) => this.props.drop(e, index)}
        onDragOver={this.allowDrop} data-testid={`boxItem${box.id}`}
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