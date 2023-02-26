import React from "react";
import "./Home.css";
import ProfileSide from "../../Component/ProfileSide/ProfileSide";
import PostSide from "../../Component/PostSide/PostSide";
import RightSide from "../../Component/RightSide/RightSide";

function Home() {
  return (
    <div className="Home">
      <ProfileSide />
      <PostSide />
      <RightSide />
    </div>
  );
}

export default Home;
