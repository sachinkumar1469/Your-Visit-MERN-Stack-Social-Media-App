import React from 'react';
import UserList from '../components/UserList';

function User() {
  const USERS = [
    {
      name:"Unnati",
      id:"123456", 
      imageUrl:"https://pbs.twimg.com/media/FkmWba4UEAELwYq?format=jpg",
      lastPlaceImageUrl:"https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg",
      placeCount:5
    },
    {
      name:"Unnati",
      id:"123456", 
      imageUrl:"https://pbs.twimg.com/media/FkmWba4UEAELwYq?format=jpg",
      lastPlaceImageUrl:"https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg",
      placeCount:5
    },
    {
      name:"Unnati",
      id:"123456", 
      imageUrl:"https://pbs.twimg.com/media/FkmWba4UEAELwYq?format=jpg",
      lastPlaceImageUrl:"https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg",
      placeCount:5
    },
    {
      name:"Unnati",
      id:"123456", 
      imageUrl:"https://pbs.twimg.com/media/FkmWba4UEAELwYq?format=jpg",
      lastPlaceImageUrl:"https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg",
      placeCount:5
    },
    {
      name:"Unnati",
      id:"123456", 
      imageUrl:"https://pbs.twimg.com/media/FkmWba4UEAELwYq?format=jpg",
      lastPlaceImageUrl:"https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg",
      placeCount:5
    },
    {
      name:"Unnati",
      id:"123456", 
      imageUrl:"https://pbs.twimg.com/media/FkmWba4UEAELwYq?format=jpg",
      lastPlaceImageUrl:"https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg",
      placeCount:5
    },
  ]
  return (
    <UserList items={USERS}/>
  )
}

export default User;
