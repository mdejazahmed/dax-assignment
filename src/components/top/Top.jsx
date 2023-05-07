import "./top.css";

import { BiSignal4 } from "react-icons/bi";
import { AiOutlineWifi } from "react-icons/ai";
import { BsBatteryHalf } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { MdMoreVert } from "react-icons/md";

export const Top = () => {
  return (
    <div className="container">
    <div className="wrapper">
      <div className="top">
        <p className="time">10:01</p>
        <div className="icons">
          <BiSignal4 />
          <AiOutlineWifi />
          <BsBatteryHalf />
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <AiOutlineArrowLeft />
          <div className="postLoad">
            <h1 className="postLoadHeading">
              Post Load
            </h1>
            <p className="postLoadPara">
            ID 22323
            </p>
          </div>
        </div>
        <MdMoreVert/>
      </div>
      </div>
    </div>
  );
};
