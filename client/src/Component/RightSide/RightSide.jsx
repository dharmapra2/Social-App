import React, { useState } from "react";
import "./RightSide.css";
import Home from "../../img/home.png";
import NotificationIcon from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from "../TrendCard/TrendCard";
import ShareModel from "../Share/ShareModel";

function RightSide() {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="RightSide">
      <div className="navIcon">
        <img src={Home} alt="Home" />
        <UilSetting />
        <img src={NotificationIcon} alt="NotificationIcon" />
        <img src={Comment} alt="Comment" />
      </div>
      <TrendCard />
      <button className="button r-button" onClick={() => setModalOpened(true)}>
        Share
      </button>
      {modalOpened && (
        <ShareModel modalOpened={modalOpened} setModalOpened={setModalOpened} />
      )}
    </div>
  );
}

export default RightSide;
