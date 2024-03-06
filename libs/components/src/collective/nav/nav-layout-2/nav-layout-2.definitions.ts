// IMPORTS
import type {
  INav,
  TNavAction
} from '../nav.definitions';

// TYPES
/**
* Sets the required props for the component
*/
type TNavLayout2Props = INavLayout2;

// INTERFACES
/**
* Sets the default required props for the component
*/
interface INavLayout2 extends INav {
  // Required
  /**
   * Sets the action items to render on the component
   */
  actions: TNavAction[];

  // Optional
  /**
   * Adds an optional class name to the component
   */
  className?: string;
}

// Exports
export type { TNavLayout2Props };
