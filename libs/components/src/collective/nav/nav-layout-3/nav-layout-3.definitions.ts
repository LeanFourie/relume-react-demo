// IMPORTS
import type { TNavLinkProps } from '../../../';
import type { TNavAction } from '../nav.definitions';

// TYPES
/**
* Sets the required props for the component
*/
type TNavLayout3Props = INavLayout3;

// INTERFACES
/**
* Sets the default required props for the component
*/
interface INavLayout3 {
  // Required
  /**
   * Sets the action items to render on the component
   */
  actions: TNavAction[];
  /**
   * Sets the navigation links to render on the component
   */
  links: TNavLinkProps[];

  // Optional
  /**
   * Adds an optional class name to the component
   */
  className?: string;
}

// Exports
export type { TNavLayout3Props };
