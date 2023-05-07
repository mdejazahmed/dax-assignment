import "./bottom.css";

import Multiselect from "multiselect-react-dropdown";
import { useState } from "react";

import { BiCurrentLocation } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import Lorries from "../lorries/Lorries";
import { ContactCard } from "../contactCard/ContactCard";

const material=[
  {id:1,truckNo:"Coal"},
  {id:2,truckNo:"Vegitables"},
  {id:3,truckNo:"Steel"},
  {id:4,truckNo:"Cement"}
]

const lorries=[
  {id:1,img:"",truckNo:"truck number 1"},
  {id:2,img:"",truckNo:"truck number 2"},
  {id:3,img:"",truckNo:"truck number 3"},
  {id:4,img:"",truckNo:"truck number 4"}
]

const contacts=[
  {id:1,img:"https://res.cloudinary.com/dxxh8iica/image/upload/v1661665337/cld-sample-5.jpg",truckNo:"Akash"},
  {id:2,img:"https://res.cloudinary.com/dxxh8iica/image/upload/v1661665336/cld-sample-3.jpg",truckNo:"Ejaz"},
  {id:3,img:"https://res.cloudinary.com/dxxh8iica/image/upload/v1661665337/cld-sample-5.jpg",truckNo:"Sanat"},
  {id:4,img:"https://res.cloudinary.com/dxxh8iica/image/upload/v1661665336/cld-sample-3.jpg",truckNo:"Haneef"}
]

export const Bottom = () => {
const [tagPeople,setTagPeople]=useState([])
const [modelOpen,setModelOpen]=useState(false)

const renderModel=()=>(
  <div className="model">
    {contacts.map((each)=>(
      <ContactCard key={each.id} contact={each}/>
    ))}
  </div>
)

const handleAdd=()=>{
setModelOpen(!modelOpen)
}

  return (
    <div className="formContainer">
      <div className="formWrapper">
      {modelOpen && renderModel()}
        <div className="inputLableContainer">
          <label
            htmlFor="startingPoint"
            placeholder="Enter starting point"
            className="labelName"
          >
            From*
          </label>
          <div className="inputContainer">
            <input type="text" id="startingPoint" className="input" />
            <BiCurrentLocation />
          </div>
        </div>

        <div className="inputLableContainer">
          <label
            htmlFor="endingPoint"
            placeholder="Enter starting point"
            className="labelName"
          >
            To*
          </label>
          <div className="inputContainer">
            <input type="text" id="endingPoint" className="input" />
            <BiCurrentLocation />
          </div>
        </div>
        <Lorries placeholder="Enter material type" label="Material Type*" options={material} />

        <div className="middleSelect">
          <div style={{width:"45%"}}>
            <label
              htmlFor="Freight"
              placeholder="Enter starting point"
              className="labelName"
            >
              Freight*
            </label>
            <div className="inputContainer">
              <select
                name="Freight"
                id="Freight"
                className="Freight"
                placeholder="Enter Freight"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              <label htmlFor="Freight" className="labelName">
                PMT
              </label>
            </div>
          </div>

          <div style={{width:"45%"}}>
            <label
              htmlFor="Quantity"
              placeholder="Enter starting point"
              className="labelName"
            >
              Quantity*
            </label>
            <div className="inputContainer">
              <select
                name="Quantity"
                id="Quantity"
                className="Freight"
                placeholder="Enter Freight"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              <label htmlFor="Quantity" className="labelName">
                MT
              </label>
            </div>
          </div>
        </div>

        <Lorries placeholder="Enter truck number" label="Type of Lorries*" options={lorries} />
        <Lorries placeholder="Enter contacts" label="Contanct*" options={contacts} />

        <div className="inputLableContainer">
        <label htmlFor="tag" className="label">Tag People</label>
        <div className="inputContainer">
          {tagPeople.map((each)=>(
            <div className="imgContainer">
            <div className="img">{each.img}</div>
            <div className="cross"><RxCross2/></div>
            </div>
          ))}
          <button className="addTag" onClick={handleAdd}>+</button>
        </div>
        </div>

        <div className="buttonContainer">
          <button className="addMore">ADD MORE</button>
          <button className="postLoadBtn">POST LOAD</button>
        </div>
      </div>
    </div>
  );
};
