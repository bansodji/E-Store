import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import langReducer from "./slices/langSlice";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        lang: langReducer,
    },
});