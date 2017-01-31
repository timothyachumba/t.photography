import React from 'react'
import Masonry from 'react-masonry-component'

import Photo from './Photo'

class PhotoGrid extends React.Component {


  render() {
    const masonryOptions = {
      transitionDuration: 0
    };

    const pictures = this.context.pictures
    const category = this.context.category

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
            pictures[category].map(photoPath => <Photo
                key={photoPath}
                details={photoPath}
                category={category}
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
  pictures: React.PropTypes.object,
  category: React.PropTypes.string
}

export default PhotoGrid;
