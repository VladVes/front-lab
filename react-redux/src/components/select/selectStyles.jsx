import * as Colors from './colors';
import { transparentize } from 'polished';

import { CSSProperties } from 'react';

export const selectStyles = {
  container: (base): CSSProperties => ({
    ...base,
    height: '26px',
  }),
  control: () => ({
    display: 'flex',
    color: Colors.BlueMarine,
    backgroundColor: '#2D2D2D',
    minHeight: '100%',
    height: '26px',
    alignItems: 'center',
    padding: '0 0 0 5px',
    borderRadius: '0px 4px 4px 0px',
    border: 'none',
    cursor: 'pointer',
    ':hover': {
      color: `${transparentize(0.3, Colors.BlueMarine)};`,
    },
    ':disabled': {
      color: `${transparentize(0.7, Colors.BlueMarine)};`,
    },
  }),
  singleValue: () => ({
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    color: 'inherit',
    ':first-letter': {
      textTransform: 'capitalize',
    },
  }),
  valueContainer: (base) => ({
    ...base,
    padding: '0',
    flexWrap: 'nowrap',
  }),
  dropdownIndicator: (base) => ({
    ...base,
    padding: '8px 4px 8px 0',
    color: 'inherit',
    ':hover': {
      color: 'inherit',
    },
  }),
  menu: (base) => ({
    ...base,
    width: 'auto',
    minWidth: '100%',
    marginTop: '0',
    border: '1px solid #2D2D2D',
    borderRadius: '0px 0px 4px 4px',
    backgroundColor: '#1A1C20',
    zIndex: 10,
  }),
  menuList: (base) => ({
    ...base,
    padding: '0',
  }),
  option: () => ({
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: '200px',
    padding: '8px 27px 8px 12px',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    fontWeight: 'bold',
    lineHeight: '14px',
    fontSize: '12px',
    color: Colors.WeakGray,
    cursor: 'pointer',
    userSelect: 'none',
    overflow: 'hidden',
  }),
  groupHeading: () => ({
    padding: '3px 6px',
    fontSize: '12px',
    width: '100%',
    color: Colors.WeakGray,
    backgroundColor: '#2d2d2d',
    ':first-letter': {
      textTransform: 'capitalize',
    },
  }),
  group: (base) => ({
    ...base,
    padding: '0',
  }),
  loadingIndicator: (base) => ({
    ...base,
    color: Colors.BlueMarine,
  }),
};
