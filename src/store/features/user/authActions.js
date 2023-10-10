import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { redirect } from "react-router-dom";
import { myAuth, token } from "./authSlice";
import { getToken } from "../../../util/storage";

const API_URL = 'https://dummyjson.com/auth/login'

export const authLogin = createAsyncThunk('auth/authLogin', async (credential) => {

    const { data } = await axios.post(API_URL, credential)

    return data
})

export const AuthLoader = () => {
  
    const token = getToken()

    return token ?? redirect('/login')

    // if(!token) {
    //     return redirect('/login')
    // }
    
    // return null
}