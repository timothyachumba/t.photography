import React from 'react'

class ViewToggleIcon extends React.Component {

  render() {
    return (
      <div
        className={"viewToggleIcon " + this.context.mode}>

        <div id="grid" stroke="#000000" strokeWidth="2" fill="none">
          <div id="firstGrid" transform="translate(1.000000, 1.000000)">
            <span className="frame"></span>
            <span className="tl" width="18" height="10" y="4" x="0"></span>
            <span className="tr" width="10" height="18" x="28" y="0"></span>
            <span className="bl" width="10" height="18" x="0" y="24"></span>
            <span className="br" width="18" height="10" x="24" y="24"></span>
            <span className="thridSlide" width="18" height="10" x="24" y="4"></span>
          </div>
          <div id="secondGrid" transform="translate(1.000000, 1.000000)">
            <span className="tl" width="18" height="10" y="4" x="0"></span>
            <span className="tr" width="10" height="18" x="28" y="0"></span>
            <span className="bl" width="10" height="18" x="0" y="24"></span>
            <span className="br" width="18" height="10" x="24" y="24"></span>
          </div>
        </div>
    </div>
    );
  }
}

ViewToggleIcon.contextTypes = {
  mode: React.PropTypes.string
}

export default ViewToggleIcon;
