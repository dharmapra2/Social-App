import React, { useEffect, useId } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Posts.css";
import Post from "../Post/Post";
import { getTimelinePosts } from "../../redux/Actions/PostAction";
import SkeletonNormalLoader from "../Loader/SkeletonNormalLoader";

function Posts() {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state?.postReducer);
  const { user } = useSelector((state) => state?.authReducer?.authData);
  useEffect(() => {
    dispatch(getTimelinePosts(user?._id));
  }, []);
  console.log(`timeline loading :${loading}`);

  return (
    <div className="Posts">
      {loading ? (
        <div className="Post">
          <SkeletonNormalLoader count={5} />
        </div>
      ) : (
        posts?.map((post) => (
          <div key={post?._id} className="Post">
            <Post data={post} id={post?._id} />
          </div>
        ))
      )}
    </div>
  );
}

export default React.memo(Posts);
