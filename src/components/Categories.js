import React from 'react';
import classNames from 'classnames'
import Category from './Category'
import Teaser from './Teaser'

class Categories extends React.Component {
  constructor() {
    super();
    this.onMouseOver = this.onMouseOver.bind(this)
    this.onMouseOut = this.onMouseOut.bind(this)
    this.state = {
      isHovering: false
    }
  }

  onMouseOver(currentCategory) {
    this.setState({ isHovering: true })
  }

  onMouseOut() {
    this.setState({ isHovering: false })
  }

  render() {

    const teaserClass = classNames('teaser', this.props.className, {
      'grow': this.state.isHovering,
      '': !this.state.isHovering
    });

    return (
      <div className="categoriesContainer">
        <Teaser teaserClass={teaserClass}/>
        <nav className="menu">
          <ul className="categories">
            <Category
              category="people"
              parentMouseOver={this.onMouseOver}
              parentMouseOut={this.onMouseOut}/>
            <Category
              category="street"
              parentMouseOver={this.onMouseOver}
              parentMouseOut={this.onMouseOut}/>
            <Category
              category="fashion"
              parentMouseOver={this.onMouseOver}
              parentMouseOut={this.onMouseOut}/>
            <Category
              category="architecture"
              parentMouseOver={this.onMouseOver}
              parentMouseOut={this.onMouseOut}/>
            <Category
              category="travel"
              parentMouseOver={this.onMouseOver}
              parentMouseOut={this.onMouseOut}/>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Categories;
