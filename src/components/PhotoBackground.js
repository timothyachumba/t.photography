import React from 'react'

class PhotoBackground extends React.Component {
  render() {
    const divStyle = {
      backgroundImage: 'url(' + this.props.details.image + ')'
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
