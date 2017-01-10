import React from 'react'
import Slider from 'react-slick'

import Photo from './Photo'

class PhotoSlider extends React.Component {

  constructor() {
    super();
    this.state = {
      progressStyle: {
        width: 0
      }
    }
  }

  render() {
    // var currentProgressLength = 0;
    var newProgressLength = 0;
    var self = this;

    function slideCount(slideCount, currentSlide) {
      // currentProgressLength = (100/(slideCount))*currentSlide;
      newProgressLength = (100/(slideCount-1))*currentSlide + '%';
      self.setState({progressStyle: {
        width: newProgressLength
      }});
    }

    const settings = {
      dots: false,
      infinite: false,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: true,
      cssEase: 'cubic-bezier(0.77,0.0,0.175,1.0)',
      afterChange: function (currentSlide, slideCounter) {
        slideCount(slideCounter = this.children.length, currentSlide)
      }
    }

    return (
      <div>
        <div style={this.state.progressStyle} className="progressBar"></div>
        <Slider {...settings}>
          {
            Object
              .keys(this.context.photosByCategories[this.context.category])
              .map(photoName => <div className="sliderImage"><Photo
                key={photoName}
                details={this.context.photosByCategories[this.context.category][photoName]}
                height="100%"
                alt=""
                width="auto" /></div>)
          }
        </Slider>
      </div>
    );
  }
}

PhotoSlider.contextTypes = {
  router: React.PropTypes.object,
  photosByCategories: React.PropTypes.object,
  category: React.PropTypes.string
}

export default PhotoSlider;
