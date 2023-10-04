import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const getAllProducts = createAsyncThunk('product/getAllProducts', async () => {
    
    try {
        const {data} = await axios.get('https://dummyjson.com/products')
        return data.products
        
    } catch (error) {
       return error.message
    }
})

export const storeProduct = createAsyncThunk('product/storeProduct', async (newProduct) => {
    
    try {
        const { data } = await axios.post('https://dummyjson.com/products/add', newProduct)
        return data
        
    } catch (error) {
       return error.message
    }
})


export const destroyProduct = createAsyncThunk('product/destroyProduct', async (id) => {
    
    try {
        const { data } = await axios.delete(`https://dummyjson.com/products/${id}`)
        return id
        
    } catch (error) {
       return error.message
    }
})

export const modifyProduct = createAsyncThunk('product/modifyProduct', async (currentProduct) => {
    
    try {
        const { data } = await axios.put(`https://dummyjson.com/products/${currentProduct.id}`, currentProduct)
        console.log('My product: ', currentProduct)
        return currentProduct
        
    } catch (error) {
       return error.message
    }
})
