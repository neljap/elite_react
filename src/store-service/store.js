import { configureStore } from '@reduxjs/toolkit';
import userInfo from "./userinfoSlice.js"

export default configureStore({
  reducer: {
    userinfo: userInfo
  },
})