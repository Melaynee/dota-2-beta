import { createSlice } from "@reduxjs/toolkit";

const dropdownSlice = createSlice({
  name: "dropdown",
  initialState: {
    isDropdownOpen: false,
  },
  reducers: {
    toggleDropdown: (state) => {
      state.isDropdownOpen = !state.isDropdownOpen;
    },
  },
});

export const { toggleDropdown } = dropdownSlice.actions;
export const selectDropdownState = (state) => state.dropdown.isDropdownOpen;

export default dropdownSlice.reducer;
