import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: { items: [] }, // Using an object with 'items' property to hold the array
    reducers: {
        addCart: (state, action) => {
            state.items.push(action.payload); // Modifying the 'items' array directly
        },
    },
});

export const { addCart } = cartSlice.actions;
export default cartSlice.reducer;