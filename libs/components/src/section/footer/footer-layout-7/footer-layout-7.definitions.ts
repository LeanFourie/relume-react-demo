// IMPORTS
import type {
  IFooter,
  IFooterLink
} from '../footer.definitions';

// TYPES
/**
* Sets the required props for the component.
*/
type TFooterLayout7Props = IFooterLayout7;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface IFooterLayout7 extends Omit< IFooter, 'socials' > {
  /**
   * Sets the link items to render on the component.
   */
  links: IFooterLink[];
}

// EXPORTS
export type { TFooterLayout7Props };
