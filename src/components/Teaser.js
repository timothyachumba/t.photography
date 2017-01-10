import React from 'react'
import classNames from 'classnames'
import PhotoBackground from './PhotoBackground'

class Teaser extends React.Component {


  render() {

    const photos = this.context.photos
    const categories = this.context.categories

    return (
      <div className={this.props.teaserClass}>
        {
          Object
            .keys(categories)
            .map(categoryName => <PhotoBackground
              key={categoryName}
              class={`photoBackground ` + categoryName}
              details={photos[categories[categoryName][0]]}
              height=""
              alt=""
              width="100%" />)
        }
      </div>
    );
  }
}

Teaser.contextTypes = {
  categories: React.PropTypes.object,
  photos: React.PropTypes.object
}


export default Teaser;
