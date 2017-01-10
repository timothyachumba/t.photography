import React from 'react'
import { Match, Miss } from 'react-router'

import '../styles/styles.css'
import photos from '../photos'
import Home from './Home'
import Gallery from './Gallery'
import Grid from './Grid'
import NotFound from './NotFound'

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      photos: photos
    }

  }

  categoiesPhotos() {
    var photos = this.state.photos
    this.photosByCategories = Object.keys(photos).reduce(function(prev, curr) {
      var obj = prev;
      var category = photos[curr].category;
      obj[category] = obj[category] || {};
      obj[category][curr] = photos[curr];
      return obj;
    }, {});

  }

  componentWillMount() {
    this.categoiesPhotos()
  }

  getChildContext(photosByCategories) {
    return {
      photosByCategories: this.photosByCategories
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
  photosByCategories: React.PropTypes.object
};

export default App;
