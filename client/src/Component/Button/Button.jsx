import SkeletonAnimateLoader from "../Loader/SkeletonAnimateLoader";

export default function Button({ ...props }) {
  let loading = props?.loading ?? false;
  return (
    <button
      className={props?.className ?? "button infoBtn"}
      type={props?.type}
      {...props}
    >
      {loading ? <SkeletonAnimateLoader /> : props?.value ?? "Button"}
    </button>
  );
}
