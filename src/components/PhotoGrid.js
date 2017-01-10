import React from 'react'
import Masonry from 'react-masonry-component'

import Photo from './Photo'

class PhotoGrid extends React.Component {


  render() {
    const masonryOptions = {
      transitionDuration: 0
    };

    return (
      <div>
        <Masonry
          className={'gridContainer'}
          elementType={'div'}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
        >
          {
            Object
              .keys(this.context.photosByCategories[this.context.category])
              .map(photoName => <Photo
                key={photoName}
                details={this.context.photosByCategories[this.context.category][photoName]}
                height=""
                alt=""
                width="auto" />)
          }
        </Masonry>
      </div>
    );
  }
}

PhotoGrid.contextTypes = {
  photosByCategories: React.PropTypes.object,
  category: React.PropTypes.string
}

export default PhotoGrid;
