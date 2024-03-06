// IMPORTS
import { IMenuFull } from '../menu-full.definitions';

// TYPES
/**
* Sets the required props for the component.
*/
type TMenuFullLayout7Props = IMenuFullLayout7;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface IMenuFullLayout7 extends Omit< IMenuFull, 'contactUrl' > {
  /**
   * Sets the address on the menu.
   */
  address: string;
  /**
   * Sets the props required for the contact form on the component.
   */
  contactForm: IMenuFullContactForm;
  /**
   * Sets the contact number and contact number link value on the menu.
   */
  contactNumber: string;
  /**
   * Sets the email address and email address link value on the menu.
   */
  email: string;
}

/**
* Sets the props required for the contact form on the component.
*/
interface IMenuFullContactForm {
  /**
   * Emits the form field values form the contact form.
   */
  onSubmit: ( fields: IMenuFullContactFormFields ) => void;
  /**
   * Sets the paragraph value to render on the form.
   */
  paragraph: string;
  /**
   * Sets url to which the user will be redirected to when the user clicks the legal link.
   */
  termsLinkUrl: string;
  /**
   * Sets the title value to render on the form.
   */
  title: string;
}

/**
* Sets the param values emitted from the form.
*/
interface IMenuFullContactFormFields {
  /**
   * A boolean value determining whether the user accepted the terms and conditions.
   */
  acceptedTerms: boolean;
  /**
   * A string value containing the users email address.
   */
  email: string;
  /**
   * A string value containing the users message.
   */
  message: string;
  /**
   * A string value containing the users full name.
   */
  name: string;
}

// EXPORTS
export type { TMenuFullLayout7Props };
