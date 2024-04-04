export const postReducer = (
  state = { posts: [], loading: false, error: false, uploading: false },
  action
) => {
  switch (action?.type) {
    case "UPLOAD_START":
    case "RETREIVING_START":
      return { ...state, loading: true, error: false, uploading: true };
    case "UPLOAD_SUCCESS":
    case "RETREIVING_SUCCESS":
      return {
        ...state,
        posts: [action?.data, ...state.posts],
        uploading: false,
        loading: false,
        error: false,
      };
    case "UPLOAD_FAIL":
    case "RETREIVING_FAIL":
      return { ...state, loading: false, error: true, uploading: false };
    default:
      return state;
  }
};
