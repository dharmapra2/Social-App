import React, { useState } from "react";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";
import "./ProfileCard.css";

function ProfileCard() {
  const [profilePage, setProfilePage] = useState(true);
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="Cover image" />
        <img src={Profile} alt="profile image" />
      </div>
      <div className="ProfileName">
        <span>Alex fghj</span>
        <span>Senior UI/UX Designer</span>
      </div>
      <div className="followStatus">
        <hr />
        <div className="">
          <div className="follow">
            <span>6,890</span>
            <span>Followers</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>1</span>
            <span>Followings</span>
          </div>
          {profilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {profilePage ? null : <span>My Profile</span>}
    </div>
  );
}

export default ProfileCard;
