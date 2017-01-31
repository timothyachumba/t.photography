import React from 'react'
import {Link} from 'react-router'

class Category extends React.Component {
  constructor() {
    super();
    this.onMouseOver = this.onMouseOver.bind(this)
    this.onMouseOut = this.onMouseOut.bind(this)
    this.state = {
      isHovering: false,
    }
  }

  onMouseOver() {
    this.props.parentMouseOver && this.props.parentMouseOver(this.props.categoryName)
    this.setState({ isHovering: true })
  }

  onMouseOut() {
    this.props.parentMouseOut &&
    this.props.parentMouseOut(this.props.categoryName)
    this.setState({ isHovering: false })
  }

  render() {
    return (
      <li className="category">
        <h1
          id={this.props.categoryName}
          onMouseOver={this.onMouseOver}
          onMouseOut={this.onMouseOut}>
          <Link
            to={`/${this.props.categoryName}`}>
            {this.props.categoryName}
          </Link>
          <span className="count">{this.props.picturesNumber}</span>
        </h1>
      </li>
    );
  }
}

Category.contextTypes = {
  router: React.PropTypes.object
}

export default Category;
