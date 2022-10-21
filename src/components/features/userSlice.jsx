import { createSlice } from "@reduxjs/toolkit";

const userToken = localStorage.getItem("userToken")
  ? localStorage.getItem("userToken")
  : null;

const initialState = {
  loading: false,
  userInfo: {}, // for user object
  userToken: undefined, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signUp: (state, action) => {
        localStorage.setItem(
            "userToken",
            "eyJhbGInR5cCI6IkpXVCJ9.eyJpZTI4MTI1MywiZXhwIjoxNjU1MzI0NDUzfQ.FWMexh"
        );
        state.loading = false;
        state.userInfo = action.payload;
        localStorage.setItem("username",action.payload.username);
        localStorage.setItem("password",action.payload.password);
        state.userToken = localStorage.getItem("userToken");
        state.error = null;
        console.log("Action Payload: ",action.payload)
    },
    login: (state, action) => {
        console.log("Login action")
      if(action.payload){
        console.log("REMEMBER ME")
        localStorage.setItem(
            "userToken",
            "eyJhbGInR5cCI6IkpXVCJ9.eyJpZTI4MTI1MywiZXhwIjoxNjU1MzI0NDUzfQ.FWMexh"
        );
      }
      state.loading = false;
      state.userInfo = action.payload;
      state.userToken = localStorage.getItem("userToken");
      state.error = null;
    },
    logout: (state) => {
      localStorage.removeItem("userToken"); // deletes token from storage
    //   state.loading = false;
    //   state.userInfo = null;
      state.userToken = null;
    //   state.error = null;
    },
  },
  extraReducers: {},
});
export const { signUp, login, logout } = userSlice.actions;
export default userSlice.reducer;
