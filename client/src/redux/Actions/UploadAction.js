import * as uploadImageApi from "../../API/UploadRequest";

export const uploadPost = (data) => async (dispatch) => {
  dispatch({ type: "UPLOAD_START" });
  try {
    const newPost = await uploadImageApi.uploadPost(data);
    dispatch({ type: "UPLOAD_SUCCESS", data: newPost.data });
  } catch (error) {
    console.log(`UPLOAD_FAIL: ${error}`);
    dispatch({ type: "UPLOAD_FAIL" });
    // dispatch({ type: "UPLOAD_FAIL", error: error.message });
  }
};

export const uploadImageAction = (data) => async (dispatch) => {
  try {
    console.log("uploadImageApi", data);
    await uploadImageApi.uploadImage(data);
  } catch (error) {
    console.log(`Upload Error: ${error}`);
  }
};
