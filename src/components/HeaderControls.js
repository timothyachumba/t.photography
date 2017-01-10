import React from 'react'
import {Link} from 'react-router'
import ViewToggleIcon from './ViewToggleIcon'
import CloseViewIcon from './CloseViewIcon'

class HeaderControls extends React.Component {
  render() {

    const gridModeLink =  `/`+this.context.category+`/grid`;
    const galleryModeLink = `/`+this.context.category
    var ViewToggleIconLink = galleryModeLink


    if (this.context.mode === 'gridMode') {
      ViewToggleIconLink = gridModeLink
    } else {
      ViewToggleIconLink = galleryModeLink
    }

    return (
      <div className="headerControls">
        <Link to={ViewToggleIconLink}>
          <ViewToggleIcon/>
        </Link>

        <Link
          to={`/`}>
          <CloseViewIcon />
        </Link>

      </div>
    );
  }
}

HeaderControls.contextTypes = {
  category: React.PropTypes.string,
  mode: React.PropTypes.string
}

export default HeaderControls;
