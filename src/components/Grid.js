import React from 'react'
import Masonry from 'react-masonry-component'
import Header from './Header'
import Photo from './Photo'

class Grid extends React.Component {

  constructor() {
    super();
    this.getChildContext = this.getChildContext.bind(this);
  }

  getChildContext() {
    return {
      mode: "galleryMode",
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
          {
            Object
              .keys(this.context.photosByCategories[this.props.params.category])
              .map(photoName => <Photo
                key={photoName}
                details={this.context.photosByCategories[this.props.params.category][photoName]}
                height=""
                alt=""
                width="auto" />)
          }
        </Masonry>

      </div>
    );
  }
}

Grid.childContextTypes = {
  mode: React.PropTypes.string
};

Grid.contextTypes = {
  photosByCategories: React.PropTypes.object
}

export default Grid;
