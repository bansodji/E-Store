import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: { items: [] }, // Using an object with 'items' property to hold the array
    reducers: {
        addWishlist: (state, action) => {
            state.items.push(action.payload); // Modifying the 'items' array directly
        },
        removeWishlist: (state, action) => {
            const itemIdToRemove = action.payload;
            state.items = state.items.filter(item => item.id !== itemIdToRemove);
            // Assuming each item in the wishlist has a unique 'id' property
        },
    },
});

export const { addWishlist, removeWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;