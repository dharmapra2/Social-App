import React from "react";
import ProfileImage from "../../img/profileImg.jpg";
import "./PostShare.css";
import {
  UilScenery,
  UilPlayCircle,
  UilLocationPoint,
  UilSchedule,
} from "@iconscout/react-unicons";

function PostShare() {
  return (
    <div className="PostShare">
      <img src={ProfileImage} alt="Profile image" />
      <div className="">
        <input type="text" placeholder="What's happening" />
        <div className="postOpetions">
          <div
            className="option"
            style={{
              color: "var(--photo)",
            }}
          >
            <UilScenery />
            <span>Photo</span>
          </div>
          <div
            className="option"
            style={{
              color: "var(--video)",
            }}
          >
            <UilPlayCircle />
            <span>Video</span>
          </div>
          <div
            className="option"
            style={{
              color: "var(--location)",
            }}
          >
            <UilLocationPoint />
            <span>Location</span>
          </div>
          <div
            className="option"
            style={{
              color: "var(--shedule)",
            }}
          >
            <UilSchedule />
            <span>Schedule</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostShare;
