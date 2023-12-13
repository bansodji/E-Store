import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import ProductList from '../components/ProductList';

const Home = ({ data }) => {
  return (
    <>
      <div className='mt-4'></div>
      <Hero />
      <Categories />
      <ProductList
        data={data.even}
        name="New Arrivals"
        desc="Add our new arrivals to your weekly lineup"
        isLoading={data.isLoading}
        isLoadMoreBtn={true}
        LoadMoreData="even"
      />
    </>
  )
}

export default Home;