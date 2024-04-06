import React, { Suspense, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Posts.css";
import { getTimelinePosts } from "../../redux/Actions/PostAction";
import SkeletonPostLoader from "../Loader/SkeletonPostLoader";
import SkeletonPageLoader from "../Loader/SkeletonPageLoader";

const PostCom = React.lazy(() => import("../Post/Post"));
function Posts() {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state?.postReducer);
  const { user } = useSelector((state) => state?.authReducer?.authData);
  useEffect(() => {
    dispatch(getTimelinePosts(user?._id));
  }, []);
  console.log(`timeline loading :${loading}`, posts);

  return (
    <div className="Posts">
      {loading ? (
        <div className="Post">
          <SkeletonPageLoader />
        </div>
      ) : (
        posts?.map((post) => (
          <div key={post?._id} id={post?._id} className="Post">
            <Suspense fallback={<SkeletonPostLoader />}>
              <PostCom data={post} id={post?._id} />
            </Suspense>
          </div>
        ))
      )}
    </div>
  );
}

export default React.memo(Posts);
