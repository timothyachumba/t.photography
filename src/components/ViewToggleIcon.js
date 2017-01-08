import React from 'react'

class ViewToggleIcon extends React.Component {

  render() {
    return (
      <svg
        className={"viewToggleIcon " + this.context.mode}
        width="20px"
        height="20px"
        viewBox="0 0 20 20"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g id="grid" stroke="#000000" strokeWidth="2" fill="none">
          <g id="firstGrid" transform="translate(1.000000, 1.000000)">
            <rect className="frame"></rect>
            <rect className="tl"></rect>
            <rect className="tr"></rect>
            <rect className="bl"></rect>
            <rect className="br"></rect>
            <rect className="thridSlide"></rect>
          </g>
          <g id="secondGrid" transform="translate(1.000000, 1.000000)">
            <rect className="br" x="11" y="13" width="7" height="5"></rect>
            <rect className="bl" x="0" y="9" width="7" height="9"></rect>
            <rect className="tr" x="11" y="0" width="7" height="9"></rect>
            <rect className="tl" x="0" y="0" width="7" height="5"></rect>
          </g>
        </g>
    </svg>
    );
  }
}

ViewToggleIcon.contextTypes = {
  mode: React.PropTypes.string
}

export default ViewToggleIcon;
