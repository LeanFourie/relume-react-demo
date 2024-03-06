// IMPORTS
import { TIconProps } from './../../base/icon/icon.definitions';

// TYPES
/**
 * Props for the ActionsListItem component.
 */
type TActionsListItemProps = IActionsListItem;

// INTERFACES
/**
 * Interface defining the required and optional props for the ActionsListItem component.
 */
interface IActionsListItem {
  // Required
  /**
   * A descriptive label for accessibility (aria-label).
   */
  accessibleLabel: string;
  /**
   * The visible label for the component.
   */
  label: string;
  /**
   * Callback function for click events on the component.
   * 
   * @returns { void } - Returns nothing.
   */
  onClick: () => void;
  
  // Optional
  /**
   * An optional leading icon for the component.
   */
  icon?: Exclude< TIconProps, 'className' >;
  /**
   * Specifies whether the component is in a disabled state.
   */
  isDisabled?: boolean;
  /**
   * Specifies whether the component is in a skeleton loading state.
   */
  isSkeleton?: boolean;
  /**
   * An optional trailing arrow icon.
   */
  showArrow?: boolean;
}

// Exports
export type { TActionsListItemProps };
