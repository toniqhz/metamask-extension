import type {
  StyleUtilityProps,
  PolymorphicComponentPropWithRef,
} from '../box';

export interface SelectWrapperStyleUtilityProps extends StyleUtilityProps {
  /*
   * Additional classNames to be added to the SelectWrapper component
   */
  className?: string;
  /*
   * TODO: write info about type here
   */
  children?: React.ReactNode;
  /*
   * TODO: write info about type here
   */
  placeholder?: React.ReactNode;
  /*
   * TODO: write info about type here
   */
  value?: React.ReactNode;
  /*
   * TODO: write info about type here
   */
  defaultValue?: React.ReactNode;
  /*
   * TODO: write info about type here
   */
  onChange?: (value: string) => void;
  /*
   * TODO: write info about type here
   */
  name?: string;
  /*
   * TODO: write info about type here
   */
  isOpen?: boolean;
  /*
   * TODO: write info about type here
   */
  onFocus?: () => void;
  /*
   * TODO: write info about type here
   */
  onBlur?: () => void;
  /*
   * TODO: write info about type here
   */
  triggerComponent?: React.ReactNode;
}

export type SelectWrapperProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<C, SelectWrapperStyleUtilityProps>;

export type SelectWrapperComponent = <C extends React.ElementType = 'div'>(
  props: SelectWrapperProps<C>,
) => React.ReactElement | null;
