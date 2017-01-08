import React from 'react';

class Category extends React.Component {
  constructor() {
    super();
    this.goToGallery = this.goToGallery.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this)
    this.onMouseOut = this.onMouseOut.bind(this)
    this.state = {
      isHovering: false
    }
  }

  onMouseOver() {
    this.props.parentMouseOver && this.props.parentMouseOver(this.props.category)
    this.setState({ isHovering: true })
  }

  onMouseOut() {
    this.props.parentMouseOut && this.props.parentMouseOut(this.props.category)
    this.setState({ isHovering: false })
  }

  goToGallery() {
    console.log('you changed the url');
    this.context.router.transitionTo(this.props.category)
  }

  render() {
    return (
      <li className="category"
          onMouseOver={this.onMouseOver}
          onMouseOut={this.onMouseOut}>
        <h1 id="{this.props.category}" >
          <button onClick={this.goToGallery}>
            {this.props.category}
          </button>
          <span className="count">23</span>
        </h1>
      </li>
    );
  }
}

Category.contextTypes = {
  router: React.PropTypes.object
}

export default Category;
