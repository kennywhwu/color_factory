import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

class Color extends Component {
  render() {
    let color = this.props.colorList.find(
      e => e.name === this.props.match.params.color
    );
    if (!color) {
      return <Redirect to="/colors" />;
    }

    return (
      <div style={{ backgroundColor: color.color, height: '300px' }}>
        THIS IS {color.name}
        <Link to="/colors">GO BACK</Link>
      </div>
    );
  }
}

export default Color;
