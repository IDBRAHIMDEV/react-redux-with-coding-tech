import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./features/product/productSlice";
import userSlice from "./features/user/userSlice";
import blogSlice from "./features/blog/blogSlice";

const store = configureStore({
    reducer: {
        product: productSlice,
        user: userSlice,
        blog: blogSlice
    }
})

export default store