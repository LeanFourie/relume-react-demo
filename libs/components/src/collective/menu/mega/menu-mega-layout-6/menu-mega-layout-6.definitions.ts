// IMPORTS
import type {
  IMenuMega,
  IMenuMegaFeaturedLink
} from '../menu-mega.definitions';

// TYPES
/**
* Sets the required props for the component.
*/
type TMenuMegaLayout6Props = IMenuMegaLayout6;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface IMenuMegaLayout6 extends IMenuMega {
  /**
   * The props required for feature links to be rendered.
   */
  featuredLinks: IMenuMegaFeaturedLink[];
}

// EXPORTS
export type { TMenuMegaLayout6Props };
