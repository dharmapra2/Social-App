import React, { useState } from "react";
import "./RightSide.css";
import Home from "../../img/home.png";
import NotificationIcon from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from "../TrendCard/TrendCard";
import ShareModel from "../Share/ShareModel";
import { Link } from "react-router-dom";

function RightSide() {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="RightSide">
      <div className="navIcon">
        <Link to={"/home"}>
          <img loading="lazy" src={Home} alt="Home" />
        </Link>
        <UilSetting />
        <img loading="lazy" src={NotificationIcon} alt="NotificationIcon" />
        <img loading="lazy" src={Comment} alt="Comment" />
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
