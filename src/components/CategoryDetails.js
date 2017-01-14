import React from 'react'

class CategoryDetails extends React.Component {

  render() {
    return (
      <div className="categoryDetails">
        <span className="categoryName">{this.context.category}</span>
      </div>
    );
  }
}

CategoryDetails.contextTypes = {
  category: React.PropTypes.string
}


export default CategoryDetails;
