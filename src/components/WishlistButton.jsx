import React from 'react';
import styled from 'styled-components';
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import Tooltip from '@mui/material/Tooltip';
import { useDispatch, useSelector } from 'react-redux';
import { addWishlist } from '../redux/slices/wishlistSlice';

const Button = styled.div`
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

const SmButton = styled.button`
    border: none;
    outline: none;
    background: none;
    color: ${({ theme }) => theme.colors.theme1};
    font-weight: 600;

    svg{
        font-size: 1.5rem;
    }
`;

const WishlistButton = ({ data }) => {
    const wishlist = useSelector(state => state.wishlist.items);
    const dispatch = useDispatch();

    const exists = wishlist.some(product => product.id === data.id);

    const handleClick = () => {
        dispatch(addWishlist(data));
    }

    return (
        <Button onClick={handleClick} $exist={exists}>
            {
                exists
                    ? <>
                        <IoHeart />&nbsp;
                        <span>Added To Wishlist</span>
                    </>
                    : <>
                        <IoHeartOutline />&nbsp;
                        <span>Add To Wishlist</span>
                    </>
            }

        </Button>
    )
}

const WishlistButtonSm = ({ data }) => {
    const wishlist = useSelector(state => state.wishlist.items);
    const dispatch = useDispatch();

    const exists = wishlist.some(product => product.id === data.id);

    const handleClick = () => {
        dispatch(addWishlist(data));
    }

    return (
        <Tooltip title="Add to Wishlist" placement="top">
            <SmButton onClick={handleClick}>
                {
                    exists ? <IoHeart /> : <IoHeartOutline />
                }
            </SmButton>
        </Tooltip>
    )
}

export { WishlistButtonSm };
export default WishlistButton;