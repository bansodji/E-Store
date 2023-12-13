import { createSlice } from "@reduxjs/toolkit";

const currencySlice = createSlice({
    name: "currency",
    initialState: "INR",
    reducers: {
        changecurrency: (state, action) => {
            return action.payload;
        },
    }
});

export const {changecurrency} = currencySlice.actions;
export default currencySlice.reducer;