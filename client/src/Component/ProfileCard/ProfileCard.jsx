import React from "react";
import "./ProfileCard.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ProfileCard({ location }) {
  const { user } = useSelector((state) => state?.authReducer?.authData);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img
          src={
            user?.coverPicture
              ? serverPublic + user?.coverPicture
              : serverPublic + "/defaultCover.jpg"
          }
          alt={"Cover image" ?? ""}
          loading="lazy"
          decoding="auto"
        />
        <img
          src={
            user?.defaultProfile
              ? serverPublic + user?.defaultProfile
              : serverPublic + "/defaultProfile.png"
          }
          alt={"profile image" ?? ""}
          loading="lazy"
          decoding="auto"
        />
      </div>
      <div className="ProfileName">
        <span>
          {user?.first_name} {user?.last_name}
        </span>
        <span>{user?.worksAt ?? "Write about yourself"}</span>
      </div>
      <div className="followStatus">
        <hr />
        <div className="">
          <div className="follow">
            <span>{user?.followers.length ?? 0}</span>
            <span>Followers</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>{user?.following.length ?? 0}</span>
            <span>Followings</span>
          </div>
          {location === "profilePage" && (
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
      {location === "profilePage" ? null : (
        <span>
          <Link to={`/profile/${user?._id}`}>My Profile</Link>
        </span>
      )}
    </div>
  );
}

export default ProfileCard;
