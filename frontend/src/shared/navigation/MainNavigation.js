import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';

import BurgerMenu from './BurgerMenu';
import {RxHamburgerMenu} from "react-icons/rx";


import "./mainNavigation.scss";
import MainHeader from './MainHeader';
import { authContext } from '../../context/AuthContext';

function MainNavigation() {
  const navigate= useNavigate();
  const {pathname} = useLocation();
  const [toShow,setToShow] = useState(false);
  const {isLoggedIn,setCurrUser,setToken} = useContext(authContext);

  const deleteHandler = (e)=>{
    setCurrUser(null);
    setToken("");
    localStorage.removeItem("currUser");
  }
  return (
    <MainHeader>
      <h1 className='main-navigation-title'><Link to="/">Your-Visit</Link></h1>
      {toShow && <BurgerMenu toShow={setToShow}/>}
      <div className="aut">
        {isLoggedIn && <div className='btn auth-btn logout-btn' onClick={deleteHandler}>Logout</div>}
        {pathname == "/login" && <div className='btn auth-btn' onClick={()=>{navigate("/signup")}}>Signup</div>}
        {pathname == "/signup" && <div className='btn auth-btn' onClick={()=>{navigate("/login")}}>Login</div>}
      </div>
      <button className='main-navigation-hamburger' ><RxHamburgerMenu onClick={()=>{setToShow(!toShow)}}/></button>
    </MainHeader>
  )
}

export default MainNavigation
