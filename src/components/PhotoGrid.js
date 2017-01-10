import React from 'react'
import Masonry from 'react-masonry-component'

import Photo from './Photo'

class PhotoGrid extends React.Component {


  render() {
    const masonryOptions = {
      transitionDuration: 0
    };

    const photos = this.context.photos
    const categories = this.context.categories
    let category = this.context.category

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
              .keys(categories[category])
              .map(photoName => <Photo
                key={photoName}
                details={photos[categories[category][photoName]]}
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
  categories: React.PropTypes.object,
  photos: React.PropTypes.object,
  category: React.PropTypes.string
}

export default PhotoGrid;
