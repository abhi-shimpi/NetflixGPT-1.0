import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesSlice from "./moviesSlice";

const appStore = configureStore({
    reducer : {
        userDetails : userSlice,
        moviesSlice : moviesSlice
    }
})

export default appStore;