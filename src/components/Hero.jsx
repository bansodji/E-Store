import React from 'react';
import styled from 'styled-components';
import { SmButton, TransparentButton } from '../styles/Buttons';

const Container = styled.div`
    width: 100%;

    .heading_{
        color: ${({ theme }) => theme.colors.black_};
    }
`;

const Box = styled.div`
    width: 100%;
    height: 80vh;
    position: relative;

    @media(max-width:${({ theme }) => theme.screen.lg}){
        height: 50vh;
    }
    @media(max-width:${({ theme }) => theme.screen.md}){
        height: 40vh;
    }
    @media(max-width:${({ theme }) => theme.screen.sm}){
        height: 40vh;
    }

    .img{
        width: inherit;
        height: inherit;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top;
        }
    }

    .box-overlay{
        width: inherit;
        height: inherit;
        position: absolute;
        top: 0;
        display: flex;
        align-items: center;
    }


`;

const Hero = () => {
    return (
        <Container className='container'>
            <Box>
                <div className='img'>
                    <img src="/images/hero-img.jpg" alt="E-Store" />
                </div>
                <div className='box-overlay px-4'>
                    <div>
                        <SmButton>SUM-21</SmButton>
                        <h1 className='my-4 display-1 font-600 heading_'>SS-2021<br/>
                        Top Trending</h1>
                        <TransparentButton>Shop Now</TransparentButton>                        
                    </div>
                </div>
            </Box>
        </Container>
    )
}

export default Hero