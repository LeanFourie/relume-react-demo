// IMPORTS
import type {
  IFooter,
  IFooterLink
} from '../footer.definitions';

// TYPES
/**
* Sets the required props for the component.
*/
type TFooterLayout8Props = IFooterLayout8;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface IFooterLayout8 extends IFooter {
  /**
   * Sets the link items to render on the component.
   */
  links: IFooterLink[];
  /**
   * Sets the newsletter form props.
   */
  newsletter: {
    /**
     * The email address value emitted with the submit event.
     * 
     * @param { string } emailAddress - The email address value filled into the newsletter input.
     * 
     * @returns { void } Returns nothing.
     */
    onSubmit: ( emailAddress: string ) => void;
    /**
     * The title to render with the form.
     */
    title: string;
  };
}

// EXPORTS
export type { TFooterLayout8Props };
