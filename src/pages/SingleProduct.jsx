import React, { useReducer, useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';
import ISkeleton from '../components/ISkeleton';
import { PSkeleton } from '../components/ISkeleton';
import CartButton from "../components/CartButton";
import WishlistButton from "../components/WishlistButton";
import RatingBox from "../components/RatingBox";
import { HiMinus, HiPlus } from "react-icons/hi";
import Price from '../components/Price';
import ProductList from '../components/ProductList';

const Wrapper = styled.section`
  .img-50-box{
    width: 50px;
    height: 50px;

    &:hover{
      border: 2px solid ${({ theme }) => theme.colors.theme1};
    }
  }

  .img-box{
    width: 100%;
    height: 24rem;

    img{
      width: 100%;
      height: 100%;
      object-fit: fill;
      object-position: top;
    }
  }

  .active{
    border: 2px solid ${({ theme }) => theme.colors.theme1};
  }

  .img-lg{display: block;}
  .img-sm{display: none;}
  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    .img-lg{display: none;}
    .img-sm{display: block;}
  }

  ul{
    li{
      font-size:14px;
      list-style-type:disc;
      color: ${({ theme }) => theme.colors.theme1};
      span{
          color: ${({ theme }) => theme.colors.text};
      }
      a{
          color: ${({ theme }) => theme.colors.theme1};
      }
    }
  }

  .color-box-wrapper{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: relative;
    cursor: pointer;
    border: 2px solid ${({ theme }) => theme.colors.grey};
    display: flex;
    align-items: center;
    justify-content: center;

    .color-box{
      width: 30px;
      height: 30px;
      border-radius: 50%;
      position: relative;
      cursor: pointer;
    }
  }

  .bg-1{background-color: #d1d8e0;}
  .bg-2{background-color: #2d3436;}
  .bg-3{background-color: #0c2461;}

  .active-color{border: 2px solid ${({ theme }) => theme.colors.theme1} !important;}

  .quantity-box{
    border: 1px solid ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.heading};
    width: 100px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;

    input{
        border: none;
        outline: none;
        width:20px;
        background: none;
        text-align:center;
        color: ${({ theme }) => theme.colors.heading};
    }
  }
`;

const Offers = [
  "Flat ₹3,000 Instant Discount with HDFC & ICICI Credit Cards & Credit EMI",
  "Flat ₹3,000 Instant Discount with Bank of Baroda Credit Card & EMI transactions",
  "Flat ₹3,000 Instant Discount* with SBI Credit Card EMI transactions",
  "Up to 3,000 Instant Discount* with Select Bank Cards & EMI",
  "10% up to ₹2,000 cashback with paytm wallet",
  "No Cost EMI up to 6 months"
]

const SingleProduct = ({ Data }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [displayImg, setDisplayImg] = useState(null);
  const [activeColor, setActiveColor] = useState(1);
  const [quantity, setQuantity] = useState(1);

  const handleImgClick = (data) => {
    setDisplayImg(data);
  };

  const handleColorClick = (colorId) => {
    setActiveColor(colorId);
  };

  const min = 10;
  const max = 1000;

  useEffect(() => {
    const getProduct = async (url) => {
      try {
        const res = await axios.get(url);
        setProduct(res.data);
        setDisplayImg(res.data.images[0]); // Set initial display image
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    let API = process.env.REACT_APP_API_URL + "/" + id;
    getProduct(API);
  }, [id]);

  const SmallImg50 = () => {
    return (
      <>
        {product.images.map((data, i) => (
          <div
            className={`img-50-box mb-2 cursor-pointer ${displayImg === data ? "active" : ""}`}
            key={i}
            onMouseOver={() => handleImgClick(data)}
          >
            <img src={data} alt={`Thumbnail ${i}`} className='w-100 h-100' loading='lazy' />
          </div>
        ))}
      </>
    );
  };

  const Quantity = () => {
    const stock = product.stock;
    const [subtotal, setSubtotal] = useState(0);
    

    const handleClick = (action) => {
      if (action === 'decrement' && quantity > 1) {
        setQuantity(prevQuantity => prevQuantity - 1);
      } else if (action === 'increment' && quantity < stock) {
        setQuantity(prevQuantity => prevQuantity + 1);
      }
    };

    useEffect(() => {
      setSubtotal(quantity * product.price);
    }, [quantity, product.price]);

    return (
      <div className='mt-4'>
        <h5 className='heading'>Quantity</h5>
        <div className='quantity-box mt-3'>
          <a onClick={() => handleClick('decrement')}><HiMinus /></a>
          <input type="text" value={quantity} readOnly id='quantity' name='quantity' />
          <a onClick={() => handleClick('increment')}><HiPlus /></a>
        </div>
        <div className='mt-3 d-flex'>
          <p className='me-2'>Subtotal: </p><Price price={subtotal} />
        </div>
      </div>
    )
  }

  return (
    <>
      {
        product == null ?
          // Loader start
          <>
            <div className="mt-4"></div>
            <PSkeleton />
            <div className="mt-5"></div>
            <ISkeleton ItemCount={8} />
          </>
          // Loader end
          :
          <Wrapper className='mt-4'>
            <div className="container">
              <Row>
                {/* //===img section start===// */}
                <Col lg={5} className='mb-5'>
                  <div className="img-section row">
                    <div className="col-lg-2 col-md-2 col-sm-2 col-12 img-lg">
                      <SmallImg50 />
                    </div>
                    <div className="col-lg-10 col-md-10 col-sm-10 col-12">
                      {displayImg == null ? <></>
                        : <div className='img-box'>
                          <img src={displayImg} alt={product.title} loading='lazy' />
                        </div>
                      }
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 col-12 img-sm mt-3">
                      <div className='d-flex flex-wrap justify-content-between'>
                        <SmallImg50 />
                      </div>
                    </div>

                    {/* buttons */}
                    <div className='buttons row g-2'>
                      <div className="col">
                        <CartButton data={product} color={activeColor} quantity={quantity} />
                      </div>
                      <div className="col">
                        <WishlistButton data={product} />
                      </div>
                    </div>
                  </div>
                </Col>
                {/* //===img section end===// */}

                <Col lg={1}></Col>

                {/* //===derails section start===// */}
                <Col lg={6}>
                  <div className="details-section">
                    <h2 className='heading font-600'>{product.title}</h2>
                    <p className='font14 font-400'>{product.description}</p>
                    <div className='my-4'>
                      <RatingBox
                        rating={product.rating}
                        rateBy={true}
                        rateByName={Math.floor(Math.random() * (max - min + 1)) + min}
                      />
                    </div>

                    <div className='my-4 d-flex flex-wrap align-items-center'>
                      <span className='fs-1 font-600'>
                        <Price price={product.price} />
                      </span>
                      <span className='fs-4 text-overline ms-2'>
                        <Price price={(product.price * 1.1).toFixed(2)} muted={true} />
                      </span>
                    </div>

                    {/* Offers */}
                    <ul className='ps-3 my-5 border-top border-bottom py-2'>
                      {
                        Offers.map((data, index) => (
                          <li className='my-3' key={index}>
                            <span>{data} &nbsp;</span>
                            <a href="#" className='font-400'>learn more</a>
                          </li>
                        ))
                      }
                    </ul>

                    {/* Color */}
                    <div className='mt-4'>
                      <h5 className='heading'>Color</h5>
                      <div className='d-flex flex-wrap mt-3'>
                        <div className={`color-box-wrapper mx-3 ${activeColor == 1 ? 'active-color' : ''}`} onClick={() => { handleColorClick(1) }}>
                          <div className="color-box bg-1"></div>
                        </div>
                        <div className={`color-box-wrapper mx-3 ${activeColor == 2 ? 'active-color' : ''}`} onClick={() => { handleColorClick(2) }}>
                          <div className="color-box bg-2"></div>
                        </div>
                        <div className={`color-box-wrapper mx-3 ${activeColor == 3 ? 'active-color' : ''}`} onClick={() => { handleColorClick(3) }}>
                          <div className="color-box bg-3"></div>
                        </div>
                      </div>
                    </div>

                    <Quantity />

                    <div className="col-12">
                      <CartButton data={product} color={activeColor} quantity={quantity} />
                    </div>

                  </div>
                </Col>
                {/* //===derails section end===// */}
              </Row>
            </div>
            <div className='my-5'>
              <ProductList
                data={Data.even}
                isDesc={true}
                name="New Arrivals"
                desc="Add our new arrivals to your weekly lineup"
                isLoading={Data.isLoading}
                isLoadMoreBtn={false}
              />
            </div>
          </Wrapper>
      }

    </>
  )
}

export default SingleProduct;