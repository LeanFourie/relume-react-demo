// IMPORTS
import type {
  ISectionWithCustomBackground,
  ISectionWithImage,
  ISectionWithVideo
} from '@relume-demo/utils';
import type { TButtonProps } from '../../../';

// TYPES
/**
* Sets the required props for the component.
*/
type TCtaBannerLayout3Props =
  | TCtaBannerLayout3Default
  | TCtaBannerLayout3WithImage
  | TCtaBannerLayout3WithVideo
  | TCtaBannerLayout3WithBackground;
/**
* Determines the types available to render for the default layout.
*/
type TCtaBannerLayout3Default =
  | ICtaBannerLayout3WithActions
  | ICtaBannerLayout3WithForm;
/**
* Determines the types available to render for the layout with an image.
*/
type TCtaBannerLayout3WithImage =
  | ICtaBannerLayout3WithActionsAndImage
  | ICtaBannerLayout3WithFormAndImage;
/**
* Determines the types available to render for the layout with a video.
*/
type TCtaBannerLayout3WithVideo =
  | ICtaBannerLayout3WithActionsAndVideo
  | ICtaBannerLayout3WithFormAndVideo;
/**
* Determines the types available to render for the layout with a custom background.
*/
type TCtaBannerLayout3WithBackground =
  | ICtaBannerLayout3WithActionsAndBackground
  | ICtaBannerLayout3WithFormAndBackground;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface ICtaBannerLayout3 {
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
interface ICtaBannerLayout3WithActions extends ICtaBannerLayout3 {
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
 * Sets the required props for the component rendered with buttons and an image.
*/
interface ICtaBannerLayout3WithActionsAndImage extends ICtaBannerLayout3WithActions, ISectionWithImage {}
/**
 * Sets the required props for the component rendered with buttons and a video.
*/
interface ICtaBannerLayout3WithActionsAndVideo extends ICtaBannerLayout3WithActions, Omit<
  ISectionWithVideo,
  'autoPlay' | 'coverImageUri'
> {}
/**
 * Sets the required props for the component rendered with buttons and a custom background.
*/
interface ICtaBannerLayout3WithActionsAndBackground extends ICtaBannerLayout3WithActions, ISectionWithCustomBackground {}

/**
* Sets the required props for the component rendered with a form.
*/
interface ICtaBannerLayout3WithForm extends ICtaBannerLayout3 {
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
/**
* Sets the required props for the component rendered with a form and an image.
*/
interface ICtaBannerLayout3WithFormAndImage extends ICtaBannerLayout3WithForm, ISectionWithImage {}
/**
* Sets the required props for the component rendered with a form and a video.
*/
interface ICtaBannerLayout3WithFormAndVideo extends ICtaBannerLayout3WithForm, Omit<
  ISectionWithVideo,
  'autoPlay' | 'coverImageUri'
> {}
/**
* Sets the required props for the component rendered with a form and a custom background.
*/
interface ICtaBannerLayout3WithFormAndBackground extends ICtaBannerLayout3WithForm, ISectionWithCustomBackground {}

// EXPORTS
export type { TCtaBannerLayout3Props };
