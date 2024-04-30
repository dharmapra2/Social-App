import React from "react";
import "./Profile.css";
import ProfileLeft from "../../Component/ProfileLeft/ProfileLeft";
import ProfileCard from "../../Component/ProfileCard/ProfileCard";
import PostSide from "../../Component/PostSide/PostSide";
import RightSide from "../../Component/RightSide/RightSide";

function Profile() {
  return (
    <div className="Profile">
      <ProfileLeft />
      <div className="Profile-center">
        <ProfileCard location={"profilePage"} />
        <PostSide />
      </div>
      <RightSide />
    </div>
  );
}

export default Profile;
