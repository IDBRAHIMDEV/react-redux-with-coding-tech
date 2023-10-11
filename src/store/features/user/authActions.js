import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { redirect } from "react-router-dom";
import { getToken } from "../../../util/storage";

const API_URL = 'https://dummyjson.com/auth/login'

export const authLogin = createAsyncThunk('auth/authLogin', async (credential) => {
    
    const dataUser = {
        ...credential,
        expiresInMins: 2
    }
    const { data } = await axios.post(API_URL, dataUser)

    return data
})

export const AuthLoader = () => {
  
    const token = getToken()

    return token ?? redirect('/login')

}