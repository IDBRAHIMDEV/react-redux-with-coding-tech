
import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "../../../util/api"

const urlApi = '/products'


export const getAllProducts = createAsyncThunk('product/getAllProducts', async (token) => {
    
    try {
        const {data} = await api.get(urlApi)
        return data.products
        
    } catch (error) {
       return error.message
    }
})

export const storeProduct = createAsyncThunk('product/storeProduct', async (newProduct) => {
    
    try {
        const { data } = await api.post(`${urlApi}/add`, newProduct)
        return data
        
    } catch (error) {
       return error.message
    }
})


export const destroyProduct = createAsyncThunk('product/destroyProduct', async (id) => {
    
    try {
        const { data } = await api.delete(`${urlApi}/${id}`)
        return id
        
    } catch (error) {
       return error.message
    }
})

export const modifyProduct = createAsyncThunk('product/modifyProduct', async (currentProduct) => {
    
    try {
        const { data } = await api.put(`${urlApi}/${currentProduct.id}`, currentProduct)
        console.log('My product: ', currentProduct)
        return currentProduct
        
    } catch (error) {
       return error.message
    }
})


// import { createAsyncThunk } from "@reduxjs/toolkit"
// import axios from "axios"

// const urlApi = 'https://dummyjson.com/auth/products'

// const headers = (token) => {
//     return {
//         headers: {
//             Authorization: `Bearer ${token}`
//         }
//     }
// }

// export const getAllProducts = createAsyncThunk('product/getAllProducts', async (token) => {
    
//     try {
//         const {data} = await axios.get(urlApi, headers(token))
//         return data.products
        
//     } catch (error) {
//        return error.message
//     }
// })

// export const storeProduct = createAsyncThunk('product/storeProduct', async (newProduct) => {
    
//     try {
//         const { data } = await axios.post(`${urlApi}/add`, newProduct, headers)
//         return data
        
//     } catch (error) {
//        return error.message
//     }
// })


// export const destroyProduct = createAsyncThunk('product/destroyProduct', async (id) => {
    
//     try {
//         const { data } = await axios.delete(`${urlApi}/${id}`, headers)
//         return id
        
//     } catch (error) {
//        return error.message
//     }
// })

// export const modifyProduct = createAsyncThunk('product/modifyProduct', async (currentProduct) => {
    
//     try {
//         const { data } = await axios.put(`${urlApi}/${currentProduct.id}`, currentProduct, headers)
//         console.log('My product: ', currentProduct)
//         return currentProduct
        
//     } catch (error) {
//        return error.message
//     }
// })
