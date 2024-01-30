import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



const heroesSlice = createSlice({
  name: "heroes",
  initialState: {
    heroes: [],
  },
  reducers: {
    setHeroes(state, action) {
      state.heroes = action.payload;
    },
  },
});
