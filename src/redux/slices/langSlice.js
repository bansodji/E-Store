import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
    name: "lang",
    initialState: "INR",
    reducers: {
        changeLang: (state, action) => {
            return action.payload;
        },
    }
});

export const {changeLang} = langSlice.actions;
export default langSlice.reducer;