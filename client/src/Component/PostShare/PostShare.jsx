import React, { useRef, useState } from "react";
import ProfileImage from "../../img/profileImg.jpg";
import { useSelector, useDispatch } from "react-redux";
import "./PostShare.css";
import {
  UilScenery,
  UilPlayCircle,
  UilLocationPoint,
  UilSchedule,
  UilTimes,
} from "@iconscout/react-unicons";
import Button from "../Button/Button";
import { uploadImageApi } from "../../redux/Actions/UploadAction";

function PostShare() {
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const imageRef = useRef(null);
  const descRef = useRef(null);
  const { user } = useSelector((state) => state?.authReducer?.authData);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };
  const handlePostSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      userId: user?._id,
      desc: descRef?.current?.value,
    };
    if (image) {
      const data = new FormData();
      const fileName = Date.now() + image.name;
      data.append("name", fileName);
      data.append("file", image);
      newPost.image = fileName;
      console.log("newPost", newPost);
      console.log("data", data);
      try {
        dispatch(uploadImageApi(data));
      } catch (error) {
        console.log(`Upload image Error :- ${error}`);
      }
    }
  };
  return (
    <div className="PostShare">
      <img src={ProfileImage} alt="Profile image" />
      <div className="">
        <input
          ref={descRef}
          type="text"
          placeholder="What's happening"
          required
        />
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
          <Button
            type="submit"
            className="button ps-button"
            value="Share"
            loading={false}
            onClick={handlePostSubmit}
          />
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
          <img src={URL.createObjectURL(image)} alt="selected image" />
        </div>
      )}
    </div>
  );
}

export default PostShare;
