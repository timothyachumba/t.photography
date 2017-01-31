import React from 'react'
import Header from './Header'
import PhotoSlider from './PhotoSlider'

class Gallery extends React.Component {

  constructor() {
    super();
    this.getChildContext = this.getChildContext.bind(this);
  }

  getChildContext() {
    return {
      mode: "gridMode",
      category: this.props.params.category
    };
  }

  render() {
    return (
      <div className="App fullHeight">

        <Header/>

        <PhotoSlider/>

      </div>
    );
  }
}

Gallery.childContextTypes = {
  mode: React.PropTypes.string,
  category: React.PropTypes.string
};

export default Gallery;
