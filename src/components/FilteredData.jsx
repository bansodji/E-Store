import React, { useContext } from 'react';
import ProductList2 from './ProductList2';
import { FilterContext } from '../context/filterContext';
import { useSelector } from 'react-redux';

const FilteredData = () => {
    const filterData = useContext(FilterContext);
    const category = useSelector(state=>state.cat);
    
    return (
        <>
            <ProductList2
                data={filterData[category]}
                isLoading={filterData.isLoading}
            />
        </>
    )
}

export default FilteredData;