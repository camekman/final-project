import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  name: null,
  username: null,
  galleries: null,
  profileImage: null,
  email: null,
  accessToken: null,
  error: null,
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserId: (store, action) => {
      store.userId = action.payload;
    },
    setName: (store, action) => {
      store.name = action.payload;
    },
    setUsername: (store, action) => {
      store.username = action.payload;
    },
    setEmail: (store, action) => {
      store.email = action.payload;
    },
    setGalleries: (store, action) => {
      store.galleries = action.payload;
    },
    setProfileImage: (store, action) => {
      store.profileImage = action.payload;
    },
    setAccessToken: (store, action) => {
      store.accessToken = action.payload;
    },
    setError: (store, action) => {
      store.error = action.payload;
    },
    restart: () => {
      return initialState;
    },
  },
});
export default user;
