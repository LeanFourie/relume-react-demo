// IMPORTS
import type { IImage } from '@relume-demo/utils';
import type { TButtonProps } from '../../../';

// TYPES
/**
* Sets the required props for the component.
*/
type TCtaBannerLayout5Props =
  | ICtaBannerLayout5WithActions
  | ICtaBannerLayout5WithForm;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface ICtaBannerLayout5 {
  // Required
  /**
   * Sets the prop values required for the image to render.
   */
  image: IImage;
  /**
   * Sets the paragraph string value to render on the main text content block.
   */
  paragraph: string;
  /**
   * Sets the title string value to render on the main text content block.
   */
  title: string;

  // Optional
  /**
   * If set to true, a stroke will be added around the component.
   * 
   * @default false
   */
  isOutlined?: boolean;
}

/**
* Sets the required props for the component rendered with buttons.
*/
interface ICtaBannerLayout5WithActions extends ICtaBannerLayout5 {
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
interface ICtaBannerLayout5WithForm extends ICtaBannerLayout5 {
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
export type { TCtaBannerLayout5Props };
