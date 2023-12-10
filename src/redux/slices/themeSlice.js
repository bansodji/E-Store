import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "theme",
    initialState: true,
    reducers: {
        changeTheme: (state, action) => {
            return !state;
        },
    },
});

export const {changeTheme} = themeSlice.actions;
export default themeSlice.reducer;