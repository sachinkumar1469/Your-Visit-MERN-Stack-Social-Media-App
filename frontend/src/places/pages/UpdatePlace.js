import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import useForm from '../../utils/useForm';

import Input from '../../shared/formComponents/Input';
import {authContext} from '../../context/AuthContext'
import axios from 'axios'

function UpdatePlace() {
  const {updatePlaceId} = useParams();
  const [loader,setLoader] = useState(false);
  const {token} = useContext(authContext)
  
  const navigate = useNavigate();

  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");

  useEffect(()=>{
    setLoader(true);
    axios.get(`${process.env.REACT_APP_API_URL}/api/places/${updatePlaceId}`)
    .then(result=>{
      // console.log("herrr")
      setTitle(result.data.title);
      setDescription(result.data.description);
      // console.log(title);
      setLoader(false);
    })
    .catch(err=>{
      console.log("unable to fetch place data in update place by id")
    })
  },[updatePlaceId])

  const updatePlaceHandler = (e)=>{
    axios.patch(`${process.env.REACT_APP_API_URL}/api/places/${updatePlaceId}`,{
      title,
      description
    },{
      headers:{
        "Authorization":`Bearer ${token}`
      }
    })
    .then(result=>{
      navigate('/');
    })
    .catch(err=>{
      console.log("unable to update")
    })
  }

  return (
    <div className='add-new-place'>
      { !loader ? <form className='new-place-form'>
      <Input
        type={"text"}
        placeHolder={"Enter New Title"}
        returnValueToParent={setTitle}
        id={"Title"}
        element={"input"}
        label={"Title"}
        defaultValue={title}
      />
      <Input
        type={"text"}
        placeHolder={"Enter New Description"}
        returnValueToParent={setDescription}
        id={"Description"}
        element={"input"}
        label={"Description"}
        defaultValue = {description}
      />
      <div className="btn" onClick={updatePlaceHandler}>Submit</div>
    </form> : <div>Loading</div>}
    
    </div>
  )
}

export default UpdatePlace
