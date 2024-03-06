// IMPORTS
import type { THorizontalAlignment } from '@relume-demo/utils';
import type { TNavLinkProps } from '../../../';
import type {
  INav,
  TNavAction
} from '../nav.definitions';

// TYPES
/**
* Sets the required props for the component.
*/
type TNavLayout1Props = INavLayout1;
/**
 * Stores the available float types for the component.
 */
type TNavLayout1FloatType =
  | 'none'
  | 'half'
  | 'full';

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface INavLayout1 extends INav {
  // Required
  /**
   * Sets the action items to render on the component.
   */
  actions: TNavAction[];
  /**
   * Sets the navigation links to render on the component.
   */
  links: TNavLinkProps[];

  // Optional
  /**
   * Adds an optional class name to the component.
   */
  className?: string;
  /**
   * Sets the float type affecting how the component will fit onto the page.
   * 
   * @default 'none'
   */
  floatType?: TNavLayout1FloatType;
  /**
   * Sets the location where the link will render on the component.
   * 
   * @default 'right'
   */
  linksPosition?: THorizontalAlignment;
}

// Exports
export type { TNavLayout1Props };
