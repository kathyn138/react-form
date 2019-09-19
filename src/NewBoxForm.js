import React, { Component } from 'react';

class NewBoxForm extends Component {
  constructor(props) {
    super(props)
    this.state = { width: '', height: '', backgroundColor: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addBox(this.state);
    this.setState({ width: '', height: '', backgroundColor: '' });
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="width">Width:</label>
        <input id="width"
          name="width"
          value={this.state.width}
          onChange={this.handleChange} />

        <br></br><label htmlFor="height">Height:</label>
        <input id="height"
          name="height"
          value={this.state.height}
          onChange={this.handleChange} />

        <br></br><label htmlFor="backgroundColor">Background Color:</label>
        <input id="backgroundColor"
          name="backgroundColor"
          value={this.state.backgroundColor}
          onChange={this.handleChange} />
        
        <br></br><button>Add a new box!</button>
      </form>
    );
  }
}

export default NewBoxForm;