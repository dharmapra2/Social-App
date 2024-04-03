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
import { uploadPost } from "../../redux/Actions/UploadAction";
import { uploadImage } from "../../API/UploadRequest";

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
      desc: descRef?.current?.value,
      userId: user?._id,
    };
    const data = new FormData();
    if (image) {
      const extension = image.type?.split("/").pop();
      let temp_file_name = Math.round(Math.random() * 1e9);
      if (user?.userId) {
        temp_file_name = user?.userId;
      }
      const fileName = Date.now() + "_" + temp_file_name + "." + extension;
      console.log(`fileName:${fileName}`, image);
      data.append("name", fileName);
      data.append("file", image);
      data.append("userId", user?._id);
      data.append("desc", descRef?.current?.value);
      newPost.image = fileName;
      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(`Upload image Error :- ${error}`);
      }
    }
    dispatch(uploadPost(newPost));
  };
  return (
    <div className="PostShare">
      <img src={ProfileImage} alt="Profileimage" />
      <form onSubmit={handlePostSubmit} encType="multipart/form-data">
        <textarea
          ref={descRef}
          className="w-full"
          placeholder="What's happening"
          cols={2}
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
      </form>
      {image && (
        <div className="prevImage">
          <UilTimes
            onClick={() => setImage(null)}
            className="cursor-pointer "
          />
          <img src={URL.createObjectURL(image)} alt="SelectedImage" />
        </div>
      )}
    </div>
  );
}

export default PostShare;
