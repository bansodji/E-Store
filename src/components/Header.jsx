import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { IoHeartOutline, IoCartOutline, IoSearchOutline, IoChevronDown } from "react-icons/io5";
import Badge from './Badge';
import { NavListOutline, NavListSolid } from '../data/HeaderData';
import ThemeSwitch from './ThemeSwitch';

const Wrapper = styled.header`
    z-index: 999;
    width: 100%;
    box-shadow: ${({ theme }) => theme.other.boxShadow};
    background-color: ${({ theme }) => theme.colors.surface};

    .active{
        color: ${({ theme }) => theme.colors.theme1};
    }
`;

const NavLinks = styled.ul`
    display: flex;

    @media(max-width:${({ theme }) => theme.screen.md}){
        display: none;
    }
`;

const BottomNavLinks = styled.div`
    display: none;
    position: fixed;
    bottom: 0;
    width: 100%;
    box-shadow: ${({ theme }) => theme.other.boxShadow};
    background-color: ${({ theme }) => theme.colors.surface};

    @media(max-width:${({ theme }) => theme.screen.md}){
        display: block;
    }

    .active{
        color: ${({ theme }) => theme.colors.theme1};
        border-top: 2px solid ${({ theme }) => theme.colors.theme1};
    }
`;

const Header = () => {
    const NavItem = Object.keys(NavListOutline);
    const location = useLocation();

    const TopNav = () => {
        return (
            <div className='border-bottom'>
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <ul className='font13 d-flex align-items-center'>
                            <li className='me-2 pt-3'>
                                <div className='ip-hover-select'>
                                    <button>Language <IoChevronDown /></button>
                                    <ul className='options'>
                                        <li>English</li>
                                        <li>Hindi</li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        <ul className='font13 d-flex align-items-center'>
                            <li className='ms-2'>
                                <ThemeSwitch />
                            </li>
                            <li className='ms-2'>
                                <Link to="/Signin" className='hover1 font-400'>Sign in / Register</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

    const Navigation = () => {
        return (
            <nav>
                <div className="container">
                    <div className='d-flex align-items-center justify-content-between py-2'>
                        <Link to="/">
                            <span className='fs-1 font-900 heading uppercase gradient-text'>E-Store</span>
                        </Link>
                        <NavLinks>
                            {
                                NavItem.map((data, index) => {
                                    let link = data === "home" ? "/" : data;
                                    let pathname = location.pathname === "/" ? "/" : location.pathname.split("/")[1];
                                    let active = pathname === link;

                                    return (
                                        <li key={index} className={`px-2 mx-2 ${active ? "active" : ""}`}>
                                            <Link
                                                className='d-flex flex-column text-center fs-3 align-items-center'
                                                to={link}
                                            >
                                                {active ? NavListSolid[data] : NavListOutline[data]}
                                                <span className='font11 title font-500'>{data}</span>
                                            </Link>
                                        </li>
                                    );
                                })
                            }
                        </NavLinks>
                        <ul className='d-flex'>
                            <li className='mx-2'>
                                <Link to="/search" className='fs-4'>
                                    <IoSearchOutline />
                                </Link>
                            </li>
                            <li className='mx-2'>
                                <Badge icon={<IoHeartOutline />} count={0} />
                            </li>
                            <li className='ms-2'>
                                <Badge icon={<IoCartOutline />} count={0} />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }

    const BottomNav = () => {
        return (
            <BottomNavLinks>
                <ul className='w-100 d-flex justify-content-between'>
                    {
                        NavItem.map((data, index) => {
                            let link = data === "home" ? "/" : data;
                            let pathname = location.pathname === "/" ? "/" : location.pathname.split("/")[1];
                            let active = pathname === link;

                            return (
                                <li key={index} className={`px-3 py-2 ${active ? "active" : ""}`}>
                                    <Link
                                        className={`d-flex flex-column align-items-center text-center fs-3`}
                                        to={link}
                                    >
                                        {active ? NavListSolid[data] : NavListOutline[data]}
                                        <span className='font10 title font-500'>{data}</span>
                                    </Link>
                                </li>
                            );
                        })
                    }
                </ul>
            </BottomNavLinks>
        )
    }

    return (
        <>
            <Wrapper>
                <TopNav />
                <Navigation />
            </Wrapper>
            <BottomNav />
        </>
    )
}

export default Header;