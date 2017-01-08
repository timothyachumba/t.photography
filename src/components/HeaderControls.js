import React from 'react'

import ViewToggleIcon from './ViewToggleIcon'
import PhotoInfoIcon from './PhotoInfoIcon'
import CloseViewIcon from './CloseViewIcon'

class HeaderControls extends React.Component {

  render() {
    return (
      <div className="headerControls">
        <ViewToggleIcon/>
        <PhotoInfoIcon />
        <CloseViewIcon />
      </div>
    );
  }
}

export default HeaderControls;
