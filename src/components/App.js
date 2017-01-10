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
      photos: {}
    }

  }

  componentWillMount() {
    this.setState({
      photos: photos
    })
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
  photos: React.PropTypes.object
};

export default App;
