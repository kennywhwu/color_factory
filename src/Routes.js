import React, { Component } from 'react';
import Color from './Color';
import Home from './Home';
import NewColorForm from './NewColorForm';
import { Route, Switch, Redirect } from 'react-router-dom';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/colors"
          render={() => <Home colorList={this.props.colorList} />}
        />
        <Route
          exact
          path="/colors/new"
          render={props => (
            <NewColorForm
              {...props}
              colorList={this.props.colorList}
              handleSubmit={this.props.handleSubmit}
            />
          )}
        />
        <Route
          exact
          path="/colors/:color"
          render={props => (
            <Color {...props} colorList={this.props.colorList} />
          )}
        />
        <Redirect to="/colors" />
      </Switch>
    );
  }
}

export default Routes;
