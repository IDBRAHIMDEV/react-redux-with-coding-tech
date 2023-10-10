import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./features/product/productSlice";
import userSlice from "./features/user/userSlice";
import blogSlice from "./features/blog/blogSlice";
import authSlice from "./features/user/authSlice";

const store = configureStore({
    reducer: {
        product: productSlice,
        user: userSlice,
        blog: blogSlice,
        auth: authSlice
    }
})

export default store