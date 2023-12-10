import React from 'react';
import styled from 'styled-components';
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from '../redux/slices/themeSlice';

const Wrapper = styled.div`
    padding: 3px 1px;
    background-color: ${({ theme }) => theme.colors.body};
    border-radius: 6px;
`;

const Container = styled.button`
    border: none;
    outline: none;
    border-radius: 6px;
    padding: 3px;
    position: relative;
    background-color: ${({ theme }) => theme.colors.body};
    z-index: 1;

    svg {
        font-size: 1.1rem;
        margin: 0 4px;
        text-align: center;
        color: ${({ theme }) => theme.colors.heading};
        transition: color 0.3s ease-in-out;
    }

    .sun {
        color: ${({ theme }) => theme.colors.sun};
    }

    .moon {
        color: ${({ theme }) => theme.colors.moon};
    }
`;

const Slide = styled.div`
    width: 50%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.surface};
    position: absolute;
    top: 0;
    left: ${({ $isLight }) => ($isLight ? '2%' : '48%')};
    transition: left 0.2s ease-in-out;
    z-index: -1;
    border-radius: 6px;
`;

const ThemeSwitch = () => {
    const isLight = useSelector(state => state.theme);
    const dispatch = useDispatch();

    const handleSwitch = () => {
        dispatch(changeTheme());
    };

    return (
        <Wrapper>
            <Container onClick={handleSwitch}>
                <BiSolidSun className="sun" />
                <BiSolidMoon className="moon" />
                <Slide $isLight={isLight} />
            </Container>
        </Wrapper>
    );
};

export default ThemeSwitch;
