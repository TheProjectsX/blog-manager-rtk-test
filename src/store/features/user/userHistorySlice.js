import { createSlice } from "@reduxjs/toolkit";

const userHistorySlice = createSlice({
    name: "userHistory",
    initialState: [],
    reducers: {
        updateHistory: (state, action) => {
            state.push(action.payload);
        },
    },
});

export default userHistorySlice.reducer;
export const { updateHistory } = userHistorySlice.actions;
