import React, { useRef, useState } from "react";
import ProfileImage from "../../img/profileImg.jpg";
import "./PostShare.css";
import {
  UilScenery,
  UilPlayCircle,
  UilLocationPoint,
  UilSchedule,
  UilTimes,
} from "@iconscout/react-unicons";

function PostShare() {
  const [image, setImage] = useState(null);
  const imageRef = useRef(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        imageUrl: URL.createObjectURL(img),
      });
    }
  };
  return (
    <div className="PostShare">
      <img src={ProfileImage} alt="Profile image" />
      <div className="">
        <input type="text" placeholder="What's happening" />
        <div className="postOpetions">
          <div
            className="option"
            style={{
              color: "var(--photo)",
            }}
            onClick={() => imageRef.current.click()}
          >
            <UilScenery />
            <span>Photo</span>
          </div>
          <div
            className="option"
            style={{
              color: "var(--video)",
            }}
          >
            <UilPlayCircle />
            <span>Video</span>
          </div>
          <div
            className="option"
            style={{
              color: "var(--location)",
            }}
          >
            <UilLocationPoint />
            <span>Location</span>
          </div>
          <div
            className="option"
            style={{
              color: "var(--shedule)",
            }}
          >
            <UilSchedule />
            <span>Schedule</span>
          </div>
          <button className="button ps-button">Share</button>
          <input
            type="file"
            name="myImage"
            className="hidden"
            accept="image/*"
            ref={imageRef}
            onChange={onImageChange}
          />
        </div>
      </div>
      {image && (
        <div className="prevImage">
          <UilTimes
            onClick={() => setImage(null)}
            className="cursor-pointer "
          />
          <img src={image?.imageUrl} alt="selected image" />
        </div>
      )}
    </div>
  );
}

export default PostShare;
