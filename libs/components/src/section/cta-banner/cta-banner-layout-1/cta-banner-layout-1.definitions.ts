// IMPORTS
import type {
  IImage,
  THorizontalAlignment
} from '@relume-demo/utils';
import type { TButtonProps } from '../../../';

// TYPES
/**
* Sets the required props for the component.
*/
type TCtaBannerLayout1Props =
  | ICtaBannerLayout1WithActions
  | ICtaBannerLayout1WithForm;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface ICtaBannerLayout1 {
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
   * If set to true, the text content will be split into two columns instead of one.
   * 
   * @default false
   */
  splitContent?: boolean;
  /**
   * Determines the alignment of the text and content.
   * 
   * @default 'left'
   */
  textAlign?: Exclude< THorizontalAlignment, 'right' >;
}

/**
* Sets the required props for the component rendered with buttons.
*/
interface ICtaBannerLayout1WithActions extends ICtaBannerLayout1 {
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
interface ICtaBannerLayout1WithForm extends ICtaBannerLayout1 {
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
export type { TCtaBannerLayout1Props };
