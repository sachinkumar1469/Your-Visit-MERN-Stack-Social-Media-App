import React, { useEffect, useState } from 'react';
import UserList from '../components/UserList';
import axios from 'axios'

function User() {
  const USERS = [
    {
      name:"Unnati",
      id:"123456", 
      imageUrl:"https://pbs.twimg.com/media/FkmWba4UEAELwYq?format=jpg",
      lastPlaceImageUrl:"https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg",
      placeCount:5
    }
  ]
  
  const [users,setUsers] = useState([]);

  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_API_URL}/api/users/`)
    .then(result=>{
      setUsers(result.data)
    })
    .catch(err=>{
      console.log(err);
    })
  },[])
  return (
    <UserList items={users}/>
  )
}

export default User;
