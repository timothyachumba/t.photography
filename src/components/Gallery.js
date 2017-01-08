import React from 'react'
import Header from './Header'

class Gallery extends React.Component {

  constructor() {
    super();
    this.getChildContext = this.getChildContext.bind(this);
  }

  getChildContext() {
    return {
      mode: "galleryMode"
    };
  }

  render() {

    return (
      <div className="App">

        <Header/>


      </div>
    );
  }
}

Gallery.childContextTypes = {
  mode: React.PropTypes.string
};

export default Gallery;
