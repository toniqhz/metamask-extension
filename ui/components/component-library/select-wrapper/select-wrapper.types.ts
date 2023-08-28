import type {
  StyleUtilityProps,
  PolymorphicComponentPropWithRef,
} from '../box';

export interface SelectWrapperStyleUtilityProps extends StyleUtilityProps {
  /*
   * Additional classNames to be added to the SelectWrapper component
   */
  className?: string;
}

export type SelectWrapperProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<C, SelectWrapperStyleUtilityProps>;

export type SelectWrapperComponent = <C extends React.ElementType = 'div'>(
  props: SelectWrapperProps<C>,
) => React.ReactElement | null;
