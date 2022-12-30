import React, { useContext, useEffect, useState } from 'react';
import PlaceList from '../components/PlaceList';
import {useParams} from 'react-router-dom';

import axios from "axios"

import "./userPlaces.scss"
import { authContext } from '../../context/AuthContext';

function UserPlaces() {
    const {userId} = useParams();

    const {currUser} = useContext(authContext);

    let isOwner = false;

    if(currUser?.id == userId){
        isOwner = true;
    }

    const [userLoader,setUserLoader] = useState(false)
    const [placeLoader,setPlaceLoader] = useState(false)
    const [selectedUser,setSelectedUser] = useState(null);
    const [placeList,setPlaceList] = useState([]);


    useEffect(()=>{
        setUserLoader(true)
        axios.get(`${process.env.REACT_APP_API_URL}/api/users/${userId}`)
        .then(result=>{
            setUserLoader(false)
            setSelectedUser(result.data);
        })
        .catch(err=>{
            console.log("Unable to find selected user in UserPlace")
        })
    },[])


    useEffect(()=>{
        setPlaceLoader(true);
        axios.get(`${process.env.REACT_APP_API_URL}/api/places/user/${userId}`)
        .then(result=>{
            setPlaceLoader(false);
            setPlaceList(result.data)
        })
        .catch(err=>{
            console.log("Unable to find places of user in UserPlaces")
        })
    },[])
    return (
        <div className='user-places'>
            { !userLoader ? (<div className="user-places-user-info">
                <div className="user-item__image" title={selectedUser?.name}><img src={selectedUser?.imageUrl} alt="" /></div>
                <div className='user-item__about'>
                    <div className='user-item_name'>{selectedUser?.name}</div>
                    <div className='user-item_places'>{selectedUser?.totalPlaces} {selectedUser?.totalPlaces == 1 ? "Place" : "Places"}</div>
                </div>
                
            </div>) : (<div className="user-places-user-info"> Loading user info.. </div>)}
            { !placeLoader ?  <PlaceList items={placeList} isOwner={isOwner}/> : <div className='user-places-list'>Loading user places...</div>}
        </div>
    )
}

export default UserPlaces



// const user = {
//     name:"Unnati",
//     id:"123456", 
//     imageUrl:"https://pbs.twimg.com/media/FkmWba4UEAELwYq?format=jpg",
// }
// const placeLists = [
//     {
//         id:"1223334455",
//         imageUrl:"https://images.pexels.com/photos/3881102/pexels-photo-3881102.jpeg",
//         title:"Hey Unnati",
//         description:"Beautiful thick charming lady",
//         address:"Unkown House, Unkown Road, Unkown State, India",
//         userId:"123456",
//         coordinates:{lat:"-6.55521",lg:"-149.96366"},
//     },
    
// ]
