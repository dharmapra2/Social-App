import React, { Suspense, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Posts.css";
import { getTimelinePosts } from "../../redux/Actions/PostAction";
import SkeletonPostLoader from "../Loader/SkeletonPostLoader";

const PostCom = React.lazy(() => import("../Post/Post"));

function Posts() {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state?.postReducer);
  const { user } = useSelector((state) => state?.authReducer?.authData);
  useEffect(() => {
    let timeOut = setTimeout(() => {
      dispatch(getTimelinePosts(user?._id));
    });
    return () => clearTimeout(timeOut);
  }, []);

  console.log(posts);

  return (
    <div className="Posts">
      {loading ? (
        <div className="Post">
          <SkeletonPostLoader count={10} />
        </div>
      ) : (
        posts?.map((post, index) => (
          <Suspense fallback={<SkeletonPostLoader />}>
            <PostCom data={post} id={index} />
          </Suspense>
        ))
      )}
    </div>
  );
}

export default React.memo(Posts);
