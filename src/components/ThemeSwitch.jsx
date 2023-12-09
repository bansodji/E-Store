import React, { useState } from 'react';
import styled from 'styled-components';
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

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
    
    svg{
        font-size: 1.1rem;
        margin: 0 4px;
        text-align: center;
        color: ${({ theme }) => theme.colors.heading};
        transition: left 0.3s ease-in-out;
    }

    .active{
        color: ${({ theme }) => theme.colors.theme1};
    }

    .sun{color: ${({ theme }) => theme.colors.sun};}
    .moon{color: ${({ theme }) => theme.colors.moon};}
`;

const Slide = styled.div`
    width: 50%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.surface};
    position: absolute;
    top: 0;
    left: ${({ light }) => (light ? '2%' : '48%')};
    transition: left 0.2s ease-in-out;
    z-index: -1;
    border-radius: 6px;
`;

const ThemeSwitch = () => {
    const [light, setLight] = useState(true);

    const handleSwitch = () => {
        setLight(!light);
    };

    return (
        <Wrapper>
            <Container onClick={handleSwitch}>
                <BiSolidSun
                    // className={light ? "active" : ""}
                    className="sun"
                />
                <BiSolidMoon
                    // className={light ? "" : "active"}
                    className="moon"
                />
                <Slide light={light} />
            </Container>
        </Wrapper>
    )
}

export default ThemeSwitch;