import React from 'react'
import Slider from 'react-slick'

import imageOne from '../images/image.png'
import imageTwo from '../images/image2.png'
import imageThree from '../images/image3.png'
import imageFour from '../images/image4.png'
import imageFive from '../images/image5.png'
import imageSix from '../images/image6.png'

class ImageSlider extends React.Component {

  constructor() {
    super();
    this.state = {
      progressStyle: {
        width: 0
      }
    }
  }

  render() {
    var currentProgressLength = 0;
    var newProgressLength = 0;
    var self = this;

    function slideCount(slideCount, currentSlide) {
      currentProgressLength = (100/(slideCount))*currentSlide;
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
          <div className="sliderImage">
            <img src={imageOne} className="logo" height="100%" width="auto" alt="logo" />
          {this.progressLength}
          </div>
          <div className="sliderImage">
            <img src={imageTwo} className="logo" height="100%" width="auto" alt="logo" />
          </div>
          <div className="sliderImage">
            <img src={imageThree} className="logo" height="100%" width="auto" alt="logo" />
          </div>
          <div className="sliderImage">
            <img src={imageFour} className="logo" height="100%" width="auto" alt="logo" />
          </div>
          <div className="sliderImage">
            <img src={imageFive} className="logo" height="100%" width="auto" alt="logo" />
          </div>
          <div className="sliderImage">
            <img src={imageSix} className="logo" height="100%" width="auto" alt="logo" />
          </div>
        </Slider>
      </div>
    );
  }
}

ImageSlider.contextTypes = {
  router: React.PropTypes.object
}

export default ImageSlider;
