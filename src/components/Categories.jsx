import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { CategoriesData,CategoriesData2 } from '../data/CategoriesData';
import { Link } from 'react-router-dom';

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
                <h1 className='heading font-600'>Trending Categories</h1>
                <p className='font-400'>Find a bright ideal to suit your taste with our great selection of suspension.</p>
            </div>
            <Row className='g-4'>
                {
                    CategoriesData2.map((data, index) => (
                        <Col key={index}>
                            <Link className='category-card' to={data.link}>
                                <div className='img-box'>
                                    <img src={data.image} alt={data.name} />
                                </div>
                                <div className='desc mt-2'>
                                    <h5 className='title text text-center'>{data.name}</h5>
                                </div>
                            </Link>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default Categories;