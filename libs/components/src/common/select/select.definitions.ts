// IMPORTS
import type {
  TActionsListItemProps,
  IInputText
} from '../../';

// TYPES
/**
* Sets the required props for the component.
*/
type TSelectProps = ISelect;
/**
 * Determines which props should be excluded from the input when extending ot to create the dropdown.
 */
type TInputPropsToExclude =
  | 'autoComplete'
  | 'maxLength'
  | 'minLength'
  | 'numbersOnly'
  | 'type';

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface ISelect extends Omit< IInputText, TInputPropsToExclude > {
  /**
   * Stores the lst of options to for the select dropdown.
   */
  options: TActionsListItemProps[ 'label' ][];
}

// EXPORTS
export type { TSelectProps };
