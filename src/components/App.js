import React from 'react'
import { Match, Miss } from 'react-router'

import '../styles/styles.css'
import photos from '../photos'
import categories from '../categories'
import Home from './Home'
import Gallery from './Gallery'
import Grid from './Grid'
import NotFound from './NotFound'

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      photos: photos,
      categories: categories
    }

  }

  getChildContext() {
    return {
      categories: categories,
      photos: photos
    };
  }

  render() {

    return (
      <div>
        <Match exactly pattern="/" component={Home} />
        <Match exactly pattern="/:category" component={Gallery} />
        <Match exactly pattern="/:category/grid" component={Grid} />
        <Miss component={NotFound} />
      </div>
    );
  }
}

App.childContextTypes = {
  categories: React.PropTypes.object,
  photos: React.PropTypes.object
};

export default App;
