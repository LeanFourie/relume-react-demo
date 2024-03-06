// IMPORTS
import type { IImage } from '@relume-demo/utils';
import type { TButtonProps } from '../../../';

// TYPES
/**
* Sets the required props for the component.
*/
type TCtaBannerLayout6Props =
  | ICtaBannerLayout6WithActions
  | ICtaBannerLayout6WithForm;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface ICtaBannerLayout6 {
  /**
   * Renders a list of client logos.
   */
  logos: IImage[];
  /**
   * Sets the paragraph string value to render on the main text content block.
   */
  paragraph: string;
  /**
   * Sets the title string value to render on the main text content block.
   */
  title: string;
}

/**
* Sets the required props for the component rendered with buttons.
*/
interface ICtaBannerLayout6WithActions extends ICtaBannerLayout6 {
  /**
   * Renders a list of buttons below the text content on the component.
   */
  actions: Exclude< TButtonProps, 'className' >[];
  /**
   * Sets the component type to `with actions` in order to correctly render the buttons on the component.
   */
  type: 'with actions';
}

/**
* Sets the required props for the component rendered with a form.
*/
interface ICtaBannerLayout6WithForm extends ICtaBannerLayout6 {
  /**
   * The message string value rendered below the form.
   */
  formMessage: string;
  /**
   * A callback function that emits the email address value form the form inout when the form button is clicked.
   * 
   * @param { string } emailAddress - The email address value form the form input.
   * 
   * @returns { void } - Returns nothing.
   */
  onFormSubmit: ( emailAddress: string ) => void;
  /**
   * Sets the component type to `with form` in order to correctly render the form.
   */
  type: 'with form';
}

// EXPORTS
export type { TCtaBannerLayout6Props };
