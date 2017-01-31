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
      isHovering: false,
      currentCategory: ''
    }
  }

  onMouseOver(currentCategory) {
    this.setState({ isHovering: true, currentCategory: currentCategory})
  }

  onMouseOut() {
    this.setState({ isHovering: false, currentCategory: '' })
  }

  getChildContext(currentCategory) {
    return {
      currentCategory: currentCategory
    };
  }

  render() {

    const teaserClass = classNames('teaser', this.props.className, {
      [`grow ${this.state.currentCategory}`]: this.state.isHovering,
      '': !this.state.isHovering
    });

    console.log(this.context.pictures)

    return (
      <div className="categoriesContainer">
        <Teaser teaserClass={teaserClass}/>
        <nav className="menu">
          <ul className="categories">
            {
              Object
                .keys(this.context.pictures)
                .map(categoryName => <Category
                  key={categoryName}
                  details={this.context.pictures[categoryName]}
                  categoryName={categoryName}
                  parentMouseOver={this.onMouseOver}
                  parentMouseOut={this.onMouseOut}
                  picturesNumber={this.context.pictures[categoryName].length} />)
            }

          </ul>
        </nav>
      </div>
    );
  }
}

Categories.contextTypes = {
  pictures: React.PropTypes.object
}

Categories.childContextTypes = {
  currentCategory: React.PropTypes.object,
};

export default Categories;
