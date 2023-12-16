import React from 'react';
import styled from 'styled-components';
import { SmButton, TransparentButton } from '../styles/Buttons';
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 100%;

    .heading_{
        color: ${({ theme }) => theme.colors.black_};
    }

    .hero{
        width: 100%;
        height: 100%;
        background-image: url('/images/hero-img.jpg');
        background-repeat: no-repeat;
        background-position: top right;
        background-size: cover;
        padding: 4rem 2rem;

        @media(max-width:${({ theme }) => theme.screen.lg}){
            padding: 4rem 1rem;
        }
        @media(max-width:${({ theme }) => theme.screen.md}){
            padding: 3rem 1rem;
        }
        @media(max-width:${({ theme }) => theme.screen.sm}){
            padding: 2rem 1rem;
        }
    }
`;

const Hero = () => {
    return (
        <Container className='container'>
            <div className='hero'>
                <SmButton>SUM-21</SmButton>
                <h1 className='my-4 display-1 font-600 heading_'>SS-2021<br />
                    Top Trending</h1>
                <Link to="/shop">
                    <TransparentButton>Shop Now</TransparentButton>
                </Link>
            </div>
        </Container>
    )
}

export default Hero