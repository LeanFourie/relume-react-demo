// IMPORTS
import {
  TButtonProps,
  TIconProps
} from '../../';

// TYPES
/**
* Sets the required props for the component.
*/
type TJobCardProps = IJobCard;

/**
 * Determines the type of additional classnames that can be added to inner components.
 */
type TClassNameTypes = 'card' | 'header' | 'body';

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface IJobCard {
  // Required
  /**
   * Sets the value for the contract type.
   */
  contractType: IJobCardDetail;
  /**
   * Sets the description text value.
   */
  description: string;
  /**
   * Sets the value for the job location.
   */
  location: IJobCardDetail;
  /**
   * Sets the job role text value.
   */
  role: string;

  // Optional
  /**
   * Sets the props required for the "Apply for position" action.
   */
  action?: Exclude<
    TButtonProps,
    'classNames'
  >;
  /**
   * Sets additional classes to inner components.
   */
  classNames?: { [ key in TClassNameTypes ]?: string };
  /**
   * Sets the text value for the department.
   */
  department?: string;
}

/**
* Sets the required props for the job card details items.
*/
interface IJobCardDetail {
  /**
   * Sets the icon props on the details item.
   */
  icon: Exclude<
    TIconProps,
    'classNames'
  >;
  /**
   * Sets label value for the details item.
   */
  label: string;
}

// EXPORTS
export type { TJobCardProps };
