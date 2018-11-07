import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

class Home extends Component {
  render() {
    let colors = this.props.colorList.map(e => (
      <li>
        <Link to={`/colors/${e.name}`}>{e.name}</Link>
      </li>
    ));

    return (
      <div>
        {/* <div style={{ height: '300px' }}> */}
        <Link to="/colors/new">Add a color</Link>
        {/* </div> */}
        Please select a color
        <ul>{colors}</ul>
      </div>
    );
  }
}

export default Home;
