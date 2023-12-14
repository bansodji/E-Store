import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { AllCategories } from '../data/CategoriesData';
import { Link } from 'react-router-dom';

const Card = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${({theme})=>theme.colors.theme2};
    color: ${({theme})=>theme.colors.white};
    letter-spacing: 1px;
    display: grid;
    place-items: center;

    .image{
        width: 90%;
        height: 10rem;

        img{
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position:center;
        }
    }

    .desc{
        width: 100%;
        height: 100%;
        text-align: center;
    }
`;

const Category = () => {
    return (
        <section className='container my-4'>
            <h1 className='heading text-center my-4 font-600'>Shop By Category</h1>
            <Row className='g-3'>
                {
                    AllCategories.map((data, index) => (
                        <Col key={index} lg={3} md={3} sm={4} xs={6}>
                            <Card>
                                <Link className='image' to={`/category/${data.name}`}>
                                    <img src={data.image} alt={data.name} className='mt-2' />
                                </Link>
                                <Link className='desc p-2 pt-3' to={`/category/${data.name}`}>
                                    <h6 className='title'>{data.name.replace(/-/g, " ")}</h6>
                                </Link>
                            </Card>
                        </Col>
                    ))
                }

            </Row>
        </section>
    )
}

export default Category;