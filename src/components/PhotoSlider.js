import React from 'react'
import Slider from 'react-slick'

import Photo from './Photo'

class PhotoSlider extends React.Component {

  constructor() {
    super()
    this.keyboardNext = this.keyboardNext.bind(this)
    this.keyboardPrevious = this.keyboardPrevious.bind(this)
    this.state = {
      progressStyle: {
        width: 0
      }
    }
  }

  keyboardNext() {
    if(event.keyCode === 39){
      this.slider.slickNext()
    }
  }

  keyboardPrevious(event) {
    if(event.keyCode === 37){
      this.slider.slickPrev()
    }
  }

  componentWillMount(){
    window.addEventListener("keydown", this.keyboardPrevious, false)
    window.addEventListener("keydown", this.keyboardNext, false)
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
        <Slider ref={c => this.slider = c } {...settings}>
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
