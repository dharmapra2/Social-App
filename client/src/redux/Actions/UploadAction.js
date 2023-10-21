import { UploadImage } from "../../API/AuthRequest";

export const uploadImageApi = (data) => async (dispatch) => {
  try {
    console.log(data);
    await UploadImage(data);
  } catch (error) {
    console.log(`Upload Error: ${error}`);
  }
};
