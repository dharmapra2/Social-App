import React from "react";
import "./Post.css";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Heart from "../../img/like.png";
import NotLiked from "../../img/notlike.png";

function Post({ data }) {
  return (
    <>
      <img src={data?.img} alt={data?.name} className="postImage" />
      <div className="postReacts">
        <img src={data?.liked ? Heart : NotLiked} alt="Heart" />
        <img src={Share} alt="Share" />
        <img src={Comment} alt="Comment" />
      </div>
      <div className="likes">{data?.likes} likes</div>
    </>
  );
}

export default Post;
