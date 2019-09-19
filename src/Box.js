import React, { Component } from 'react';

class Box extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.delete}>X</button>
        <br></br><div style={{ height: `${this.props.height}px`, width: `${this.props.width}px`, backgroundColor: this.props.backgroundColor }}></div>
      </div>
      )
  }
}

export default Box;