import { configureStore } from "@reduxjs/toolkit"; // Correctly import configureStore
import counterReducer from "../components/features/counterSlice"; // Import your counter slice

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Add your reducer
  },
});
