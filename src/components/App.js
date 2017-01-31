import React from 'react'
import { Match, Miss } from 'react-router'

import '../styles/styles.css'
import pictures from '../pictures'
import Home from './Home'
import Gallery from './Gallery'
import Grid from './Grid'
import NotFound from './NotFound'

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      pictures: pictures
    }

  }

  getChildContext() {
    return {
      pictures: pictures
    };
  }

  render() {

    return (
      <div className="fullHeight">
        <Match exactly pattern="/" component={Home} />
        <Match exactly pattern="/:category" component={Gallery} />
        <Match exactly pattern="/:category/grid" component={Grid} />
        <Miss component={NotFound} />
      </div>
    );
  }
}

App.childContextTypes = {
  pictures: React.PropTypes.object
};

export default App;
