// IMPORTS
import type { TActionsListItemProps } from '../../';

// TYPES
/**
* Sets the required props for the component.
*/
type TActionsListProps = IActionsList;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface IActionsList {
  // Required
  /**
  * Sets the items to render inside the component.
  */
  options: Omit<
    TActionsListItemProps,
    'isSkeleton' | 'showArrow'
  >[];
  
  // Optional
  /**
  * Adds optional classes to the component.
  */
  className?: string;
  /**
  * Determines whether the component is in a skeleton loading state or not.
  * 
  * @default false
  */
  isSkeleton?: boolean;
  /**
  * Renders an optional trailing arrow icon on the list items.
  * 
  * @default false
  */
  showArrow?: boolean;
}

// Exports
export type { TActionsListProps };
