import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { FiltersData } from '../data/FiltersData';
import FilteredData from './FilteredData';
import { useDispatch, useSelector } from 'react-redux';
import { changeCat } from '../redux/slices/catSlice';
import { changeFilter } from '../redux/slices/filterSlice';
import { RoundButton } from '../styles/Buttons';
import OffCanvas from './OffCanvas';

const Wrapper = styled.div`
    .active{
        color: ${({ theme }) => theme.colors.theme1};
        font-weight: 400;
    }

    .filter-sm{
        display: none;
    }

    @media (max-width:${({ theme }) => theme.screen.md}) {
        .flter{
            display: none;
        }
        .filter-sm{
            display: block;
        }
    }

   
`;
const Filter = styled.div`
    background-color: ${({ theme }) => theme.colors.surface};
    border-radius: 10px;
`;

const Filters = () => {
    const category = useSelector(state => state.cat);
    const dispatch = useDispatch();

    const handleClick = (item) => {
        dispatch(changeCat(item));
        window.scrollTo(0, 0);  //scroll to top
    }

    const FilterSm = () => {
        return (
            <div className='filter-sm pb-3'>
                <div className='d-flex justify-content-between'>
                    {
                        Object.keys(FiltersData).map((data, index) => (
                            <RoundButton
                                key={index}
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasBottom"
                                aria-controls="offcanvasBottom"
                                onClick={()=>{dispatch(changeFilter(data))}}
                            >{data}</RoundButton>
                        ))
                    }
                </div>
            </div>
        );
    }

    return (
        <Wrapper className='container my-4'>
            <FilterSm />
            <OffCanvas/>
            <Row>
                <Col lg={3} md={3} className='flter'>
                    <Filter>
                        <h5 className='border-bottom heading p-3 uppercase'>Filters</h5>
                        {
                            Object.keys(FiltersData).map((cat, index) => {
                                return (
                                    <div key={index} className='p-3'>
                                        <h6 className='heading uppercase'>{cat}</h6>
                                        <ul className='ms-2'>
                                            {
                                                FiltersData[cat].map((item, index) => (
                                                    <li
                                                        key={index}
                                                        className={`title font15 py-1 cursor-pointer ${category === item ? "active" : ""}`}
                                                        onClick={() => { handleClick(item) }}
                                                    >{item}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </Filter>
                </Col>
                <Col lg={9} md={9}>
                    <FilteredData />
                </Col>
            </Row>
        </Wrapper>
    )
}

export default Filters;