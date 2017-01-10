import React from 'react';
import classNames from 'classnames'
import Category from './Category'
import Teaser from './Teaser'
import photos from '../photos'

class Categories extends React.Component {
  constructor() {
    super();
    this.onMouseOver = this.onMouseOver.bind(this)
    this.onMouseOut = this.onMouseOut.bind(this)
    this.state = {
      isHovering: false,
      photos: {}
    }
  }

  onMouseOver(currentCategory) {
    this.setState({ isHovering: true })
  }

  onMouseOut() {
    this.setState({ isHovering: false })
  }

  componentWillMount() {
    this.setState({
      photos: photos
    })
  }

  render() {

    console.log(this.state.photos);

    console.log(this.state.photos.category);

    const teaserClass = classNames('teaser', this.props.className, {
      'grow': this.state.isHovering,
      '': !this.state.isHovering
    });

    return (
      <div className="categoriesContainer">
        <Teaser teaserClass={teaserClass}/>
        <nav className="menu">
          <ul className="categories">
            {
              Object
                .keys(this.state.photos)
                .map(key => <Category
                  key={key}
                  details={this.state.photos[key]}
                  parentMouseOver={this.onMouseOver}
                  parentMouseOut={this.onMouseOut} />)
            }

          </ul>
        </nav>
      </div>
    );
  }
}

Categories.contextTypes = {
  photos: React.PropTypes.object
}

export default Categories;
