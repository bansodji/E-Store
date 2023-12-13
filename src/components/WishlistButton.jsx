import React from 'react';
import styled from 'styled-components';
import { IoCartOutline, IoHeartOutline, IoHeart, IoCart } from "react-icons/io5";
import Tooltip from '@mui/material/Tooltip';

const Button = styled.div`
    padding: 10px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    background: transparent;
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
    color: ${({ theme }) => theme.colors.theme1};
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
      border: 1px solid ${({ theme }) => theme.colors.white};
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

const SmButton = styled.button`
    border: none;
    outline: none;
    background: none;
    color: ${({ theme }) => theme.colors.theme1};
    font-size: 1.2rem;
    font-weight: 600;
`;

const WishlistButton = () => {
    return (
        <Button>
            <IoCartOutline />
            &nbsp;Add To Cart
        </Button>
    )
}

const WishlistButtonSm = () => {
    return (
        <Tooltip title="Add to Wishlist" placement="top">
            <SmButton>
                <IoHeartOutline />
            </SmButton>
        </Tooltip>
    )
}

export { WishlistButtonSm };
export default WishlistButton;