import { createSlice } from "@reduxjs/toolkit";

// Define the slice
export const counterSlice = createSlice({
  name: "counter", // Corrected name
  initialState: { value: 0 }, // Initial value

  // Reducers defines the logic and the state
  reducers: {
    addCounter: (state) => {
      state.value += 1;
    },
    removeCounter: (state) => {
      state.value -= 1;
    },
  },
});

// Export actions and reducer
export const { addCounter, removeCounter } = counterSlice.actions;
export default counterSlice.reducer;
