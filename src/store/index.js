import { configureStore } from "@reduxjs/toolkit";
import modal from "./modal";
import users from "./users";

const store = configureStore({
    reducer:{
        users,
        modal,

    }
})
export default store