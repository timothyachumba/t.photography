import React from 'react'

import Header from './Header'
import PhotoGrid from './PhotoGrid'

class Grid extends React.Component {

  constructor() {
    super();
    this.getChildContext = this.getChildContext.bind(this);
  }

  getChildContext() {
    return {
      mode: "galleryMode",
      category: this.props.params.category
    };
  }


  render() {
    return (
      <div className="App fullHeight">

        <Header/>

        <PhotoGrid />

      </div>
    );
  }
}


Grid.childContextTypes = {
  mode: React.PropTypes.string,
  category: React.PropTypes.string
};

export default Grid;
