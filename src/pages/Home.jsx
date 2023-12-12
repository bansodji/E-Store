import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';

const Home = () => {
  return (
    <>
      <div className='mt-4'></div>
      <Hero/>
      <Categories/>
      <div style={{height:'100vh'}}></div>
    </>
  )
}

export default Home;