import styled from "styled-components";

export const SmButton = styled.button`
    padding: 0 20px;
    height: 26px;
    background-color: ${({ theme }) => theme.colors.theme1};
    border: none;
    outline: none;
    color: ${({ theme }) => theme.colors.white};
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
`;
export const TransparentButton = styled.button`
    
    padding: 10px 25px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    background: transparent;
    outline: none !important;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    letter-spacing: 2px;
    font-size: 1rem;
    font-weight: 300;
    border: 1px solid ${({ theme }) => theme.colors.black};
    z-index: 1;
    color: ${({ theme }) => theme.colors.black};


    &:after {
      position: absolute;
      content: "";
      width: 100%;
      height: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      background: ${({ theme }) => theme.colors.theme1};
      transition: all 0.3s ease;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.white};
      border: 1px solid ${({ theme }) => theme.colors.white};
    }

    &:hover:after {
      top: 0;
      height: 100%;
    }

    &:active {
      top: 2px;
    }
`;

export const Button1 = styled.button`
padding: 10px 25px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    background: ${({ theme }) => theme.colors.heading};
    outline: none !important;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    letter-spacing: 2px;
    font-size: 1rem;
    font-weight: 300;
    /* border: 1px solid ${({ theme }) => theme.colors.black}; */
    border: none;
    z-index: 1;
    color: ${({ theme }) => theme.colors.body};


    &:after {
      position: absolute;
      content: "";
      width: 100%;
      height: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      background: ${({ theme }) => theme.colors.theme1};
      transition: all 0.3s ease;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }

    &:hover:after {
      top: 0;
      height: 100%;
    }

    &:active {
      top: 2px;
    }
`;