import React from 'react'

class Photo extends React.Component {
  render() {
    return (
      <img
        src={this.props.details.image}
        className={this.props.class}
        width={this.props.width}
        height={this.props.height}
        alt={this.props.alt}/>
    );
  }
}


export default Photo;
