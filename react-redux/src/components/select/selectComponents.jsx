import React from 'react';
import styled from '@emotion/styled';
import * as Colors from './colors';
import { ScrollbarStyles } from './ScrollbarStyles';
import { CheckIcon } from './Icon';

export const selectComponents = {
  IndicatorSeparator: () => null,
  MultiValueContainer: () => null,
  ClearIndicator: () => null,
  Option: (props) => (
    <StyledOption
      {...props.innerProps}
      style={props.getStyles('option', props)}
    >
      <CropText>{props.children}</CropText>
      {props.isSelected && <CheckIcon />}
    </StyledOption>
  ),
  MenuList: (props) => (
    <StyledMenuList style={props.getStyles('menuList', props)}>
      {props.children}
    </StyledMenuList>
  ),
};

export const StyledOption = styled('div')`
  position: relative;

  &:hover {
    background-color: ${Colors.DarkGray};
  }

  & svg {
    position: absolute;
    right: 10px;
    flex-shrink: 0;
  }

  &:not(:last-of-type) {
    border-bottom: 1px solid ${Colors.DarkGray};
  }

  & span:first-letter {
    text-transform: capitalize;
  }
`;

const CropText = styled('span')`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledMenuList = styled('div')`
  scrollbar-color: #69696b #000;
  scrollbar-width: thin;

  ${ScrollbarStyles};
`;
