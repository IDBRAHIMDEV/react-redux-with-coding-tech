import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = 'https://dummyjson.com/auth/login'

export const authLogin = createAsyncThunk('auth/authLogin', async (credential) => {

    const { data } = await axios.post(API_URL, credential)

    return data
})