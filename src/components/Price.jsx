import React from 'react';
import { useSelector } from 'react-redux';
import { PiCurrencyInrBold } from "react-icons/pi";
import styled from 'styled-components';

const Container = styled.div`
  /* font-weight: 600; */
`;

const Price = (props) => {
  const price = props.price;
  const currency = useSelector(state => state.currency);
  const INR = price * 80;
  const USD = price;

  return (
    <Container className={`price ${props.muted? "text": "theme1"}`}>
      {
        currency === "INR"
          ? <><PiCurrencyInrBold />{INR}</>
          : <>${USD}</>
      }
    </Container>
  )
}

export default Price;