import React, { useContext, useState } from 'react';

import "./placeitem.scss";
import Modal from '../../shared/UIElements/Modal';
import Map from '../../shared/UIElements/Map';
import map from '../../shared/UIElements/map.png'
import { Link, Navigate,redirect, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {authContext} from '../../context/AuthContext'

const PlaceItem = ({item,isOwner}) => {
  const navigate = useNavigate();
  const {currUser,token} = useContext(authContext);
  console.log(isOwner);
  const [showMap,setShowMap] = useState(false);
  const [deletePlace,setDeletePlace] = useState(false)
  const mapHandler = ()=>{
    setShowMap(!showMap);
  }
  const deleteHandler = (e)=>{
    setDeletePlace(false);
    axios.delete(`${process.env.REACT_APP_API_URL}/api/places/${item._id}`,{
      headers:{
        "Authorization":`Bearer ${token}`
      }
    })
    .then(result=>{
      navigate(`${currUser.id}/places`)
    })
    .catch(err=>{
      console.log(err);
    })
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
        { isOwner && <button className='btn edit'> <Link to={`/places/${item._id}`}> EDIT </Link></button>}
        { isOwner && <button className='btn delete' onClick={(e)=>{setDeletePlace(!deletePlace)}}>DELETE</button>}
      </div>
    </div>
    </>
  )
}

export default PlaceItem
