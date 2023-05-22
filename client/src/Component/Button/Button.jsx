import SkeletonAnimateLoader from "../Loader/SkeletonAnimateLoader";

export default function Button({ ...props }) {
  return (
    <button
      className={props?.className ?? "button infoBtn"}
      type={props?.type}
      {...props}
    >
      {props?.loading && true ? (
        <SkeletonAnimateLoader />
      ) : (
        props?.value ?? "Button"
      )}
    </button>
  );
}
