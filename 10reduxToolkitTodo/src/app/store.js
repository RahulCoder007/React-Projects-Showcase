import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: todoReducer, // (Root Reducer for storing all the reducers) store will update values only for the reducers which are registered here
});
