import React from 'react'

class PhotoBackground extends React.Component {
  render() {
    const divStyle = {
      backgroundImage: `url(${process.env.PUBLIC_URL}/images/photos/${this.props.category}/${this.props.details})`
    };

    return (
      <div
        style={divStyle}
        className={this.props.class}
        alt={this.props.alt}></div>
    );
  }
}

export default PhotoBackground;
