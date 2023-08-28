import React from 'react';
import classnames from 'classnames';
import type { PolymorphicRef, BoxProps } from '../box';
import { Box } from '..';

import {
  SelectWrapperProps,
  SelectWrapperComponent,
} from './select-wrapper.types';

export const SelectWrapper: SelectWrapperComponent = React.forwardRef(
  <C extends React.ElementType = 'div'>(
    { className = '', ...props }: SelectWrapperProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    return (
      <Box
        className={classnames('mm-select-wrapper', className)}
        ref={ref}
        {...(props as BoxProps<C>)}
      >
        SelectWrapper
      </Box>
    );
  },
);
