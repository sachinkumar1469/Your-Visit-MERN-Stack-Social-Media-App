import React, { useContext } from 'react';
import {NavLink} from 'react-router-dom';
import {FaUsers} from "react-icons/fa";
import {MdPlace,MdOutlineWhereToVote} from "react-icons/md";
import {RiLoginCircleFill} from "react-icons/ri";


import "./navLink.scss";
import { authContext } from '../../context/AuthContext';

function NavLinks() {
  const {isLoggedIn,currUser} = useContext(authContext);
  return (
    <div className="nav-links">
      {currUser && <div className='curr-user-info'>
        <NavLink to="/user">
          <span className='nav-links-icon nav-links-icon-img'>
            <img src={currUser.imageUrl} alt="" />
          </span> 
          <span>{currUser.name}</span>
        </NavLink>
      </div>}
      <div><NavLink to="/"><span className='nav-links-icon'><FaUsers/></span> <span>All Users</span></NavLink></div>
      {currUser &&  <div><NavLink to={`/${currUser.id}/places`}><span className='nav-links-icon'><MdPlace/></span> <span>My Places</span></NavLink></div>}      
      {currUser && <div><NavLink to="/places/new"><span className='nav-links-icon'><MdOutlineWhereToVote/></span> <span>New Place</span></NavLink></div>}
      {!currUser && <div><NavLink to="/login"><span className='nav-links-icon'><RiLoginCircleFill/></span> <span>Auth</span></NavLink></div>}    </div>
  )
}

export default NavLinks
