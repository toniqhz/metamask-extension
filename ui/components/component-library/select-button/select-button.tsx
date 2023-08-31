import React from 'react';
import classnames from 'classnames';
import type { PolymorphicRef, BoxProps } from '../box';
import { Box } from '..';

import {
  SelectButtonProps,
  SelectButtonComponent,
} from './select-button.types';

export const SelectButton: SelectButtonComponent = React.forwardRef(
  <C extends React.ElementType = 'button'>(
    {
      children,
      className = '',
      isOpen,
      toggleOpen,
      placeholder,
      ...props
    }: SelectButtonProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    return (
      <Box
        className={classnames('mm-select-button', className)}
        ref={ref}
        as="button"
        onClick={toggleOpen}
        // onChange={onChange}
        // name={name}
        // onFocus={onFocus}
        // onBlur={onBlur}
        {...(props as BoxProps<C>)}
      >
        {/* SelectButton {value || defaultValue || placeholder}{' '} */}
        {placeholder}
        {isOpen ? 'open' : 'closed'}
        {children}
      </Box>
    );
  },
);
