
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    edit: false,
    product: {
        id: 0,
        title: '',
        price: 0
    },
    products: [
        {id: 1, title: 'Iphone 15 Pro max', price: 2340},
        {id: 2, title: 'Samsung S23 Ultra', price: 231},
        {id: 3, title: 'Vivo Sx 25', price: 34},
    ]
}


const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        editProduct: (state, action) => {
            state.edit = true
            state.product = action.payload
        },
        persistProduct: (state, action) => {
            state.products.unshift(action.payload)
        },
        updateProduct: (state, action) => {
            let item = {
                ...action.payload,
                id: state.product.id
            }
            state.products = state.products.map(product => product.id === item.id ? item : product)
            state.edit = false
            state.product = {
                id: 0,
                title: '',
                price: 0
            }
        },
        deleteProduct: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload)
        }
    }
})


export const { persistProduct, updateProduct, deleteProduct, editProduct } = productSlice.actions

export default productSlice.reducer

