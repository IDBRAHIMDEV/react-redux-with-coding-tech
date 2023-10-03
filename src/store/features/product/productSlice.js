
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
        persistProduct: (state, action) => {
            state.products.unshift(action.payload)
        },
        updateProduct: (state, action) => {},
        deleteProduct: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload)
        }
    }
})


export const { persistProduct, updateProduct, deleteProduct } = productSlice.actions

export default productSlice.reducer

