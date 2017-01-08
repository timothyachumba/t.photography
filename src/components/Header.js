import React from 'react'
import HeaderControls from './HeaderControls'
import CategoryDetails from './CategoryDetails'
import logo from '../logo.svg'
import { Match } from 'react-router'

const Header = (props) => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <Match pattern="/:category" component={HeaderControls} />
      <Match pattern="/:category" component={CategoryDetails} />
    </div>
  );

}


export default Header;
