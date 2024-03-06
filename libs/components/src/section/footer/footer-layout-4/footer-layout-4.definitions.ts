// IMPORTS
import type {
  IFooter,
  IFooterLink
} from '../footer.definitions';

// TYPES
/**
* Sets the required props for the component.
*/
type TFooterLayout4Props = IFooterLayout4;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface IFooterLayout4 extends IFooter {
  /**
   * Sets the link items to render on the component.
   */
  links: IFooterLink[];
}

// EXPORTS
export type { TFooterLayout4Props };
