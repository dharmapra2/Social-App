import { UploadImage } from "../../API/AuthRequest";

export const uploadImageApi = (data) => async (dispatch) => {
  try {
    await UploadImage.uploadImage(data);
  } catch (error) {
    console.log(`Upload Error: ${error}`);
  }
};
