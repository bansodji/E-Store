import React from 'react';
import ProductList from '../components/ProductList';
import { useParams } from 'react-router-dom';

const LoadMoreData = ({ data }) => {
  const { id, name } = useParams();
  return (
    <div className='my-4'>
      <ProductList
        data={data[id]}
        isDesc={true}
        name={name}
        desc=""
        isLoading={data.isLoading}
        isLoadMoreBtn={false}
      />
    </div>
  )
}

export default LoadMoreData;