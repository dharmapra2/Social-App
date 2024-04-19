import { getTimelinePost } from "../../API/PostRequest";

export const getTimelinePosts = (id) => async (dispatch) => {
  dispatch({ type: "RETREIVING_START" });
  try {
    const { data } = await getTimelinePost(id);
    console.log(data);
    dispatch({ type: "RETREIVING_SUCCESS", data: data });
  } catch (error) {
    console.log(`RETREIVING_FAIL: ${error}`);
    dispatch({ type: "RETREIVING_FAIL" });
    // dispatch({ type: "RETREIVING_FAIL", error: error.message });
  }
};
