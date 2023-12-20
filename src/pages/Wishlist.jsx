import React from 'react';
import ProductList from '../components/ProductList3';
import { useSelector } from 'react-redux';
import { TransparentButton2 } from '../styles/Buttons';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const wishlist = useSelector(state => state.wishlist.items);
  return (
    <>
      <div className='my-4'></div>
      {
        wishlist.length == 0
          ? <center className='container'>
            <h5 className='heading py-4'>Your wishlist is empty</h5>
            <p>Save items that you like in your wishlist.<br />
              Review them anytime and easily move them to bag.</p>
            <Link to="/shop">
              <TransparentButton2>Shop Now</TransparentButton2>
            </Link>
          </center>
          : <ProductList
            data={wishlist}
            isDesc={false}
            isLoading={false}
            isLoadMoreBtn={false}
          />
      }

    </>
  )
}

export default Wishlist;