import React from 'react';
import { useSelector } from 'react-redux';
import CartList from '../components/CartList';
import { Button1, TransparentButton2 } from '../styles/Buttons';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import Price from '../components/Price';

const Cart = () => {
  const cart = useSelector(state => state.cart.items);
  console.log(cart);

  const CartCardWarpper = () => {
    let totalMrp = 0;
    let totalAmount = 0;
    const platformFee = 0.2;
    const shipping = 0;

    for (let x of cart) {
      let price = x.price * x.quantity;
      totalAmount = totalAmount + price;
    }
    let tenPercent = totalAmount * 0.1; // Calculating 10% of totalAmount
    totalMrp = totalAmount + tenPercent;
    return (
      <Row className='gy-4'>
        <Col lg={7} md={7}>
          <CartList
            data={cart}
            isDesc={false}
            isLoading={false}
            isLoadMoreBtn={false}
          />
        </Col>
        <Col lg={5} md={5}>
          <div className='surface-bg p-3'>
            <h6 className='font12 uppercase mb-4'>Price details ({cart.length} items)</h6>
            <div className="row">
              <div className="col font14">
                <h6 className="font14">Total MRP</h6>
                <h6 className="font14">Discount on MRP</h6>
                <h6 className="font14">Platform Fee</h6>
                <h6 className="font14 mb-3">Shipping Fee</h6>

              </div>
              <div className="col">
                <div className='w-100 text-end'>
                  <h6 className="font14"><Price price={totalMrp} /></h6>
                  <h6 className="font14"><Price price={tenPercent} /></h6>
                  <h6 className="font14"><Price price={platformFee} /></h6>
                  <h6 className="font14 mb-3"><Price price={shipping} /></h6>

                </div>
              </div>
            </div>
            <div className="row border-top py-3">
              <div className="col">
                <h6 className="font14">Total Amount</h6>
              </div>
              <div className="col text-end">
                <h6 className="font14"><Price price={totalAmount + platformFee} /></h6>
              </div>
            </div>
            <div className="col-12 text-center">
              <Link to="/Signin">
                <TransparentButton2>Login to Place Order</TransparentButton2>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    )
  }

  return (
    <div className='my-4 container'>
      {
        cart.length == 0
          ? <center className='container'>
            <h5 className='heading py-4'>Your Cart is empty</h5>
            <Link to="/shop">
              <TransparentButton2>Shop Now</TransparentButton2>
            </Link>
          </center>
          : <CartCardWarpper />
      }
    </div>
  )
}

export default Cart;