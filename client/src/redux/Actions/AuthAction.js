import * as AuthApi from "../../API/AuthRequest.js";

const authenticate = async (formData, dispatch, authMethod) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi[authMethod](formData);
    console.log(data);
    dispatch({ type: "AUTH_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAIL" });
    // dispatch({ type: "AUTH_FAIL", error: error.message });
  }
};

export const login = (FormData) => async (dispatch) => {
  await authenticate(FormData, dispatch, "login");
};

export const signUp = (FormData) => async (dispatch) => {
  await authenticate(FormData, dispatch, "signUp");
};
