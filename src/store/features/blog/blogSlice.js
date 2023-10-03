import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: "visit our blog",
    posts: [
            {id: 1, title: 'learn react'},
            {id: 2, title: 'learn react'},
            {id: 3, title: 'learn react'},
    ]
}

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {}
})

export default blogSlice.reducer