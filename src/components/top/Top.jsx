import "./top.css";

import { BiSignal4 } from "react-icons/bi";
import { AiOutlineWifi } from "react-icons/ai";
import { BsBatteryHalf } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";

export const Top = () => {
  return (
    <div className="container">
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
            <h1 className="postLoadHeading"></h1>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};
