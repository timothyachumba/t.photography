import React from 'react'

class PhotoBackground extends React.Component {
  render() {
    const divStyle = {
      backgroundImage: `url(${process.env.PUBLIC_URL}/images/photos/${this.context.category}/${this.props.details})`
    };

    return (
      <div
        style={divStyle}
        className={this.props.class}
        alt={this.props.alt}></div>
    );
  }
}

PhotoBackground.contextTypes = {
  category: React.PropTypes.string
}

export default PhotoBackground;
