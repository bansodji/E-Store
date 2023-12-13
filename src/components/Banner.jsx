import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { SaleButton, TransparentButton } from '../styles/Buttons';

const Container = styled.div`
`;

const Box = styled.div`
    width: 100%;
    height: 100%;
    position: relative;

    .box-img{
        width: 100%;
        height: 100%;

        img{
            width: inherit;
            height: inherit;
            object-fit: cover;
        }
    }

    .box-overlay{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;        
    }

    .black-heading{
        background-color: ${({theme})=>theme.colors.theme3};
        color: ${({theme})=>theme.colors.white};
        padding: 1px 10px;
    }
`;

const Banner = () => {
    return (
        <Container className='container my-5'>
            <Row className='g-4'>
                <Col lg={5} md={5} sm={12}>
                    <Box>
                        <div className='box-img'>
                            <img src="/images/banner-1.jpg" alt="Exclusive Sale" />
                        </div>
                        <div className='box-overlay text-center d-flex flex-column justify-content-center align-items-center'>
                            <img src="/images/Special-Sale.png" alt="Special-Sale" className='img-fluid' />
                            <div>
                                <span className='uppercase'>Enter Code</span>
                                <SaleButton className='ms-3'>SUM50</SaleButton>
                                <h1 className='uppercase theme1 my-3 display-4 font-600'>50% Off</h1>
                                <TransparentButton>Shop Now</TransparentButton>
                            </div>
                        </div>
                    </Box>
                </Col>
                <Col lg={7} md={7} sm={12}>
                    <Box>
                        <div className='box-img'>
                            <img src="/images/banner-2.jpg" alt="Exclusive Sale" />
                        </div>
                        <div className='box-overlay text-center d-flex flex-column justify-content-center align-items-start p-3'>
                            <h4 className='theme1'>New Season</h4>
                            <h1 className='black-heading mt-2'>Summer Collection</h1>
                            <TransparentButton className='mt-3'>Shop Now</TransparentButton>
                        </div>
                    </Box>
                </Col>
            </Row>
        </Container>
    )
}

export default Banner;