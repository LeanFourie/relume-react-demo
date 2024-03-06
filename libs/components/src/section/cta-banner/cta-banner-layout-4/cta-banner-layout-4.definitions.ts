// IMPORTS
import type {
  ISectionWithCustomBackground,
  ISectionWithImage,
  ISectionWithVideo,
  THorizontalAlignment
} from '@relume-demo/utils';
import { TButtonProps } from '../../../';

// TYPES
/**
* Sets the required props for the component.
*/
type TCtaBannerLayout4Props =
  | TCtaBannerLayout4Default
  | TCtaBannerLayout4WithImage
  | TCtaBannerLayout4WithVideo
  | TCtaBannerLayout4WithBackground;
/**
* Determines the types available to render for the default layout.
*/
type TCtaBannerLayout4Default =
  | ICtaBannerLayout4WithActions
  | ICtaBannerLayout4WithForm;
/**
* Determines the types available to render for the layout with an image.
*/
type TCtaBannerLayout4WithImage =
  | ICtaBannerLayout4WithActionsAndImage
  | ICtaBannerLayout4WithFormAndImage;
/**
* Determines the types available to render for the layout with a video.
*/
type TCtaBannerLayout4WithVideo =
  | ICtaBannerLayout4WithActionsAndVideo
  | ICtaBannerLayout4WithFormAndVideo;
/**
* Determines the types available to render for the layout with a custom background.
*/
type TCtaBannerLayout4WithBackground =
  | ICtaBannerLayout4WithActionsAndBackground
  | ICtaBannerLayout4WithFormAndBackground;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface ICtaBannerLayout4 {
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
interface ICtaBannerLayout4WithActions extends ICtaBannerLayout4 {
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
interface ICtaBannerLayout4WithActionsAndImage extends ICtaBannerLayout4WithActions, ISectionWithImage {}
/**
* Sets the required props for the component rendered with buttons and a video.
*/
interface ICtaBannerLayout4WithActionsAndVideo extends ICtaBannerLayout4WithActions, Omit<
  ISectionWithVideo,
  'autoPlay' | 'coverImageUri'
> {}
/**
* Sets the required props for the component rendered with buttons and a custom background.
*/
interface ICtaBannerLayout4WithActionsAndBackground extends ICtaBannerLayout4WithActions, ISectionWithCustomBackground {}

/**
* Sets the required props for the component rendered with a form.
*/
interface ICtaBannerLayout4WithForm extends ICtaBannerLayout4 {
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
interface ICtaBannerLayout4WithFormAndImage extends ICtaBannerLayout4WithForm, ISectionWithImage {}
/**
* Sets the required props for the component rendered with a form and a video.
*/
interface ICtaBannerLayout4WithFormAndVideo extends ICtaBannerLayout4WithForm, Omit<
  ISectionWithVideo,
  'autoPlay' | 'coverImageUri'
> {}
/**
* Sets the required props for the component rendered with a form and a custom background.
*/
interface ICtaBannerLayout4WithFormAndBackground extends ICtaBannerLayout4WithForm, ISectionWithCustomBackground {}

// EXPORTS
export type { TCtaBannerLayout4Props };
