import React from 'react';
import "./userItem.scss";
import {Link} from "react-router-dom";

function UserItem({user}) {
  // console.log(user)
  return (
    <div className='user-item'>
      <Link to={`/${user.id}/places`}>
      <div className="user-item__content">
        <div className="user-item__info">
          <div className="user-item__image" title={user.name}><img src={user.imageUrl} alt="" /></div>
          <div className='user-item__about'>
            <div className='user-item_name'>{user.name}</div>
            <div className='user-item_places'>{user.totalPlaces} {user.totalPlaces == 1 ? "Place" : "Places"}</div>
          </div>
        </div>
        <div className="user-item__lastPlace">
          <div className="user-item__lastImage">
            <img src={user.lastPlaceImageUrl} alt="" />
          </div>
        </div>
      </div>
      </Link>
    </div>
  )
}

export default UserItem;
