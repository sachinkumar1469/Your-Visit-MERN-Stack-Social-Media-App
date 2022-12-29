import React from 'react';

import "./newPlace.scss";
import Input from '../../shared/formComponents/Input';
import useForm from '../../utils/useForm';

function NewPlace() {
  const [[title,setTitle],[address,setAddress],[description,setDescription],[image,setImage]] = useForm("","","",null)

  const handleImageChange = (e)=>{
    console.log(image);
    setImage(e.target.file)
  }


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
          <input type="file" name="" id="image" onChange={handleImageChange}/>
        </div>
        <button className='btn' onClick={(e)=>{e.preventDefault();console.log(title,address)}}>Add Place</button>
      </form>
    </div>
  )
}

export default NewPlace
