import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import ProductList from '../components/ProductList';

let API = process.env.REACT_APP_API_URL_CAT2;

const ItemsByCategory = () => {
    const { name } = useParams();
    const [catItems, setCatItems] = useState(null);

    const gatItems = async (url) => {
        try {
            const res = await axios.get(url);
            setCatItems(res.data.products);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        gatItems(API + "/" + name + "?skip=0&limit=100");
    }, []);

    return (
        <div className='my-4'>
            {
                catItems == null ? ""
                    : <ProductList
                        data={catItems}
                        isDesc={true}
                        name={name}
                        desc=""
                        isLoading={false}
                        isLoadMoreBtn={false}
                    />
            }

        </div>
    )
}

export default ItemsByCategory;