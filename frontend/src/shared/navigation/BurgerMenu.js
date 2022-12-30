import React, { useContext } from 'react';
import {NavLink} from 'react-router-dom';
import {FaUsers} from "react-icons/fa";
import {MdPlace,MdOutlineWhereToVote} from "react-icons/md";
import {RiLoginCircleFill} from "react-icons/ri";

import './burgerMenu.scss';
import { authContext } from '../../context/AuthContext';

function BurgerMenu({toShow}) {
  const {currUser} = useContext(authContext);
  function toggleToShow(){
    toShow((old)=>{
      return !old;
    })
  }
  return (
    <div className='burger-menu'>
        <div className="nav-linkss">
            { currUser && <div><a href='#'><span className='nav-links-icon'><img src={currUser?.imageUrl} alt="" /></span> <span>{currUser?.name}</span></a></div>}
            <div><NavLink to="/" exact onClick={toggleToShow}><span className='nav-links-icon'><FaUsers/></span> <span>All Users</span></NavLink></div>
            {currUser && <div><NavLink to={`/${currUser.id}/places`} onClick={toggleToShow}><span className='nav-links-icon'><MdPlace/></span> <span>My Places</span></NavLink></div>}
            { currUser && <div><NavLink to="/places/new" onClick={toggleToShow}><span className='nav-links-icon'><MdOutlineWhereToVote/></span> <span>New Place</span></NavLink></div>}
            {  !currUser  &&  <div><NavLink to="/login" onClick={toggleToShow}><span className='nav-links-icon'><RiLoginCircleFill/></span> <span>Auth</span></NavLink></div>}        </div>
    </div>
  )
}

export default BurgerMenu
