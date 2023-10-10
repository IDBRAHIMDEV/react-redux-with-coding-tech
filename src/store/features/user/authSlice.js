import lodash from 'lodash'

import { createSlice } from "@reduxjs/toolkit";
import { authLogin } from "./authActions";
import { addToken, getPayload, removeToken } from '../../../util/storage';

const initialState = {
    isLoading: false,
    error: '',
    token: localStorage.getItem('auth-token') || null,
    infoUser: getPayload()
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {

            removeToken()

            return {
                isLoading: false,
                error: '',
                token: null,
                infoUser: null
            }
        }
    },
    extraReducers: {
      [authLogin.pending]: (state) => {
        state.isLoading = true
      },
      [authLogin.fulfilled]: (state, action) => {
        state.token = action.payload.token
        state.infoUser = getPayload(action.payload.token)
        addToken(action.payload.token)
        state.isLoading = false

      },
      [authLogin.rejected]: (state, action) => {
        state.error = action.error.message
        state.isLoading = false
      }
    }
})

export const myAuth = (state) => state.token

export const { logout } = authSlice.actions

export default authSlice.reducer