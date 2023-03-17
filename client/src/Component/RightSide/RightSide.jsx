import React from "react";
import "./RightSide.css";
import Home from "../../img/home.png";
import NotificationIcon from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from "../TrendCard/TrendCard";

function RightSide() {
  return (
    <div className="RightSide">
      <div className="navIcon">
        <img src={Home} alt="Home" />
        <UilSetting />
        <img src={NotificationIcon} alt="NotificationIcon" />
        <img src={Comment} alt="Comment" />
      </div>
      <TrendCard />
    </div>
  );
}

export default RightSide;
