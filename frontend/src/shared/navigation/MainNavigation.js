import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import BurgerMenu from './BurgerMenu';
import {RxHamburgerMenu} from "react-icons/rx";


import "./mainNavigation.scss";
import MainHeader from './MainHeader';

function MainNavigation() {
  const [toShow,setToShow] = useState(false);
  return (
    <MainHeader>
      <h1 className='main-navigation-title'><Link to="/">Your-Visit</Link></h1>
      <button className='main-navigation-hamburger' ><RxHamburgerMenu onClick={()=>{setToShow(!toShow)}}/></button>
      {toShow && <BurgerMenu toShow={setToShow}/>}
    </MainHeader>
  )
}

export default MainNavigation
