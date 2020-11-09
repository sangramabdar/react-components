import { createSlice } from "@reduxjs/toolkit";

var CounterSlice = createSlice({
  name: "counter",
  initialState: { count: 1 },
  reducers: {
    add: (state, action) => {
      state.count++;
    },

    minus: (state, action) => {
      state.count--;
    },
  },
});

export const { add, minus } = CounterSlice.actions;
export default CounterSlice.reducer;
