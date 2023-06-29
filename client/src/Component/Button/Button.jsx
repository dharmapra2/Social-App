import SkeletonAnimateLoader from "../Loader/SkeletonAnimateLoader";

export default function Button({
  className = "button infoBtn",
  type,
  loading = false,
  value = "Button",
  ...props
}) {
  return (
    <button className={className ?? "button infoBtn"} type={type} {...props}>
      {loading ? <SkeletonAnimateLoader /> : value ?? "Button"}
    </button>
  );
}
