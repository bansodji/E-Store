import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { CategoriesData } from '../data/CategoriesData';

const Container = styled.div`
    .category-card{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        .img-box{
            width: 10rem;
            height: 10rem;
            box-shadow: ${({theme})=>theme.other.boxShadow};
            
            @media (max-width:${({ theme }) => theme.screen.md}) {
                width: 9rem;
                height: 9rem;
            }
            @media (max-width:${({ theme }) => theme.screen.sm}) {
                width: 8rem;
                height: 8rem;
            }
            border-radius: 50%;
            img{
                width: 100%;
                height: 100%;
                border-radius: 50%;
                object-fit: cover;
                object-position: center;
            }
        }
    }
`;

const Categories = () => {
    return (
        <Container className='container my-5'>
            <div className='text-center'>
                <h1 className='heading'>Trending Categories</h1>
                <p className='font-400'>Find a bright ideal to suit your taste with our great selection of suspension.</p>
            </div>
            <Row className='g-4'>
                {
                    Object.keys(CategoriesData).map((data, index) => (
                        <Col key={index}>
                            <div className='category-card'>
                                <div className='img-box'>
                                    <img src={CategoriesData[data]} alt={data} />
                                </div>
                                <div className='desc mt-2'>
                                    <h5 className='title text'>{data}</h5>
                                </div>
                            </div>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default Categories;