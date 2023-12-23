import React from 'react';
import styled from 'styled-components';
import { GradientButton } from '../styles/Buttons';
import { Link } from 'react-router-dom';

const Wrapper = styled.section`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .brand{
    img{
      width: 200px;
    }
  }
`;

const Signin = ({ setProgress }) => {

    return (
        <Wrapper>
            <center className='container'>
                <h1>Login to
                    &nbsp;
                    <Link to="/">
                        <span className='display-5 font-900 heading uppercase gradient-text'>E-Store</span>
                    </Link>
                </h1>
                <p className='font-400'>Start shopping now and get exclusive offers!</p>
                <GradientButton>Sign In</GradientButton>
            </center>
        </Wrapper>
    )
}

export default Signin;