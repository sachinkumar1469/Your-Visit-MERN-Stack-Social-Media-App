import React,{createContext, useCallback, useState} from 'react'

const authContext = createContext({
    isLoggedIn: false,
    login: ()=>{},
    logout:()=>{}
});
const {Provider,Consumer} = authContext;


const AuthContext = (props) => {
   const [isLoggedIn,setIsLoggedIn] = useState(false);

   
   const login = useCallback(()=>{
    setIsLoggedIn(true);
   },[]);
   
   const logout = useCallback(()=>{
    setIsLoggedIn(false);
   },[]);
   
    return (
    <Provider value={{isLoggedIn,login,logout}}>
        {props.children}
    </Provider>
  )
}

export {authContext};
export {AuthContext};
