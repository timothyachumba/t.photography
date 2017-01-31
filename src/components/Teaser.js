import React from 'react'
import PhotoBackground from './PhotoBackground'

class Teaser extends React.Component {


  render() {

    const pictures = this.context.pictures
    const numberOfCategories = Object.keys(pictures).length

    const randomImage = Math.floor(Math.random() * numberOfCategories) + 1

    return (
      <div className={this.props.teaserClass + ` image`+randomImage}>
        {
          Object
            .keys(pictures)
            .map((categoryName) => <PhotoBackground
              key={categoryName}
              class={`photoBackground ` + categoryName}
              details={pictures[categoryName][0]}
              category={categoryName}
              height=""
              alt=""
              width="100%" />)
        }
      </div>
    );
  }
}

Teaser.contextTypes = {
  pictures: React.PropTypes.object
}


export default Teaser;
