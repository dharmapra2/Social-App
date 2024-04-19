import React, { useEffect, useId } from "react";
import "./Post.css";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Heart from "../../img/like.png";
import NotLiked from "../../img/notlike.png";
import { useSelector } from "react-redux";
import { useState } from "react";
import { likePost } from "../../API/PostRequest";

function Post({ data, ...props }) {
  const id = useId();
  const { user } = useSelector((state) => state?.authReducer?.authData);
  const [liked, setLiked] = useState(data.likes?.includes(user?._id) ?? false);
  const [likes, setLikes] = useState(data.likes?.length);

  useEffect(() => {
    console.log(data);
  }, []);

  const handleLiked = () => {
    setLiked((prev) => !prev);
    likePost(data?._id, user?._id);
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  };
  return (
    <div className="Post" key={props?.id ?? id}>
      <img
        src={
          data?.image
            ? process.env.REACT_APP_PUBLIC_FOLDER + "/" + data?.image
            : ""
        }
        alt={data?.name}
        className="postImage"
      />
      <div className="postReacts">
        <img
          src={liked ? Heart : NotLiked}
          alt="Heart"
          className="cursor-pointer"
          onClick={handleLiked}
        />
        <img src={Share} alt="Share" />
        <img src={Comment} alt="Comment" />
      </div>
      <div className="likes">{likes ?? 0} likes</div>
      <div className="details">
        <span>
          <b>{data?.name}</b>
        </span>
        <span>{data?.desc}</span>
      </div>
    </div>
  );
}

export default Post;
