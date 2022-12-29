import React, { useContext, useState } from 'react'
import useForm from '../utils/useForm';
import Input from '../shared/formComponents/Input';
import {authContext} from "../context/AuthContext";
import axios from 'axios'


function Login() {
    const [[email,setEmail],[password,setPassword]] = useForm("","");
    const {isLoggedIn,currUser,setCurrUser} = useContext(authContext);
    const [err,setErr] = useState(false);


    const loginHandler = (e)=>{
      if(email){
        axios.post("http://localhost:8081/api/users/login",{
          email,
          password
        })
        .then((result)=>{
          setCurrUser(result.data)
        })
        .catch(err=>{
          setErr(true);
          console.log("error in login");
        })
      }

    }
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
        {err && <p style={{color:"red"}}>Invalid email or password!</p>}
        
        <button className='btn' onClick={(e)=>{e.preventDefault();loginHandler()}}>Login</button>
      </form>
    </div>
  )
}

export default Login
