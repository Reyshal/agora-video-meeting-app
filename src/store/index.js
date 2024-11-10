import { configureStore } from "@reduxjs/toolkit";
import { roomReducer, setChannel, setUsername } from "./slices/roomSlice";

const store = configureStore({
  reducer: {
    room: roomReducer,
  },
});

export { store, setChannel, setUsername };
