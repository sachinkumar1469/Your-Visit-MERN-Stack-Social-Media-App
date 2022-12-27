import React, { useState } from 'react';

import "./placeitem.scss";
import Modal from '../../shared/UIElements/Modal';
import Map from '../../shared/UIElements/Map';
import map from '../../shared/UIElements/map.png'
import { Link, Navigate,redirect } from 'react-router-dom';

const PlaceItem = ({item}) => {
  const [showMap,setShowMap] = useState(false);
  const [deletePlace,setDeletePlace] = useState(false)
  const mapHandler = ()=>{
    setShowMap(!showMap);
  }
  const deleteHandler = (e)=>{
    setDeletePlace(false)
    console.log("Yes Delete");
  }
  return (
    <>
    <Modal 
      show={showMap} 
      header={item.address} 
      contentClass={"places-view-on-map-content"}
      footer={
        <button className='btn' onClick={mapHandler}>CLOSE</button>
      }
      footerClass={"place-view-on-map-footer"}
    >
      <img src={map} alt="" style={{width:"100%",transform:"scale(1.01)",height:"20rem"}} />
    </Modal>
    <Modal
      show={deletePlace}
      header={"Are you sure?"}
      contentClass={""}
      footer={
        <>
          <div className='btn' onClick={()=>{setDeletePlace(!deletePlace)}}>
            Cancel
          </div>
          <div className='btn primary' onClick={deleteHandler}>
            Confirm
          </div>
        </>
      }
      footerClass={"place-view-on-map-footer"}

    >
      {/* <p>Once deleted can't be undo.</p> */}
    </Modal>
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
        <button className='btn edit'> <Link to={`/places/${item.id}`}> EDIT </Link></button>
        <button className='btn delete' onClick={(e)=>{setDeletePlace(!deletePlace)}}>DELETE</button>
      </div>
    </div>
    </>
  )
}

export default PlaceItem
