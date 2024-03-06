// IMPORTS
import type { IMenuFull } from '../menu-full.definitions';

// TYPES
/**
* Sets the required props for the component.
*/
type TMenuFullLayout5Props = IMenuFullLayout5;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface IMenuFullLayout5 extends Omit< IMenuFull, 'contactUrl' > {
  /**
   * Sets the address on the menu.
   */
  address: string;
  /**
   * Sets the contact number and contact number link value on the menu.
   */
  contactNumber: string;
  /**
   * Sets the email address and email address link value on the menu.
   */
  email: string;
  /**
   * Sets the newsletter form props on the menu.
   */
  newsletter: IMenuFullNewsletterForm;
}

/**
* Sets the required props for the component newsletter.
*/
interface IMenuFullNewsletterForm {
  /**
   * Sets the message value to render on the form.
   */
  message: string;
  /**
   * Emits the email address form the component.
   */
  onSubmit: ( emailAddress: string ) => void;
  /**
   * Sets the title value to render on the form.
   */
  title: string;
}

// EXPORTS
export type { TMenuFullLayout5Props };
