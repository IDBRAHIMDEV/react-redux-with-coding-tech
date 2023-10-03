
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [
        {id: 1, title: 'Iphone 15 Pro max'},
        {id: 2, title: 'Samsung S23 Ultra'},
        {id: 3, title: 'Vivo Sx 25'},
    ]
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
    }
})

export const { setTitle } = productSlice.actions

export default productSlice.reducer

