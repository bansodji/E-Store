import { createContext, useState } from "react";
import axios from "axios";

const CategoryContext = createContext();

const API = process.env.REACT_APP_API_URL_CAT;

const CategoryProvider = ({ children }) => {

    const [state, setState] = useState(null);

    const getCategories = async () => {
        try {
            const res = await axios.get(API);
            setState(res.data);
        }
        catch(error){
            console.log(error);
        }
    }

    useState(() => {
        getCategories();
    },[]);

    return (
        <CategoryContext.Provider value={{ ...state }}>
            {children}
        </CategoryContext.Provider>
    );
}

export { CategoryContext, CategoryProvider };