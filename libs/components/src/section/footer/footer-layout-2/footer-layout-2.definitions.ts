// IMPORTS
import type {
  IFooter,
  IFooterLinkGroupWithTitle
} from '../footer.definitions';

// TYPES
/**
* Sets the required props for the component.
*/
type TFooterLayout2Props = IFooterLayout2;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface IFooterLayout2 extends IFooter {
  /**
   * Sets the link items to render on the component.
   */
  links: IFooterLinkGroupWithTitle[];
  /**
   * Sets the newsletter form props.
   */
  newsletter: {
    /**
     * The description to render with the form.
     */
    description: string;
    /**
     * A callback function emitting the email address from the input field.
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
export type { TFooterLayout2Props };
