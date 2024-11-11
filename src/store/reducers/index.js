import { combineReducers } from "@reduxjs/toolkit";
import { roomReducer } from "../slices/roomSlice";

const rootReducer = combineReducers({
  room: roomReducer,
});

export default rootReducer;
