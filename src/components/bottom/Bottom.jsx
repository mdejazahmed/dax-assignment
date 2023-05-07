import "./bottom.css";

import { useState } from "react";

import { BiCurrentLocation } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import Lorries from "../lorries/Lorries";
import { ContactCard } from "../contactCard/ContactCard";
import { LableInput } from "../labelAndInput/LableInput";
import { Tag } from "../tags/Tag";

const city=[
  {id:1,name:"Surat"},
  {id:2,name:"Delhi"}
]


const material=[
  {id:1,name:"Coal"},
  {id:2,name:"Vegitables"},
  {id:3,name:"Steel"},
  {id:4,name:"Cement"}
]

const quantity=[
  {id:1,name:"1"},
  {id:2,name:"2"},
  {id:3,name:"3"},
  {id:4,name:"4"}
]

const Freight=[
  {id:1,name:"10k"},
  {id:2,name:"20k"},
  {id:3,name:"30k"},
  {id:4,name:"40k"}
]



const lorries=[
  {id:1,name:"truck number 1"},
  {id:2,name:"truck number 2"},
  {id:3,name:"truck number 3"},
  {id:4,name:"truck number 4"}
]

const contacts=[
  {id:1,img:"https://res.cloudinary.com/dxxh8iica/image/upload/v1661665337/cld-sample-5.jpg",name:"Akash"},
  {id:2,img:"https://res.cloudinary.com/dxxh8iica/image/upload/v1661665336/cld-sample-3.jpg",name:"Ejaz"},
  {id:3,img:"https://res.cloudinary.com/dxxh8iica/image/upload/v1661665337/cld-sample-5.jpg",name:"Sanat"},
  {id:4,img:"https://res.cloudinary.com/dxxh8iica/image/upload/v1661665336/cld-sample-3.jpg",name:"Haneef"}
]

export const Bottom = () => {
// eslint-disable-next-line no-unused-vars
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
      <div className="LableInputWrapper">
            <label htmlFor="from" className="label" >From*</label>
            <LableInput options={city} placeholder="Enter starting point"/>
        </div>
      
        <div className="LableInputWrapper">
            <label htmlFor="from" className="label" >To*</label>
            <LableInput placeholder="Enter end point" options={city}/>
        </div>

        <div className="LableInputWrapper">
            <label htmlFor="material" className="label" >Material Type*</label>
            <LableInput placeholder="Enter material type" options={material} />
        </div>

        <div className="partitonDiv">
        <div className="LableInputWrapper">
            <label htmlFor="Freight*" className="label" >Freight*</label>
            <LableInput placeholder="Place" options={Freight} isMultiSelect/>
        </div>
        <div className="LableInputWrapper">
            <label htmlFor="quantity" className="label" >Quantity*</label>
            <LableInput placeholder="Place" options={quantity} isMultiSelect/>
        </div>
        </div>

        <div className="LableInputWrapper">
            <label htmlFor="lorries" className="label" >Type of Lorries*</label>
            <LableInput placeholder="Select Vehicle Type" options={lorries} />
        </div>

        <div className="LableInputWrapper">
            <label htmlFor="contacts" className="label" >Contacts*</label>
            <LableInput placeholder="Select Contacts" options={contacts} />
        </div>

        <div className="LableInputWrapper">
            <label htmlFor="tagPeople" className="label" >Contacts*</label>
            <Tag contacts={contacts}/>
        </div>

        <div className="buttonContainer">
          <button className="addMore">ADD MORE</button>
          <button className="postLoadBtn">POST LOAD</button>
        </div>

      {/* {modelOpen && renderModel()}
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
        </div> */}
      </div>
    </div>
  );
};
