import "./lorries.css"
import Multiselect from "multiselect-react-dropdown";
import {RiArrowDropDownLine} from "react-icons/ri"



export default function Lorries({placeholder,options,label}) {
  return (
    <div className="lorryContainer">
        <label htmlFor={label} className="label">
        {label}
        </label>
        <div className="input">
        <Multiselect className="select" options={options} placeholder={placeholder} displayValue="truckNo"/>
        <RiArrowDropDownLine/>
        </div>
    </div>
  )
}
