import React from "react";
import "./FollowersCard.css";
import { Followers } from "../../Data/FollowersData";

function FollowersCard() {
  return (
    <div className="FollowersCard overflow-y-scroll">
      <h3>Who is following you </h3>
      {Followers?.map((follower, index) => (
        <div className="follower" key={index}>
          <div className="flex gap-[10px]">
            <img
              src={follower?.img}
              alt={follower?.name}
              className="followerImage"
            />
            <div className="name">
              <span className="font-bold">{follower?.name}</span>
              <span>{follower?.userName}</span>
            </div>
          </div>
          <button className="button fc-button">Follow</button>
        </div>
      ))}
    </div>
  );
}

export default FollowersCard;
