
import { configureStore } from "@reduxjs/toolkit";
import cart from "../reducer/cartSlice";


export const store = configureStore({
    reducer: cart
})