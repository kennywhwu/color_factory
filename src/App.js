import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './Routes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorList: [
        { name: 'red', color: 'red' },
        { name: 'purple', color: 'purple' },
        { name: 'blue', color: 'blue' }
      ]
    };
    this.addColor = this.addColor.bind(this);
  }

  addColor(colorObj) {
    console.log(colorObj);
    this.setState(st => ({
      colorList: [
        ...st.colorList,
        { name: colorObj.name, color: colorObj.color }
      ]
    }));
  }

  render() {
    return (
      <div className="App">
        {/* <NavBar dogList={this.props.dogList} /> */}
        <Routes colorList={this.state.colorList} handleSubmit={this.addColor} />
      </div>
    );
  }
}

export default App;
