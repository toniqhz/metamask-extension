import React from 'react';
import classnames from 'classnames';
import type { PolymorphicRef, BoxProps } from '../box';
import { Box, Button, Popover, PopoverPosition } from '..';
import {
  useSelectWrapperContext,
  SelectWrapperContextProvider,
} from './select-wrapper-context';

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
      onFocus,
      onBlur,
      triggerComponent = <Button>Trigger Component Test</Button>,
      ...props
    }: SelectWrapperProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const { isOpen, toggleOpen } = useSelectWrapperContext();

    // Setting up the reference element on triggerComponent for the popover
    const [referenceElement, setReferenceElement] =
      React.useState<HTMLDivElement | null>(null);

    const setPopoverRef = (popoverRef: HTMLDivElement | null) => {
      setReferenceElement(popoverRef);
    };

    // Toggle the dropdown open/closed
    const handleSelectWrapperToggle = () => {
      toggleOpen();
    };

    return (
      <SelectWrapperContextProvider>
        <Box
          className={classnames('mm-select-wrapper', className)}
          ref={ref}
          onFocus={onFocus}
          onBlur={onBlur}
          {...(props as BoxProps<C>)}
        >
          {/* Trigger component that opens/closes the dropdown */}
          {triggerComponent &&
            React.cloneElement(triggerComponent as React.ReactElement, {
              ref: setPopoverRef,
              onClick: handleSelectWrapperToggle,
              style: { background: 'gold', width: 'max-content' },
            })}

          {/* Placeholder or selected value */}
          <div>{value || defaultValue || placeholder}</div>

          {/* Popover that renders the dropdown content */}
          <Popover
            referenceElement={referenceElement}
            isOpen={isOpen}
            position={PopoverPosition.Bottom}
            matchWidth
          >
            {children}
          </Popover>
        </Box>
      </SelectWrapperContextProvider>
    );
  },
);
