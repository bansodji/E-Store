import React from 'react';
import styled from 'styled-components';
import TruncateText from './TruncateText';
import Price from './Price';
import RatingBox from './RatingBox';
import CartButton from './CartButton';
import { Link } from 'react-router-dom';
import { IoClose } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { removeCart } from '../redux/slices/cartSlice';
import { PiKeyReturnLight } from "react-icons/pi";

const Colors = {
    1: "Aspire White",
    2: "Carbon Black",
    3: "Shiny Blue",
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.surface};
    position: relative;

    .remove{
        position: absolute;
        right: 8px;
        top: 4px;
        font-size: 1.3rem;
    }

    .img-container{
            width: 100%;
            height: 11rem;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
`;

const CartCard = ({ data }) => {
    const dispatch = useDispatch();

    return (
        <Container className='p-3'>
            <div className="remove">
                <IoClose
                    className='cursor-pointer'
                    onClick={() => { dispatch(removeCart(data.id)) }}
                />
            </div>
            <div className='row g-0'>
                <div className="col-3">
                    <div className="img-container">
                        <img src={data.thumbnail} alt={data.title} loading="lazy" />
                    </div>
                </div>
                <div className="col-9">
                    <div className="body ps-3">
                        <h6 className='heading'>
                            <TruncateText text={data.title} maxLength={15} />
                        </h6>
                        <p className='font14'><TruncateText text={data.description} maxLength={30} /></p>
                        <div className='font14'>
                            <span>Qunatity: {data.quantity}</span>
                        </div>
                        <div className='font14'>
                            <span>Color: {Colors[data.color]}</span>
                        </div>
                        <div className='d-flex align-items-center justify-content-between mt-2'>
                            <span className='font-600'><Price price={data.price*data.quantity} /></span>
                        </div>
                        <div className='font14 mt-2'>
                            <PiKeyReturnLight /><span className='ms-2'>14 days return available</span>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default CartCard;