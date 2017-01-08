import React from 'react'

class PhotoInfoIcon extends React.Component {

  render() {
    return (
      <svg
        className="photoInfoIcon"
        width="20px"
        height="20px"
        viewBox="0 0 20 20"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink">
        <g id="_lib/icon/info" stroke="none" strokeWidth="1" fill="none" fill-rule="evenodd">
          <rect id="Rectangle-2" stroke="#000000" strokeWidth="2" x="1" y="1" width="18" height="18"></rect>
          <rect className="bl move" fill="#000000" x="9" y="13" width="6" height="2"></rect>
          <rect className="ml move" fill="#000000" x="11" y="9" width="4" height="2"></rect>
          <rect className="tl move" fill="#000000" x="10" y="5" width="5" height="2"></rect>
          <rect className="bs move" fill="#000000" x="5" y="13" width="2" height="2"></rect>
          <rect className="ms move" fill="#000000" x="5" y="9" width="2" height="2"></rect>
          <rect className="ts move" fill="#000000" x="5" y="5" width="2" height="2"></rect>
        </g>
      </svg>
    );
  }
}

export default PhotoInfoIcon;
