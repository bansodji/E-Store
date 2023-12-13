import { createContext, useReducer, useState } from "react";
import axios from "axios";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const API = process.env.REACT_APP_API_URL_ALL;

const initialState = {
    "isLoading": false,
    "isError": false,

    "all":[],
    "relevance": [],
    "popularity": [],
    "price - low to high": [],
    "price - high to low": [],
    "newest first": [],

    "men": [],
    "women": [],

    "Apple": [],
    "Samsung": [],
    "OPPO": [],
    "Huawei": [],
    "Microsoft": [],
    "Infinix": [],
    "HP": [],
    "Impression": [],
    "Royal_Mirage": [],
    "Fog": [],
    "Al": [],
    "Lord": [],
    "L'Oreal": [],
    "Hemani": [],
    "Dermive": [],
    "fauji": [],
    "Boho": [],
    "luxury": [],
    "Golden": [],
    "Ratttan": [],

    "Rs. 500 - Rs. 1000": [],
    "Rs. 1000 - Rs. 3000": [],
    "Rs. 3000 - Rs. 5000": [],
    "Rs. 5000 and above": [],
}

const FilterProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const getAllProduct = async (url) => {
        dispatch({ type: "LOADING" });
        try {
            const res = await axios.get(url);
            const products = await res.data.products;
            dispatch({ type: "API_DATA", payload: products });
        }
        catch (error) {
            dispatch({ type: "API_ERROR" });
        }
    }

    useState(() => {
        getAllProduct(API);
    }, []);

    return (
        <FilterContext.Provider value={{ ...state }}>
            {children}
        </FilterContext.Provider>
    );
}

export { FilterContext, FilterProvider };