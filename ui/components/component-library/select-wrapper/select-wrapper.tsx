import React from 'react';
import classnames from 'classnames';
import type { PolymorphicRef, BoxProps } from '../box';
import { Box, Popover, PopoverPosition } from '..';
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
      triggerComponent: TriggerComponent,
      ...props
    }: SelectWrapperProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const { isOpen, toggleOpen } = useSelectWrapperContext();
    const contextValues = useSelectWrapperContext();

    // Setting up the reference element on triggerComponent for the popover
    const [referenceElement, setReferenceElement] =
      React.useState<HTMLDivElement | null>(null);

    const setPopoverRef = (popoverRef: HTMLDivElement | null) => {
      setReferenceElement(popoverRef);
    };

    console.log('isOpen wrapper loaded', isOpen);

    return (
      <SelectWrapperContextProvider placeholder={placeholder}>
        <button onClick={toggleOpen}>Hello</button>
        <Box
          className={classnames('mm-select-wrapper', className)}
          ref={ref}
          onFocus={onFocus}
          onBlur={onBlur}
          {...(props as BoxProps<C>)}
        >
          <TriggerComponent ref={setPopoverRef} {...contextValues} />

          {/* Popover that renders the dropdown content */}
          <Popover
            className="mm-select-wrapper__popover"
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
