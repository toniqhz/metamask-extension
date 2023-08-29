import React, { useState } from 'react';
import classnames from 'classnames';
import type { PolymorphicRef, BoxProps } from '../box';
import { Box, Button, Popover, PopoverPosition } from '..';

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
      isOpen = true,
      onFocus,
      onBlur,
      triggerComponent = <Button>Trigger Component Test</Button>,
      ...props
    }: SelectWrapperProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    // Local state to manage whether the dropdown is open
    const [isDropdownOpen, setDropdownOpen] = useState(isOpen || false);

    const [referenceElement, setReferenceElement] = useState();

    const setBoxRef = (ref) => {
      setReferenceElement(ref);
    };

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
          <div
            ref={setBoxRef}
            onClick={handleDropdownToggle}
            style={{ background: 'gold', width: 'max-content' }}
          >
            {triggerComponent}
          </div>
        )}

        {/* Placeholder or selected value */}
        <div>{value || defaultValue || placeholder}</div>

        {/* Popover that renders the dropdown content */}
        <Popover
          referenceElement={referenceElement}
          isOpen={isDropdownOpen}
          position={PopoverPosition.Bottom}
          matchWidth
        >
          {children}
        </Popover>
      </Box>
    );
  },
);
