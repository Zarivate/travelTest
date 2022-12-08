import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  destination: null,
  travelTimeInfo: null,
  home: null,
  work: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInfo: (state, action) => {
      state.travelTimeInfo = action.payload;
    },
    setHome: (state, action) => {
      state.home = action.payload;
    },
    setWork: (state, action) => {
      state.work = action.payload;
    },
  },
});

export const {
  setOrigin,
  setDestination,
  setTravelTimeInfo,
  setHome,
  setWork,
} = navSlice.actions;

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInfo = (state) => state.nav.travelTimeInfo;
export const selectHome = (state) => state.nav.home;
export const selectWork = (state) => state.nav.work;

export default navSlice.reducer;
