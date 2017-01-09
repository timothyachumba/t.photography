import React from 'react'
import {Link} from 'react-router'

class Category extends React.Component {
  constructor() {
    super();
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
    this.props.parentMouseOut &&
    this.props.parentMouseOut(this.props.category)
    this.setState({ isHovering: false })
  }

  render() {
    return (
      <li className="category"
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}>
        <h1 id="{this.props.category}" >
          <Link
            to={`/${this.props.category}`}>
            {this.props.category}
          </Link>
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
