import React from 'react';
import styled from 'styled-components';
import TruncateText from './TruncateText';
import Price from './Price';
import RatingBox from './RatingBox';

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
    }
    @media (max-width: ${({ theme }) => theme.screen.xs}) {
        .product-card .img-container{
            height: 7rem;
        }
    }
`;

const ProductCard = ({ data ,isLargeScreen}) => {

    return (
        <Container className={`${isLargeScreen? "" : "rounded"}`}>
            <div className={`product-card ${isLargeScreen? "" : "rounded"}`}>
                <div className={`img-container`}>
                    <img className={`${isLargeScreen? "" : "rounded-top"}`} src={data.thumbnail} alt={data.title} loading="lazy" />
                </div>
                <div className={`body d-flex flex-column ${isLargeScreen? "p-3" : "p-2"}`}>
                    <span className='heading title font-600'>
                        <TruncateText text={data.title} maxLength={15} />
                    </span>
                    <span className='font13'>
                        <TruncateText text={data.description} maxLength={34} />
                    </span>
                    <div className='d-flex align-items-center justify-content-between mt-2'>
                        <Price price={data.price} />
                        <RatingBox rating={data.rating} rateBy={false} />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default ProductCard;