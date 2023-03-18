import React from "react";
import LogSearch from "../LogSearchComponent/LogSearch";
import FollowersCard from "../FollowersCard/FollowersCard";
import InfoCard from "../InfoCard/InfoCard";

function ProfileLeft() {
  return (
    <div className="ProfileSide">
      <LogSearch />
      <InfoCard />
      <FollowersCard />
    </div>
  );
}

export default ProfileLeft;
