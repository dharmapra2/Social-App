import React, { lazy, Suspense } from "react";
import "./PostSide.css";
import PostShare from "../PostShare/PostShare";
import SkeletonPostLoader from "../Loader/SkeletonPostLoader";

const PostTimeline = lazy(() => import("../Posts/Posts"));

function PostSide() {
  return (
    <div className="PostSide">
      <PostShare />
      <PostTimeline />
    </div>
  );
}

export default PostSide;
