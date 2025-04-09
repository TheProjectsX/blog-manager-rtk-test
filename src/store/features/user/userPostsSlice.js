import { createSlice } from "@reduxjs/toolkit";

const userPostsSlice = createSlice({
    name: "userPosts",
    initialState: [],
    reducers: {
        addPost: (state, action) => {
            state.push(action.payload);
        },
        deletePost: (state, action) => {
            const index = state.findIndex(
                (item) => item.id === action.payload.id
            );

            if (index !== -1) state.splice(index, 1);
        },
        updatePost: (state, action) => {
            const index = state.findIndex(
                (item) => item.id === action.payload.id
            );

            if (index !== -1)
                state[index] = { ...state[index], ...action.payload.body };
        },
    },
});

export default userPostsSlice.reducer;
export const { addPost, deletePost, updatePost } = userPostsSlice.actions;
