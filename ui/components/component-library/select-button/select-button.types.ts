import type {
  StyleUtilityProps,
  PolymorphicComponentPropWithRef,
} from '../box';

export interface SelectButtonStyleUtilityProps extends StyleUtilityProps {
  /*
   * Additional classNames to be added to the SelectButton component
   */
  className?: string;
}

export type SelectButtonProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<C, SelectButtonStyleUtilityProps>;

export type SelectButtonComponent = <C extends React.ElementType = 'div'>(
  props: SelectButtonProps<C>,
) => React.ReactElement | null;
