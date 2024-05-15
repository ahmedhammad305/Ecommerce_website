import { configureStore } from "@reduxjs/toolkit";
import cartSystem from "./slices/cartSystem";
export const store = configureStore({
    reducer: {
        user: cartSystem
    },
})