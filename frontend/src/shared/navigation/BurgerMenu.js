import React from 'react';
import {NavLink} from 'react-router-dom';
import {FaUsers} from "react-icons/fa";
import {MdPlace,MdOutlineWhereToVote} from "react-icons/md";
import {RiLoginCircleFill} from "react-icons/ri";

import './burgerMenu.scss';

function BurgerMenu({toShow}) {
  function toggleToShow(){
    toShow((old)=>{
      return !old;
    })
  }
  return (
    <div className='burger-menu'>
        <div className="nav-linkss">
            <div><a href='#'><span className='nav-links-icon'><img src="https://www.sachinkr.cf/static/media/profile_picture1.f97b500564984d1b486b.jpg" alt="" /></span> <span>Sachin Yadav</span></a></div>
            <div><NavLink to="/" exact onClick={toggleToShow}><span className='nav-links-icon'><FaUsers/></span> <span>All Users</span></NavLink></div>
            <div><NavLink to="/123456/places" onClick={toggleToShow}><span className='nav-links-icon'><MdPlace/></span> <span>My Places</span></NavLink></div>
            <div><NavLink to="/places/new" onClick={toggleToShow}><span className='nav-links-icon'><MdOutlineWhereToVote/></span> <span>New Place</span></NavLink></div>
            <div><NavLink to="/login" onClick={toggleToShow}><span className='nav-links-icon'><RiLoginCircleFill/></span> <span>Auth</span></NavLink></div>
        </div>
    </div>
  )
}

export default BurgerMenu
