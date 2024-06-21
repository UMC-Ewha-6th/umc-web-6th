import React from 'react';
import styled from 'styled-components';

const IconStyle = styled.svg`
  width: 24px;
  height: 24px;
  color: currentColor;
`;

export const CartIcon = () => {
  return (
    <IconStyle
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth={2}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
      />
    </IconStyle>
  );
};

export const ChevronDown = () => {
  return (
    <IconStyle
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth={2}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
    </IconStyle>
  );
};

export const ChevronUp = () => {
  return (
    <IconStyle
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth={2}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M5 15l7-7 7 7' />
    </IconStyle>
  );
};
