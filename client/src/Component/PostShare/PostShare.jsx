import React, { lazy, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./PostShare.css";
import {
  UilScenery,
  UilPlayCircle,
  UilLocationPoint,
  UilSchedule,
  UilTimes,
} from "@iconscout/react-unicons";
import {
  uploadImageAction,
  uploadPost,
} from "../../redux/Actions/UploadAction";

const Button = lazy(() => import("../Button/Button"));

function PostShare() {
  const [image, setImage] = useState(null);
  const loading = useSelector((state) => state?.postReducer?.uploading);
  const { user } = useSelector((state) => state?.authReducer?.authData);
  const dispatch = useDispatch();
  const imageRef = useRef(null);
  const descRef = useRef(null);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };
  const handlePostSubmit = (e) => {
    try {
      e.preventDefault();
      const newPost = {
        userId: user?._id,
        desc: descRef.current.value,
      };
      const data = new FormData();
      if (image) {
        const extension = image.type?.split("/").pop();
        let temp_file_name = Math.round(Math.random() * 1e9);
        if (user?.userId) {
          temp_file_name = user?.userId;
        }
        const fileName = Date.now() + "_" + temp_file_name + "." + extension;
        data.append("name", fileName);
        data.append("file", image);
        data.append("userId", user?._id);
        data.append("desc", descRef.current.value);
        newPost.image = fileName;
        try {
          dispatch(uploadImageAction(data));
        } catch (error) {
          console.log(error);
        }
      }
      dispatch(uploadPost(newPost));
    } catch (error) {
      console.log(`Upload image Error :- ${error}`);
    }
    setImage(null);
    imageRef.current.value = null;
    descRef.current.value = "";
  };
  return (
    <div className="PostShare">
      <img
        src={
          user?.defaultProfile
            ? serverPublic + user?.defaultProfile
            : serverPublic + "/defaultProfile.png"
        }
        alt={"profile image" ?? ""}
        loading="lazy"
        decoding="auto"
      />
      <form onSubmit={handlePostSubmit} encType="multipart/form-data">
        <textarea
          ref={descRef}
          className="w-full"
          placeholder="What's happening"
          cols={2}
          name="desc"
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
            loading={loading}
            disabled={loading}
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
