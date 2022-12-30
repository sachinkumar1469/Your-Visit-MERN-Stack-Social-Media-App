import React, { useContext,useState,useEffect } from 'react'
import useForm from '../utils/useForm';
import Input from '../shared/formComponents/Input';
import { authContext } from '../context/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Signup() {

  const navigate = useNavigate();
    const [[name,setName],[email,setEmail],[password,setPassword],[confirmPass,setConfirmPass]] = useForm("","","","");
    
    const {setCurrUser,setToken} = useContext(authContext);
    const [err,setErr] = useState({isErr:false,msg:""})

    const [image,setImage] = useState();
  const [previewUrl,setPreviewUrl] = useState();

  const handleImageChange = (e)=>{
    setImage(e.target.files[0]);
  }

  const handleSubmit = (e)=>{
    console.log("here 1")
    console.log(password)
    console.log(confirmPass)
    if(password !==  confirmPass){
      setErr({isErr:true,msg:"Password Mismatch"})
      return false;
    } 
    console.log("here 2")
    if(email && password && image){
      const formData = new FormData();
      formData.append("name",name)
      formData.append("email",email)
      formData.append("password",password)
      formData.append("image",image)

      axios.post(`${process.env.REACT_APP_API_URL}/api/users/signup`, formData)
      .then(result=>{
        console.log(result);
        setCurrUser(result.data);
        setToken(result.data.token);
        console.log(result);
        // navigate('/')
      }).catch(err=>{
        console.log(err);
        console.log("awwwwwwwwwwwwwwwwwwwwwwwwwwwwww error in signup")
      })

    } else {
      setErr({isErr:true,msg:"Error in signup. Please Check Inputs"})
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
          id="name" 
          label="Name" 
          placeHolder="Enter Name" 
          classNames="new-place-input" 
          returnValueToParent={setName} 
          validators={[]} 
          defaultValue={name} 
        />
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
          returnValueToParent={setConfirmPass} 
          validators={[]} 
          defaultValue={password}  
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
        {err.isErr && <p style={{color:"red"}}>{err.msg}</p>}
        
        <button className='btn' onClick={(e)=>{e.preventDefault();handleSubmit()}}>Signup</button>
      </form>
    </div>
  )
}

export default Signup
