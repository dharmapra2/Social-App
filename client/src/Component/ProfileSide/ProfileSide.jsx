import React from "react";
import "./ProfileSide.css";
import LogSearchComponent from "../LogSearchComponent/LogSearch";
import ProfileCard from "../ProfileCard/ProfileCard";
import FollowersCard from "../FollowersCard/FollowersCard";

function ProfileSide() {
  return (
    <div className="ProfileSide">
      <LogSearchComponent />
      <ProfileCard location={"homePage"} />
      <FollowersCard />
    </div>
  );
}

export default ProfileSide;
