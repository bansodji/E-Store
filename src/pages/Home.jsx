import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import ProductList from '../components/ProductList';
import Banner from '../components/Banner';

const Home = ({ data }) => {
  return (
    <>
      <div className='mt-4'></div>
      <Hero />
      <Categories />
      <ProductList
        data={data.even}
        isDesc={true}
        name="New Arrivals"
        desc="Add our new arrivals to your weekly lineup"
        isLoading={data.isLoading}
        isLoadMoreBtn={true}
        LoadMoreData="even"
      />
      <Banner />
      <ProductList
        data={data.odd}
        isDesc={true}
        name="Featured Items"
        desc="Update the latest fashion trends today"
        isLoading={data.isLoading}
        isLoadMoreBtn={true}
        LoadMoreData="odd"
      />
    </>
  )
}

export default Home;