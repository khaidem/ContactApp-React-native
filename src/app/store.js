import { configureStore } from "@reduxjs/toolkit";
import { auth } from "../reducer/auth";





export const store = configureStore({
    reducer: {
        user: auth
    }
})