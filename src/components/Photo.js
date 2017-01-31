import React from 'react'

class Photo extends React.Component {
  render() {
    return (
      <img
        src={`${process.env.PUBLIC_URL}/images/photos/${this.props.category}/${this.props.details}`}
        className={this.props.class}
        id={this.props.id}
        width={this.props.width}
        height={this.props.height}
        alt={this.props.alt}/>
    );
  }
}


export default Photo;
