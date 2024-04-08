import NotLiked from "../../img/notlike.png";
import Share from "../../img/share.png";
import Comment from "../../img/comment.png";

export default function SkeletonPostLoader({ count = 1, ...props }) {
  const arr = Array(count).fill(0);
  return (
    <>
      {arr?.map((items, index) => (
        <div className="mt-2 mb-2" key={index}>
          <div className="w-full h-[15rem] bg-social-dark-grey-15 animate-pulse rounded-md"></div>
          <div className="flex gap-2 flex-col">
            <span className="w-3/4 h-4 bg-social-dark-grey-15 mt-4 animate-pulse rounded-md"></span>
            <span className="w-1/3 h-4 bg-social-dark-grey-15 mt-1 animate-pulse rounded-md"></span>
          </div>
          <div className="flex gap-6 mt-2 h-5">
            <img src={NotLiked} alt="Heart" />
            <img src={Share} alt="Share" />
            <img src={Comment} alt="Comment" />
          </div>
        </div>
      ))}
    </>
  );
}
