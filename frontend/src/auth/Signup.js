import React, { useContext } from 'react'
import useForm from '../utils/useForm';
import Input from '../shared/formComponents/Input';
import { authContext } from '../context/AuthContext';
function Signup() {
    const [[email,setEmail],[password,setPassword],[confirmPass,setConfirmPass]] = useForm("","","");
    const autContext = useContext(authContext);
    console.log(autContext);
  return (
    <div className='add-new-place'>
      <form className='new-place-form'>
        <Input 
          type="email" 
          element="input" 
          id="Email" 
          label="Email" 
          placeHolder="Enter Email" 
          classNames="new-place-input" 
          returnValueToParent={setEmail} 
          validators={[]} 
          defaultValue={email} 
        />
        <Input 
          type="password" 
          element="input" 
          id="Password" 
          label="Password" 
          placeHolder="Enter Password" 
          classNames="new-place-input" 
          returnValueToParent={setPassword} 
          validators={[]} 
          defaultValue={password}  
        />
        <Input 
          type="password" 
          element="input" 
          id="ConPassword" 
          label="Confirm Password" 
          placeHolder="Enter Password" 
          classNames="new-place-input" 
          returnValueToParent={setPassword} 
          validators={[]} 
          defaultValue={password}  
        />
        
        <button className='btn' onClick={(e)=>{e.preventDefault();console.log(email,password)}}>Signup</button>
      </form>
    </div>
  )
}

export default Signup
