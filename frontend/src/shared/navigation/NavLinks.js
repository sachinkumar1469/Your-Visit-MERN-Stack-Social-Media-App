import React from 'react';
import {NavLink} from 'react-router-dom';
import {FaUsers} from "react-icons/fa";
import {MdPlace,MdOutlineWhereToVote} from "react-icons/md";
import {RiLoginCircleFill} from "react-icons/ri";


import "./navLink.scss";

function NavLinks() {
  return (
    <div className="nav-links">
      <div><NavLink to="/user"><span className='nav-links-icon'><img src="https://www.sachinkr.cf/static/media/profile_picture1.f97b500564984d1b486b.jpg" alt="" /></span> <span>Sachin Yadav</span></NavLink></div>
      <div><NavLink to="/" exact><span className='nav-links-icon'><FaUsers/></span> <span>All Users</span></NavLink></div>
      <div><NavLink to="/123456/places"><span className='nav-links-icon'><MdPlace/></span> <span>My Places</span></NavLink></div>
      <div><NavLink to="/places/new"><span className='nav-links-icon'><MdOutlineWhereToVote/></span> <span>New Place</span></NavLink></div>
      <div><NavLink to="/auth"><span className='nav-links-icon'><RiLoginCircleFill/></span> <span>Auth</span></NavLink></div>
    </div>
  )
}

export default NavLinks
