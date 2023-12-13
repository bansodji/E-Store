import React from 'react';
import { useSelector } from 'react-redux';
import { PiCurrencyInrBold  } from "react-icons/pi";
import styled from 'styled-components';

const Container = styled.div`
  color: ${({ theme }) => theme.colors.theme1};
  font-weight: 600;
`;

const Price = ({price}) => {
  const currency = useSelector(state=>state.currency);
  const INR = price*80;
  const USD = price;

  return (
    <Container className='price'>
        {
          currency === "INR"
          ? <><PiCurrencyInrBold />{INR}</>
          : <>${USD}</>
        }
    </Container>
  )
}

export default Price;