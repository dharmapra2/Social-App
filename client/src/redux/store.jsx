import { configureStore } from "@reduxjs/toolkit";
import editSummaryBtnSlice from "./slices/editSummaryBtnSlice";

export const store = configureStore({
  reducer: {
    toggleEditBtn: editSummaryBtnSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
