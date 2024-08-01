import { createSlice } from "@reduxjs/toolkit";
const filtersReduser = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersReduser.actions;
export default filtersReduser.reducer;
