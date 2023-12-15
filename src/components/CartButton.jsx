import React from 'react';
import styled from 'styled-components';
import { IoCartOutline, IoCart } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../redux/slices/cartSlice';

const Button = styled.button`
    padding: 10px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    background: ${({ theme, $exist }) => $exist === true ? theme.colors.theme1 : 'transparent'};
    outline: none !important;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    letter-spacing: 2px;
    font-size: 0.7rem;
    font-weight: 600;
    border: 1px solid ${({ theme }) => theme.colors.theme1};
    z-index: 1;
    color: ${({ theme, $exist }) => $exist === true ? theme.colors.white : theme.colors.theme1};
    width: 100%;
    text-transform: uppercase;

    &:after {
      position: absolute;
      content: "";
      width: 100%;
      height: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      background: ${({ theme }) => theme.colors.theme1};
      transition: all 0.3s ease;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }

    &:hover:after {
      top: 0;
      height: 100%;
    }

    &:active {
      top: 2px;
    }

    svg{
        font-size: 1rem;
    }
`;

const CartButton = ({ data }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const exists = cart.some(product => product.id === data.id);

  const handleClick = () => {
    dispatch(addCart(data));
  }

  return (
    <Button onClick={handleClick} $exist={exists}>
      {
        exists
          ? <>
            <IoCart />&nbsp;
            <span>Added To Cart</span>
          </>
          : <>
            <IoCartOutline />&nbsp;
            <span>Add To Cart</span>
          </>
      }

    </Button>
  )
}

export default CartButton;