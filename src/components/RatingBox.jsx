import React from 'react';
import styled from 'styled-components';
import { AiFillStar } from "react-icons/ai";

const RatingButtonWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.lightBorder};
  display: inline;
  padding: 8px 15px;
  font-size: 14px;

  .icon{
    color: ${({ theme }) => theme.colors.gold};
    margin-left: 2px;
  }

  .rate-by{
    /* color: ${({ theme }) => theme.colors.grey}; */
  }

  .line{
    border: 1px solid ${({ theme }) => theme.colors.lightBorder};
    margin: 0 10px;
  }

  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    padding: 1px;
    font-size: 12px;
    border: none;
  }
`;

const RatingBox = (props) => {
  let formattedNumber = props.rating.toFixed(1);
  return (
    <RatingButtonWrapper className={`${props.rateBy ? "" : "border-0"}`}>
      <span className='rating font-600 space-2'>
        {formattedNumber}
        <span className='icon'><AiFillStar /></span>
      </span>
      {
        props.rateBy
          ? <>
            <span className="line"></span>
            <span className='rate-by'>{props.rateByName} Rating</span>
          </>
          : <></>
      }

    </RatingButtonWrapper>
  );
}

export default RatingBox;