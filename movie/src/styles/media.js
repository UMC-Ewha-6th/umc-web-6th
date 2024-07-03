import { css } from 'styled-components';

const sizes = {
  desktop: {
    max: 1900,
    min: 768,
  },
  tablet: {
    max: 768,
    min: 600,
  },
  phone: {
    max: 600,
    min: 0,
  },
};

export const media = Object.entries(sizes).reduce((acc, [key, value]) => {
  return {
    ...acc,
    [key]: (first, ...interpolations) => css`
      @media (max-width: ${value.max}px) and (min-width: ${value.min}px) {
        ${css(first, ...interpolations)}
      }
    `,
  };
}, {});
