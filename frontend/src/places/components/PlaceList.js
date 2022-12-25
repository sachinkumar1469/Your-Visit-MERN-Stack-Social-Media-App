import React from 'react';
import "./placeList.scss";

import PlaceItem from './PlaceItem';

function PlaceList({items}) {
  // console.log(items)
  if(items.length == 0){
    return (
      <div className="center">
        No Place Found for this User
      </div>
    )
  }
  return (
    <div className='user-places-list'>
      {items.map((item,index)=>{
        return <PlaceItem key={`sadfsfs${index}`} item={item}/>
      })}
    </div>
  )
}

export default PlaceList
