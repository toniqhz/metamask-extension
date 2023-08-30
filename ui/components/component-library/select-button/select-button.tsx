import React from 'react';
import classnames from 'classnames';
import type { PolymorphicRef, BoxProps } from '../box';
import { Box } from '..';
import { useSelectWrapperContext } from '../select-wrapper';

import {
  SelectButtonProps,
  SelectButtonComponent,
} from './select-button.types';

export const SelectButton: SelectButtonComponent = React.forwardRef(
  <C extends React.ElementType = 'button'>(
    { className = '', ...props }: SelectButtonProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const { placeholder } = useSelectWrapperContext();
    return (
      <Box
        className={classnames('mm-select-button', className)}
        ref={ref}
        as="button"
        {...(props as BoxProps<C>)}
      >
        SelectButton {placeholder}
      </Box>
    );
  },
);
