import React from 'react'
import Masonry from 'react-masonry-component'
import Header from './Header'

import imageOne from '../images/image.png'
import imageTwo from '../images/image2.png'
import imageThree from '../images/image3.png'
import imageFour from '../images/image4.png'
import imageFive from '../images/image5.png'
import imageSix from '../images/image6.png'

class Grid extends React.Component {

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
    const masonryOptions = {
      transitionDuration: 0
    };
    return (
      <div className="App">

        <Header/>

        <Masonry
          className={'gridContainer'}
          elementType={'div'}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
        >
          <img
            src={imageOne}
            className="gridImage"
            width="auto"
            alt=""/>
          <img
            src={imageTwo}
            className="gridImage"
            width="auto"
            alt=""/>
          <img
            src={imageThree}
            className="gridImage"
            width="auto"
            alt=""/>
          <img
            src={imageFour}
            className="gridImage"
            width="auto"
            alt=""/>
          <img
            src={imageFive}
            className="gridImage"
            width="auto"
            alt=""/>
          <img
            src={imageSix}
            className="gridImage"
            width="auto"
            alt=""/>
        </Masonry>

      </div>
    );
  }
}

Grid.childContextTypes = {
  mode: React.PropTypes.string
};

export default Grid;
