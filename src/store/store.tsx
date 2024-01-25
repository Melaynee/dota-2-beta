import { configureStore } from "@reduxjs/toolkit";
import dropdownReducer from "./slices/dropDown";

const store = configureStore({
  reducer: {
    dropdown: dropdownReducer,
  },
});

export default store;
