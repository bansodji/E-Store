import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productReducer";

const ProductContext = createContext();

const API = process.env.REACT_APP_API_URL;
const API_ALL = process.env.REACT_APP_API_URL_ALL; 

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    even: [],
    odd: [],
    all_products: [],
    all_even: [],
    all_odd: [],
};

const ProductProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const getALLProduct = async () => {
        dispatch({type: "LOADING"});
        try{
            const res1 = await axios.get(API);
            const products = await res1.data.products;
            
            const res2 = await axios.get(API_ALL);
            const all_product = await res2.data.products;

            dispatch({type: "API_DATA", payload: [products, all_product]});
        }
        catch(error){
            dispatch({type: "API_ERROR"});
        }
    }

    useEffect(()=>{
        getALLProduct();
    },[]);

    return(
        <ProductContext.Provider value={{...state}}>
            {children}
        </ProductContext.Provider>
    );
}

export { ProductContext, ProductProvider };