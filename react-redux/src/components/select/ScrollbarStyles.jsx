import { css } from '@emotion/core';

export const ScrollbarStyles = css`
  &::-webkit-scrollbar-thumb {
    background-color: #69696b;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-track-piece {
    background-color: #000000;
    border-radius: 20px;
  }

  &::-webkit-scrollbar {
    width: 7px;
  }
`;
