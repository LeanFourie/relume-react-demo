// IMPORTS
import type {
  IFooter,
  IFooterLinkGroup
} from '../footer.definitions';

// TYPES
/**
* Sets the required props for the component.
*/
type TFooterLayout3Props = IFooterLayout3;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface IFooterLayout3 extends IFooter {
  /**
   * The company physical address to render.
   */
  address: string;
  /**
   * The company contact number to render.
   */
  contactNumber: string;
  /**
   * The company email address to render.
   */
  emailAddress: string;
  /**
   * Sets the link items to render on the component.
   */
  links: IFooterLinkGroup[];
}

// EXPORTS
export type { TFooterLayout3Props };
