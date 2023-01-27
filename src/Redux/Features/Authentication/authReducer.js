import { createSlice } from "@reduxjs/toolkit";
import { setCookie } from "Utlis/cookie";

const initialState = {
  user: null,
  token: null,
  posts: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      setCookie("atoken",action.payload.access_token,7)
      setCookie("rtoken",action.payload.refresh_token,7)
      
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setLogin, setLogout } = authSlice.actions;
export default authSlice.reducer;
