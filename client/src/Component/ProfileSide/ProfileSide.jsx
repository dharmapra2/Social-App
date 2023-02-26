import React from "react";
import "./ProfileSide.css";
import LogSearchComponent from "../LogSearchComponent/LogSearch";
import ProfileCard from "../ProfileCard/ProfileCard";

function ProfileSide() {
  return (
    <div className="profileSide">
      <LogSearchComponent />
      <ProfileCard />
    </div>
  );
}

export default ProfileSide;
