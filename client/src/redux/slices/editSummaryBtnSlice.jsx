import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const editSummaryBtnSlice = createSlice({
  name: "editSummaryBtn",
  initialState,
  reducers: {
    setEditToggle: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setEditToggle } = editSummaryBtnSlice.actions;

export default editSummaryBtnSlice.reducer;
