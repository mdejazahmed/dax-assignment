import { useState } from "react"
import "./tag.css"
import Multiselect from "multiselect-react-dropdown";
import {RxCross2} from "react-icons/rx"

export const Tag = ({contacts}) => {
const [tags,setTags]=useState([])
const [selectOpen,setSelectOpen]=useState(false)

const handleAddTags=()=>{
  setSelectOpen(!selectOpen)
}

const handleSelect=(e)=>{
setTags((prev)=>[...prev,...e])
  setSelectOpen(false)
}

  return (
    <div className="tagContianer">
      <div className="tagWrapper">
        {tags.map((each)=>(
            <div key={each.id} className="imgContainaer">
              <img src={each.img} alt="" className="img"/>
              <button className="closeBtn">&#10006;</button>
            </div>
        ))}
        {selectOpen && <Multiselect options={contacts} displayValue="name" onSelect={handleSelect}/>}
        <button className="addBtn" onClick={handleAddTags}>+</button>
      </div>
    </div>
  )
}
