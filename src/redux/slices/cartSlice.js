import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: { items: [] }, // Using an object with 'items' property to hold the array
    reducers: {
        addCart: (state, action) => {
            state.items.push(action.payload); // Modifying the 'items' array directly
        },
        removeCart: (state, action) => {
            const itemIdToRemove = action.payload;
            state.items = state.items.filter(item => item.id !== itemIdToRemove);
            // Assuming each item in the wishlist has a unique 'id' property
        },
    },
});

export const { addCart,removeCart } = cartSlice.actions;
export default cartSlice.reducer;