import { useState } from "react";
import "./dropdown.css"
import {RxCross2} from "react-icons/rx"


export default function Dropdown({ placeHolder,options,label }) {
  
const [optArray,setOptArray]=useState([])
const [opt,setOpt]=useState("")

const handleChange=(e)=>{
    setOpt(e.target.value)
    if (!optArray.includes(e.target.value)){
        setOptArray((prev)=>[...prev,e.target.value])
    }
    
}

const handleCross=(e)=>{
    console.log(e.target)
    // const newArray=optArray.filter((each)=>e.targt.value)
    // console.log(newArray)
    // setOptArray(newArray)
}

    return (
        <>
            {/* <label htmlFor={label} className="label">{label}</label> */}
            <div className="inputContainer">
              
             <select name="select" multiple>
                <option>first</option>
                <option>scond</option>
                <option>third</option>
             </select>
            </div>
        </>
    );
  };
