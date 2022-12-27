import React, { useEffect, useReducer, useState } from 'react';
import "./Input.scss";



const inputReducer = (state,action)=>{
    // console.log("Dispatcher calle with value",action.payload)
    switch(action.type){
        case "CHANGE" : 
            return {
                value:action.payload,
                isValid:true
            };
        default:
            return state;
    }
}

const Input = ({element,id,type,returnValueToParent,label,placeHolder, classNames,defaultValue}) => {
    const [inputState, dispatch] = useReducer(inputReducer,{value:defaultValue ? defaultValue : "",isValid:true});
    const onChangeHandler = (e)=>{
        dispatch({type:"CHANGE",payload:e.target.value})
        
    }
    const element1 = element === "input" ? 
    (
        <input 
            type={type} 
            id={id}
            name={id}
            placeholder={placeHolder} 
            className="Input-input" 
            value={inputState.value}
            onChange={onChangeHandler}
        />
    ) : 
    (
        <textarea 
            name={id} 
            id={id}  
            rows="1"
            className="Input-input"

            onChange={onChangeHandler}
        ></textarea>
    );

    useEffect(()=>{
        returnValueToParent(inputState.value)
    },[inputState])
  return (
    <div className={`input-wrapper ${classNames}`}>
        <label htmlFor={id}>{label}</label>
        {element1}
    </div>
  )
}

export default Input
