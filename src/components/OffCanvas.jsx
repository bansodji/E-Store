import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiltersData } from '../data/FiltersData';
import styled from 'styled-components';
import { changeCat } from '../redux/slices/catSlice';
import { AiOutlineClose } from "react-icons/ai";

const Container = styled.div`
    z-index: 9999;
    background-color:${({ theme }) => theme.colors.surface} !important;
    color:${({ theme }) => theme.colors.text} !important;
    height: auto !important;

    .active{
        color: ${({ theme }) => theme.colors.theme1};
        font-weight: 400;
    }

    li{
        cursor:pointer;
    }

    .btn-close{
        color:${({ theme }) => theme.colors.text} !important;
    }
`;

const OffCanvas = () => {
    const filter = useSelector(state => state.filter);
    const category = useSelector(state => state.cat);
    const isLight = useSelector(state => state.theme);

    const dispatch = useDispatch();

    return (
        <Container className="offcanvas offcanvas-bottom" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
            <div className={`offcanvas-header border-bottom ${isLight ? "border-muted" : "border-secondary"}`}>
                <h5 className="offcanvas-title uppercase heading" id="offcanvasBottomLabel">{filter}</h5>
                <AiOutlineClose
                    className='cursor-pointer fs-4'
                    data-bs-dismiss="offcanvas" aria-label="Close"
                />
            </div>
            <div className="offcanvas-body pt-3 pb-5 mb-4">
                <ul>
                    {filter === "" ? ""
                        : FiltersData[filter].map((data, index) => (
                            <li
                                key={index}
                                onClick={() => { dispatch(changeCat(data)) }}
                                className={`title my-2 ${category === data ? "active" : ""}`}
                                data-bs-dismiss="offcanvas" aria-label="Close"
                            >{data}</li>
                        ))
                    }
                </ul>
            </div>

        </Container>
    )
}

export default OffCanvas;