import React from 'react';
import ProductList from '../components/ProductList';

const Trending = ({ data }) => {
    return (
        <>
        <div className='mt-4'></div>
            <ProductList
                data={data.all_odd}
                isDesc={false}
                isLoading={data.isLoading}
                isLoadMoreBtn={false}
            />
        </>
    )
}

export default Trending;