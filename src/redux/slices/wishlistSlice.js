import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: { items: [] }, // Using an object with 'items' property to hold the array
    reducers: {
        addWishlist: (state, action) => {
            state.items.push(action.payload); // Modifying the 'items' array directly
        },
    },
});

export const { addWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;