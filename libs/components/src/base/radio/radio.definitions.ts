// IMPORTS
import type { TSize } from '@relume-demo/utils';

// TYPES
/**
 * Defines the props required for the radio button component.
 */
type TRadioProps = IRadio;

// INTERFACES
/**
 * Defines the default props required for the radio button component.
 */
interface IRadio {
  // Required
  /**
   * The text to be displayed as the label for the radio button.
   */
  label: string;
  /**
   * The name that groups the radio button with others in the same form.
   * It is used for accessibility and ensuring only one radio button in the group is selected.
   */
  name: string;
  /**
   * Callback function triggered on change of the radio button's checked state.
   * 
   * @param { boolean } checkedState - The updated checked state of the radio button.
   * 
   * @returns { void } - Returns nothing.
   */
  onChange: ( checkedState: boolean ) => void;

  // Optional
  /**
   * Additional classes to apply to the radio button component.
   */
  className?: string;
  /**
   * Determines whether the radio button is checked initially.
   */
  isChecked?: boolean;
  /**
   * Disables the radio button if set to true.
   */
  isDisabled?: boolean;
  /**
   * Renders the radio button in a skeleton loading state.
   */
  isSkeleton?: boolean;
  /**
   * An optional link element displayed next to the label.
   */
  link?: JSX.Element;
  /**
   * Determines whether to display the label.
   */
  showLabel?: boolean;
  /**
   * The size of the radio button.
   */
  size?: TSize;
}

// EXPORTS
export type { TRadioProps };