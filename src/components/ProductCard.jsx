import React from 'react';
import styled from 'styled-components';
import TruncateText from './TruncateText';
import Price from './Price';
import RatingBox from './RatingBox';
import CartButton from './CartButton';
import { WishlistButtonSm } from './WishlistButton';
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.surface};

    .product-card{
        .img-container{
            width: 100%;
            height: 16rem;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }

    @media (max-width: ${({ theme }) => theme.screen.md}) {
        .product-card .img-container{
            height: 10rem;
        }
    }
    @media (max-width: ${({ theme }) => theme.screen.sm}) {
        .product-card .img-container{
            height: 10rem;
        }
        .hide-on-sm{
            display: none;
        }
    }
    @media (max-width: ${({ theme }) => theme.screen.xs}) {
        .product-card .img-container{
            height: 7rem;
        }
    }
`;

const ProductCard = ({ data, isLargeScreen }) => {
    return (
        <Container className={`${isLargeScreen ? "" : "rounded"}`}>
            <div className={`product-card ${isLargeScreen ? "" : "rounded"}`}>
                <Link to={`/product/${data.id}`}>
                    <div className={`img-container`}>
                        <img className={`${isLargeScreen ? "" : "rounded-top"}`} src={data.thumbnail} alt={data.title} loading="lazy" />
                    </div>
                </Link>
                <div className={`body d-flex flex-column ${isLargeScreen ? "p-3" : "p-2"}`}>
                    <div className='heading title font-600 d-flex justify-content-between align-items-center'>
                        <Link to={`/product/${data.id}`}>
                            <TruncateText text={data.title} maxLength={15} />
                        </Link>
                        <span className='hide-on-sm'><WishlistButtonSm data={data} /></span>
                    </div>
                    <span className='font13'>
                        <Link className='d-block' to={`/product/${data.id}`}>
                            <TruncateText text={data.description} maxLength={34} />
                        </Link>
                    </span>
                    <div className='d-flex align-items-center justify-content-between mt-2'>
                        <Price price={data.price} />
                        <RatingBox rating={data.rating} rateBy={false} />
                    </div>
                    <div className='mt-2 hide-on-sm text-center'>
                        <CartButton data={data} />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default ProductCard;