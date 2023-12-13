import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import langReducer from "./slices/langSlice";
import currencyReducer from "./slices/currSlice";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        lang: langReducer,
        currency: currencyReducer,
    },
});