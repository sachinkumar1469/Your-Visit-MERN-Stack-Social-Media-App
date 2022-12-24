import React from 'react';
import { Link } from 'react-router-dom';

import {RxHamburgerMenu} from "react-icons/rx";

import "./mainNavigation.scss";
import MainHeader from './MainHeader';

function MainNavigation() {
  return (
    <MainHeader>
      <h1 className='main-navigation-title'><Link to="/">Your-Visit</Link></h1>
      <button className='main-navigation-hamburger'><RxHamburgerMenu/></button>
    </MainHeader>
  )
}

export default MainNavigation
