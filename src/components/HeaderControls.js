import React from 'react'
import {Link} from 'react-router'
import ViewToggleIcon from './ViewToggleIcon'
import CloseViewIcon from './CloseViewIcon'

class HeaderControls extends React.Component {

  render() {
    return (
      <div className="headerControls">
        <ViewToggleIcon/>
        <Link
          to={`/`}>
          <CloseViewIcon />
        </Link>

      </div>
    );
  }
}


export default HeaderControls;
