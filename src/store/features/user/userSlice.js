import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        name: '',
        age: ''
    }
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {}
})

export default userSlice.reducer