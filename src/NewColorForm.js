import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

class NewColorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      color: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Handle change to user input boxes
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  // Handle submission of form
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.handleSubmit(this.state);
    this.props.history.push('/colors');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Please pick a color:
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" onChange={this.handleChange} />
        <label htmlFor="color">Pick Color:</label>
        <input
          type="color"
          name="color"
          id="color"
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default NewColorForm;
