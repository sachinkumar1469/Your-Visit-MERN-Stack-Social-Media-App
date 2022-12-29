import React,{createContext, useCallback, useEffect, useState} from 'react'

const authContext = createContext({
    isLoggedIn: false,
    login: ()=>{},
    logout:()=>{}
});
const {Provider,Consumer} = authContext;


const AuthContext = (props) => {
   const [isLoggedIn,setIsLoggedIn] = useState(false);

   const [currUser,setCurrUser] = useState({name: 'Unnati Yadav', imageUrl: 'https://pbs.twimg.com/media/FkmWba4UEAELwYq?format=jpg', id: '63ad946c59a7fbed195a2d80'});
   
  //  if(currUser){
  //   setIsLoggedIn(true)
  //  }else {
  //   setIsLoggedIn(false)
  //  }

  useEffect(()=>{
    if(currUser){
      setIsLoggedIn(true);
    }else {
      setIsLoggedIn(false);
    }
  },[currUser])
   
    return (
    <Provider value={{isLoggedIn,currUser,setCurrUser}}>
        {props.children}
    </Provider>
  )
}

export {authContext};
export {AuthContext};
