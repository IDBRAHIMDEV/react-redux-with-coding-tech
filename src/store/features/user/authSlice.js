import lodash from 'lodash'

import { createSlice } from "@reduxjs/toolkit";
import { authLogin } from "./authActions";

const initialState = {
    isLoading: false,
    error: '',
    token: localStorage.getItem('auth-token') || null,
    infoUser: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: {
      [authLogin.pending]: (state) => {
        state.isLoading = true
      },
      [authLogin.fulfilled]: (state, action) => {
        state.token = action.payload.token
        state.infoUser = lodash.omit(action.payload, 'token')
        state.isLoading = false
      },
      [authLogin.rejected]: (state, action) => {
        state.error = action.payload
        state.isLoading = false
      }
    }
})

export default authSlice.reducer