import { createSlice } from "@reduxjs/toolkit";

const catSlice = createSlice({
    name: "cat",
    initialState: "all",
    reducers: {
        changeCat: (state,action)=>{
            return(action.payload);
        },
    },
});

export const {changeCat} = catSlice.actions;
export default catSlice.reducer;