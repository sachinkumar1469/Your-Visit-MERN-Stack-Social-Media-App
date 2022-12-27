import React,{useState} from "react";

export default (...inputs)=>{
    let final = []
    inputs.map(input=>{
        const initialValue = input;
        const [inputValue,setInputValue] = useState(initialValue);
        final.push([inputValue,setInputValue])
    })
    return final;
}