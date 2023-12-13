import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import langReducer from "./slices/langSlice";
import currencyReducer from "./slices/currSlice";
import catReducer from "./slices/catSlice";
import filterReducer from "./slices/filterSlice";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        lang: langReducer,
        currency: currencyReducer,
        cat: catReducer,
        filter: filterReducer
    },
});