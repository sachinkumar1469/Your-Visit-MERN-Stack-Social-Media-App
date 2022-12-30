import React,{createContext, useCallback, useEffect, useState} from 'react'


const authContext = createContext({
    isLoggedIn: false,
    login: ()=>{},
    logout:()=>{}
});
const {Provider,Consumer} = authContext;


const AuthContext = (props) => {
   const [isLoggedIn,setIsLoggedIn] = useState(false);
   const [token,setToken] = useState("");

  //  const [currUser,setCurrUser] = useState({name: 'Unnati Yadav', imageUrl: 'https://pbs.twimg.com/media/FkmWba4UEAELwYq?format=jpg', id: '63ad946c59a7fbed195a2d80'});
   const [currUser,setCurrUser] = useState(null);
   
  //  if(currUser){
  //   setIsLoggedIn(true)
  //  }else {
  //   setIsLoggedIn(false)
  //  }

  

  useEffect(()=>{
    if(currUser){
      setIsLoggedIn(true);
      // const tokenExpiry = new Date(new Date().getTime() + (1000*60*60));
      // currUser.tokenExpiry = tokenExpiry.toISOString();
      localStorage.setItem("currUser",JSON.stringify(currUser)) // Including token
    }else {
      if(localStorage.getItem("currUser")){
        setCurrUser(JSON.parse(localStorage.getItem("currUser")));
        setToken(JSON.parse(localStorage.getItem("currUser")));
        setIsLoggedIn(true);
      }else{
        setIsLoggedIn(false);

      }
    }
  },[currUser,token])
   
    return (
    <Provider value={{isLoggedIn,currUser,setCurrUser,token,setToken}}>
        {props.children}
    </Provider>
  )
}

export {authContext};
export {AuthContext};
