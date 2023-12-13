import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { IoHeartOutline, IoCartOutline, IoSearchOutline, IoChevronDown } from "react-icons/io5";
import Badge from './Badge';
import { NavListOutline, NavListSolid } from '../data/HeaderData';
import ThemeSwitch from './ThemeSwitch';
import { useSelector, useDispatch } from 'react-redux';
import { changeLang } from '../redux/slices/langSlice';
import { changecurrency } from '../redux/slices/currSlice';

const Wrapper = styled.header`
    z-index: 9999 !important;
    width: 100%;
    box-shadow: ${({ theme }) => theme.other.boxShadow};
    background-color: ${({ theme }) => theme.colors.surface};

    .active{
        color: ${({ theme }) => theme.colors.theme1};
    }
    .active-cr{
        color: ${({ theme }) => theme.colors.theme1};
        background-color: ${({ theme }) => theme.colors.body};
    }
`;

const NavLinks = styled.ul`
    display: flex;

    @media(max-width:${({ theme }) => theme.screen.md}){
        display: none;
    }
`;

const BottomNavLinks = styled.div`
    z-index: 9999 !important;
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

const Language = ["INR", "USD"];

const Header = () => {
    const NavItem = Object.keys(NavListOutline);
    const location = useLocation();

    const lang = useSelector(state => state.lang);
    const currency = useSelector(state => state.currency);
    const isLight = useSelector(state => state.theme);
    const dispatch = useDispatch();

    const TopNav = () => {
        return (
            <div className={`border-bottom ${isLight ? "border-muted" : "border-secondary"}`}>
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <ul className='font13 d-flex align-items-center'>
                            <li className=''>
                                <ThemeSwitch />
                            </li>
                        </ul>
                        <ul className='font13 d-flex align-items-center'>
                            <li className='me-2 pt-3'>
                                <div className='ip-hover-select'>
                                    <button>Currency <IoChevronDown /></button>
                                    <ul className='options'>
                                        {
                                            Language.map((data, index) => (
                                                <li
                                                    key={index}
                                                    onClick={() => { dispatch(changecurrency(data)) }}
                                                    className={`${currency === data ? "active-cr" : ""}`}
                                                >
                                                    {data}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
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
                            <NavList />
                        </NavLinks>
                        <ul className='d-flex'>
                            <NavList2 />
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
                    <NavList />
                </ul>
            </BottomNavLinks>
        )
    }

    const NavList = () => {
        return (
            <>
                {
                    NavItem.map((data, index) => {
                        let link = data === "home" ? "/" : data;
                        let pathname = location.pathname === "/" ? "/" : location.pathname.split("/")[1];
                        let active = pathname === link;

                        return (
                            <li key={index} className={`px-3 py-2 heading ${active ? "active" : ""}`}>
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
            </>
        );
    }

    const NavList2 = () => {
        return (
            <>
                <li className='mx-2 heading'>
                    <Link to="/search" className='fs-4'>
                        <IoSearchOutline />
                    </Link>
                </li>
                <li className='mx-2 heading'>
                    <Badge icon={<IoHeartOutline />} count={0} />
                </li>
                <li className='ms-2 heading'>
                    <Badge icon={<IoCartOutline />} count={0} />
                </li>
            </>
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