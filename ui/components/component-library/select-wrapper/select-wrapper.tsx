import React, { useState } from 'react';
import classnames from 'classnames';
import type { PolymorphicRef, BoxProps } from '../box';
import { Box, Button } from '..';

import {
  SelectWrapperProps,
  SelectWrapperComponent,
} from './select-wrapper.types';

export const SelectWrapper: SelectWrapperComponent = React.forwardRef(
  <C extends React.ElementType = 'div'>(
    {
      className = '',
      children,
      placeholder,
      value,
      defaultValue,
      onChange,
      name,
      isOpen,
      onFocus,
      onBlur,
      triggerComponent = <Button>Trigger</Button>,
      ...props
    }: SelectWrapperProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    // Local state to manage whether the dropdown is open
    const [isDropdownOpen, setDropdownOpen] = useState(isOpen || false);

    const handleDropdownToggle = () => {
      setDropdownOpen(!isDropdownOpen);
    };

    return (
      <Box
        className={classnames('mm-select-wrapper', className)}
        ref={ref}
        onFocus={onFocus}
        onBlur={onBlur}
        {...(props as BoxProps<C>)}
      >
        {/* Trigger component that opens/closes the dropdown */}
        {triggerComponent && (
          <div onClick={handleDropdownToggle}>{triggerComponent}</div>
        )}

        {/* Placeholder or selected value */}
        <div>{value || defaultValue || placeholder}</div>

        {/* Dropdown content */}
        {isDropdownOpen && (
          <div>
            {/* Render select options here */}
            {children}
          </div>
        )}
      </Box>
    );
  },
);
