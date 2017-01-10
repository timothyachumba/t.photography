import React from 'react'

class Photo extends React.Component {
  render() {
    return (
      <img
        src={this.props.details.image}
        className={this.props.class}
        id={this.props.id}
        width={this.props.width}
        height={this.props.height}
        alt={this.props.alt}/>
    );
  }
}


export default Photo;
