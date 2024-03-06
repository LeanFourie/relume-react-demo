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
type TCtaBannerLayout2Props =
  | TCtaBannerLayout2Default
  | TCtaBannerLayout2WithImage
  | TCtaBannerLayout2WithVideo
  | TCtaBannerLayout2WithBackground;
/**
* Determines the types available to render for the default layout.
*/
type TCtaBannerLayout2Default =
  | ICtaBannerLayout2WithActions
  | ICtaBannerLayout2WithForm;
/**
* Determines the types available to render for the layout with an image.
*/
type TCtaBannerLayout2WithImage =
  | ICtaBannerLayout2WithActionsAndImage
  | ICtaBannerLayout2WithFormAndImage;
/**
* Determines the types available to render for the layout with a video.
*/
type TCtaBannerLayout2WithVideo =
  | ICtaBannerLayout2WithActionsAndVideo
  | ICtaBannerLayout2WithFormAndVideo;
/**
* Determines the types available to render for the layout with a custom background.
*/
type TCtaBannerLayout2WithBackground =
  | ICtaBannerLayout2WithActionsAndBackground
  | ICtaBannerLayout2WithFormAndBackground;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface ICtaBannerLayout2 {
  // Required
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
interface ICtaBannerLayout2WithActions extends ICtaBannerLayout2 {
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
interface ICtaBannerLayout2WithActionsAndImage extends ICtaBannerLayout2WithActions, ISectionWithImage {}
/**
 * Sets the required props for the component rendered with buttons and a video.
*/
interface ICtaBannerLayout2WithActionsAndVideo extends ICtaBannerLayout2WithActions, Omit<
  ISectionWithVideo,
  'autoPlay' | 'coverImageUri'
> {}
/**
 * Sets the required props for the component rendered with buttons and a custom background.
*/
interface ICtaBannerLayout2WithActionsAndBackground extends ICtaBannerLayout2WithActions, ISectionWithCustomBackground {}

/**
* Sets the required props for the component rendered with a form.
*/
interface ICtaBannerLayout2WithForm extends ICtaBannerLayout2 {
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
interface ICtaBannerLayout2WithFormAndImage extends ICtaBannerLayout2WithForm, ISectionWithImage {}
/**
* Sets the required props for the component rendered with a form and a video.
*/
interface ICtaBannerLayout2WithFormAndVideo extends ICtaBannerLayout2WithForm, Omit<
  ISectionWithVideo,
  'autoPlay' | 'coverImageUri'
> {}
/**
* Sets the required props for the component rendered with a form and a custom background.
*/
interface ICtaBannerLayout2WithFormAndBackground extends ICtaBannerLayout2WithForm, ISectionWithCustomBackground {}

// EXPORTS
export type { TCtaBannerLayout2Props };
