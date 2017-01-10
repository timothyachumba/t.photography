import React from 'react'

import Photo from './Photo'

class Teaser extends React.Component {


  render() {
    return (
      <div className={this.props.teaserClass}>
        {
          Object
            .keys(this.context.photosByCategories)
            .map(photoName => <Photo
              key={photoName}
              details={this.context.photosByCategories[photoName]}
              height="100%"
              alt=""
              width="auto" />)
        }
      </div>
    );
  }
}

Teaser.contextTypes = {
  photosByCategories: React.PropTypes.object
}


export default Teaser;
