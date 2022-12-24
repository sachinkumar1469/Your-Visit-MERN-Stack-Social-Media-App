import React from 'react';
import UserItem from './UserItem';
import "./userList.scss";

function UserList(props) {
  const items = props.items;
  if(items.length==0){
    return (
      <div className="center">
        <h2>No Users Found!</h2>
      </div>
    )
  } 
  return (
    <div className='users-list'>
      {items.map((item,index)=>{
        return <UserItem key={`userItem${index}`} user={item}/>
      })}
    </div>
  )
}

export default UserList
