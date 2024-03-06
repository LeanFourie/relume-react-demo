// IMPORTS
import type { TRadioProps } from '../../';

// TYPES
/**
* Sets the required props for the component.
*/
type TRadioGroupProps = IRadioGroup;
/**
 * Determines which props should be excluded from the radio button when used inside the group.
 */
type TRadioButtonPropsToExclude =
  | 'name'
  | 'onChange'
  | 'className'
  | 'isChecked'
  | 'isSkeleton'
  | 'showLabel'
  | 'size';

// INTERFACES
/**
 * Sets the label value of the component.
 */
interface IRadioGroup {
  // Required
  /**
   * Sets the group name value for the radio buttons.
   */
  name: TRadioProps[ 'name' ];
  /**
   * Emits the change event from the radio button group.
   * 
   * @param { boolean } checkedState - The current checked / unchecked state of the radio button.
   * @param { string } optionLabel - The value of the radio button label.
   * 
   * @returns { void } - Returns nothing.
   */
  onChange: (
    checkedState: boolean,
    optionLabel: TRadioProps[ 'name' ]
  ) => void;
  /**
   * Sets the radio button items to render
   */
  options: Omit< TRadioProps, TRadioButtonPropsToExclude >[];

  // Optional
  /**
  * Determines whether the component is disabled or not.
  * 
  * @default false
  */
  isDisabled?: TRadioProps[ 'isDisabled' ];
  /**
  * Determines whether the component is in a skeleton state or not.
  * 
  * @default false
  */
  isSkeleton?: TRadioProps[ 'isSkeleton' ];
  /**
  * Determines the size of the radio buttons.
  * 
  * @default 'md'
  */
  size?: TRadioProps[ 'size' ];
  /**
   * Renders an optional title for the radio button group.
   */
  title?: string;
}

// EXPORTS
export type { TRadioGroupProps };
