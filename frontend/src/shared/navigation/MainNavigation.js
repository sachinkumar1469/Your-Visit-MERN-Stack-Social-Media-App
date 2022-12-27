import React, { useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';

import BurgerMenu from './BurgerMenu';
import {RxHamburgerMenu} from "react-icons/rx";


import "./mainNavigation.scss";
import MainHeader from './MainHeader';

function MainNavigation() {
  const navigate= useNavigate();
  const {pathname} = useLocation();
  const [toShow,setToShow] = useState(false);
  return (
    <MainHeader>
      <h1 className='main-navigation-title'><Link to="/">Your-Visit</Link></h1>
      {/* <button className='main-navigation-hamburger' ><RxHamburgerMenu onClick={()=>{setToShow(!toShow)}}/></button> */}
      {toShow && <BurgerMenu toShow={setToShow}/>}
      <div className="aut">
        {pathname == "/login" && <div className='btn auth-btn' onClick={()=>{navigate("/signup")}}>Signup</div>}
        {pathname == "/signup" && <div className='btn auth-btn' onClick={()=>{navigate("/login")}}>Login</div>}
      </div>
    </MainHeader>
  )
}

export default MainNavigation
