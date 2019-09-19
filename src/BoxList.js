import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import uuid from 'uuid/v4';

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = { boxes: [] };
    this.addBox = this.addBox.bind(this);
  }
  
  addBox(box) {
    let newBox = {...box, id: uuid() };
    this.setState(st => ({
      boxes: [...st.boxes, newBox]
    }));
  }

  deleteBox(id) {
    this.setState(st => {
      return { boxes: st.boxes.filter(b => b.id !== id) };
    })
  }

  render() {
    return (
      <div>
        <NewBoxForm addBox={this.addBox}/>
        {this.state.boxes.map((b) => (
          <Box height={b.height} width={b.width} backgroundColor={b.backgroundColor} key={b.id} delete={() => this.deleteBox(b.id)}/>
          // need () bc without it, this.deleteBox would be called immediately upon rendering
          // () => (arrow function) makes it so we can pass in the function without instantly declaring it
        ))}
      </div>
    )
  }
}

export default BoxList;