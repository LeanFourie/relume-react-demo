// IMPORTS
import type { TSize } from '@relume-demo/utils';

// TYPES
/**
 * Props for the Checkbox component.
 */
type TCheckboxProps = ICheckbox;

// INTERFACES
/**
 * Defines the properties for the Checkbox component.
 */
interface ICheckbox {
  // Required
  /**
   * The label text and accessibility label for the Checkbox.
   */
  label: string;
  /**
   * The unique name to group the checkbox with others in a form.
   */
  name: string;
  /**
   * Callback triggered when the checkbox state changes.
   * 
   * @param checkedState - Indicates whether the checkbox is checked.
   * 
   * @returns { void } - Returns nothing.
   */
  onChange: ( checkedState: boolean ) => void;

  // Optional
  /**
   * Additional CSS classes for styling the Checkbox.
   */
  className?: string;
  /**
   * Indicates whether the checkbox is initially checked.
   * 
   * @default false
   */
  isChecked?: boolean;
  /**
   * Disables the checkbox if set to true.
   * 
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Displays a loading animation, indicating a skeleton state.
   * 
   * @default false
   */
  isSkeleton?: boolean;
  /**
   * Optional link element displayed alongside the checkbox label.
   */
  link?: JSX.Element;
  /**
   * Determines whether to show the label element.
   * 
   * @default true
   */
  showLabel?: boolean;
  /**
   * Specifies the size of the Checkbox component.
   * 
   * @default 'md'
   */
  size?: TSize;
}

// EXPORTS
export type { TCheckboxProps };