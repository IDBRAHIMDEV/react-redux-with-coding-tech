
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    errorMessage: '',
    isLoading: false,
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

export const getAllProducts = createAsyncThunk('product/getAllProducts', async () => {
    
    try {
        const {data} = await axios.get('https://dummyjson.com/products')
        return data.products
        
    } catch (error) {
       return error.message
    }
})


const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProduct: (state, {payload: {name, value}}) => {
            state.product[name] = value
        },
        editProduct: (state, action) => {
            state.edit = true
            state.product = action.payload
        },
        persistProduct: (state, action) => {
            state.products.unshift(action.payload)
            state.product = {
                id: 0,
                title: '',
                price: 0
            }
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
    },
    extraReducers: {
        [getAllProducts.pending]: (state) => {
            state.isLoading = true
        },
        [getAllProducts.fulfilled]: (state, action) => {
            console.log(action)
            state.isLoading = false
            state.products = action.payload
        },
        [getAllProducts.rejected]: (state, action) => {
            state.isLoading = false
            state.errorMessage = action.payload
        }
    }
})


export const { persistProduct, updateProduct, deleteProduct, editProduct, setProduct } = productSlice.actions

export default productSlice.reducer

