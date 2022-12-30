import React, { useContext, useEffect, useState } from 'react';

import "./newPlace.scss";
import Input from '../../shared/formComponents/Input';
import useForm from '../../utils/useForm';

import {useNavigate} from 'react-router-dom'

import axios from "axios";

import {authContext} from "../../context/AuthContext"

function NewPlace() {

  const navigate = useNavigate();

  const {currUser,token} = useContext(authContext);

  const [[title,setTitle],[address,setAddress],[description,setDescription]] = useForm("","","")

  const [image,setImage] = useState();
  const [previewUrl,setPreviewUrl] = useState();

  const handleImageChange = (e)=>{
    setImage(e.target.files[0]);
  }


  const addNewPlaceHandler = (e)=>{
    if(title && address && description && image){
      const formData = new FormData();
      formData.append("title",title)
      formData.append("address",address)
      formData.append("description",description)
      formData.append("image",image)
      formData.append("userId",currUser.id);

      axios.post(`${process.env.REACT_APP_API_URL}/api/places/`, formData,{
        headers:{
          "Authorization":`Bearer ${token}`
        }
      })
      .then(result=>{
        navigate('/')
      }).catch(err=>{
        console.log(err);
        console.log("awwwwwwwwwwwwwwwwwwwwwwwwwwwwww")
      })

    } else {
      console.log("error in upload signup")
    }
  }

  useEffect(()=>{
    if(!image){
      return
    }
    const fileReader = new FileReader();
    fileReader.onload = ()=>{
      setPreviewUrl(fileReader.result);
      // console.log(fileReader.result);
    }
    fileReader.readAsDataURL(image);
  },[image])

  return (
    <div className='add-new-place'>
      <form className='new-place-form'>
        <Input 
          type="text" 
          element="input" 
          id="title" 
          label="Title" 
          placeHolder="Enter Place Name" 
          classNames="new-place-input" 
          returnValueToParent={setTitle} 
          validators={[]} 
          defaultValue={title} 
        />
        <Input 
          type="text" 
          element="input" 
          id="Location" 
          label="Address" 
          placeHolder="Enter Full Address" 
          classNames="new-place-input" 
          returnValueToParent={setAddress} 
          validators={[]} 
          defaultValue={address}  
        />
        <Input 
          type="text" 
          element="input" 
          id="Description" 
          label="Description" 
          placeHolder="Add Description" 
          classNames="new-place-input" 
          returnValueToParent={setDescription} 
          validators={[]} 
          defaultValue={description}  
        />
        <div className="input-wrapper input-new-place-img">
          <label htmlFor="image">Image</label>
          <input 
          type="file" 
          name="" 
          id="image" 
          accept='.jpg,.png,.jpeg'
          onChange={handleImageChange}/>
        </div>
        {previewUrl && <div className="preview-img">
          <img src={previewUrl} alt="" />
        </div>}
        <button className='btn' onClick={(e)=>{e.preventDefault();addNewPlaceHandler()}}>Add Place</button>
      </form>
    </div>
  )
}

export default NewPlace
