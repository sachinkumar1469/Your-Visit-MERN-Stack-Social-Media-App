import React from 'react';
import PlaceList from '../components/PlaceList';
import {useParams} from 'react-router-dom'

import "./userPlaces.scss"

function UserPlaces() {
    const {userId} = useParams();
    const user = {
        name:"Unnati",
        id:"123456", 
        imageUrl:"https://pbs.twimg.com/media/FkmWba4UEAELwYq?format=jpg",
        lastPlaceImageUrl:"https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg",
        placeCount:5
    }
    const placeList = [
        {
            id:"1223334455",
            imageUrl:"https://images.pexels.com/photos/3881102/pexels-photo-3881102.jpeg",
            title:"Hey Unnati",
            description:"Beautiful thick charming lady",
            address:"Unkown House, Unkown Road, Unkown State, India",
            userId:"123456",
            coordinates:{lat:"-6.55521",lg:"-149.96366"},
        },
        {
            id:"1223334455",
            imageUrl:"https://images.pexels.com/photos/3881102/pexels-photo-3881102.jpeg",
            title:"Hey Unnati",
            description:"Beautiful thick charming lady",
            address:"Unkown House, Unkown Road, Unkown State, India",
            userId:"123456",
            coordinates:{lat:"-6.55521",lg:"-149.96366"},
        },
        {
            id:"1223334455",
            imageUrl:"https://images.pexels.com/photos/3881102/pexels-photo-3881102.jpeg",
            title:"Hey Unnati",
            description:"Beautiful thick charming lady",
            address:"Unkown House, Unkown Road, Unkown State, India",
            userId:"123456",
            coordinates:{lat:"-6.55521",lg:"-149.96366"},
        },
        {
            id:"1223334455",
            imageUrl:"https://images.pexels.com/photos/3881102/pexels-photo-3881102.jpeg",
            title:"Hey Unnati",
            description:"Beautiful thick charming lady",
            address:"Unkown House, Unkown Road, Unkown State, India",
            userId:"123456",
            coordinates:{lat:"-6.55521",lg:"-149.96366"},
        },
        {
            id:"1223334455",
            imageUrl:"https://images.pexels.com/photos/3881102/pexels-photo-3881102.jpeg",
            title:"Hey Unnati",
            description:"Beautiful thick charming lady",
            address:"Unkown House, Unkown Road, Unkown State, India",
            userId:"123456",
            coordinates:{lat:"-6.55521",lg:"-149.96366"},
        },
        {
            id:"1223334455",
            imageUrl:"https://images.pexels.com/photos/3881102/pexels-photo-3881102.jpeg",
            title:"Hey Unnati",
            description:"Beautiful thick charming lady",
            address:"Unkown House, Unkown Road, Unkown State, India",
            userId:"123456",
            coordinates:{lat:"-6.55521",lg:"-149.96366"},
        },
    ]
    return (
        <div className='user-places'>
            <div className="user-places-user-info">
                <div className="user-item__image" title={user.name}><img src={user.imageUrl} alt="" /></div>
                <div className='user-item__about'>
                    <div className='user-item_name'>{user.name}</div>
                    <div className='user-item_places'>{user.placeCount} {user.placeCount == 1 ? "Place" : "Places"}</div>
                </div>
                
            </div>
            <PlaceList items={placeList}/>
        </div>
    )
}

export default UserPlaces
