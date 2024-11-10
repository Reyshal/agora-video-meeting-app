import { createSlice } from "@reduxjs/toolkit";

const roomSlice = createSlice({
  name: "room",
  initialState: {
    appId: "3d5a65e6adee44d395f2453f79c0006c",
    channel: "",
    username: "",
  },
  reducers: {
    setChannel: (state, action) => {
      state.channel = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const { setChannel, setUsername } = roomSlice.actions;
export const roomReducer = roomSlice.reducer;
