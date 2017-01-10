import React from 'react'
import HeaderControls from './HeaderControls'
import CategoryDetails from './CategoryDetails'
import logo from '../logo.svg'
import { Match, Link } from 'react-router'

const Header = (props) => {
  return (
    <div className="header">
      <div className="logo">
        <Link to={`/`}>
          <img src={logo} className="logo" alt="logo" />
        </Link>
      </div>
      <Match pattern="/:category" component={CategoryDetails} />
      <Match pattern="/:category" component={HeaderControls} />
    </div>
  );

}

export default Header;
