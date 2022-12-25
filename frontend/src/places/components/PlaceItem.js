import React, { useState } from 'react';

import "./placeitem.scss";
import Modal from '../../shared/UIElements/Modal';

const PlaceItem = ({item}) => {
  const [showMap,setShowMap] = useState(false);
  const mapHandler = ()=>{
    setShowMap(!showMap);
  }
  return (
    <>
    <Modal show={showMap} header={item.address} footer={<button className='btn' onClick={mapHandler}>CLOSE</button>}/>
    <div className='user-places-item'>
      <div className="user-places-item-image">
        <img src={item.imageUrl} alt="" />
      </div>
      <div className="user-places-item-title">
        {item.title}
      </div>
      <div className="user-places-item-address">
        {item.address}
      </div>
      <div className="user-places-item-description">
        {item.description}
      </div>
      <div className="user-places-item-buttons">
        <button className='btn view' onClick={mapHandler}>VIEW ON MAP</button>
        <button className='btn edit'>EDIT</button>
        <button className='btn delete'>DELETE</button>
      </div>
    </div>
    </>
  )
}

export default PlaceItem
