// IMPORTS
import type {
  IImage,
  THorizontalAlignment,
  TStackDirection
} from '@relume-demo/utils';
import type {
  IButtonText,
  TButtonProps,
  TIconProps,
  TTextProps
} from '../../../';

// TYPES
/**
* Sets the required props for the component.
*/
type TFeatureContentLayout2Props =  IFeatureContentLayout2;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface IFeatureContentLayout2 {
  // Required
  /**
   * Sets the content block values to render on the component.
   */
  contentBlocks: (
    IFeatureContentLayout2ContentBlock |
    IFeatureContentLayout2ContentBlockWithImage
  )[];

  // Optional
  /**
   * Sets the actions to render on the component.
   */
  actions?: Exclude< TButtonProps, 'className' >[];
  /**
   * Determines how the actions should align with the content.
   */
  alignActions?: Omit<
    THorizontalAlignment,
    'right'
  >;
  /**
   * Sets additional class names on the components inside the component.
   */
  classNames?: {
    actions?: string;
    block?: string;
    blocks?: string;
    icon?: string;
    text?: string;
  }
  /**
   * Overwrites the default variant of the text elements.
   */
  fontVariants?: {
    title?: TTextProps[ 'variant' ];
  };
  /**
   * Sets the maximum columns to 2 when the content is horizontally stacked.
   * 
   * @default true
   */
  maxColumns?: boolean;
  /**
   * Sets the stack order of the content.
   * 
   * @default 'vertical'
   */
  stack?: TStackDirection;
}

/**
 * Sets the required props on the content block items rendered on the component.
 */
interface IFeatureContentLayout2ContentBlock {
  /**
   * Sets the icon props of the content block.
   */
  icon: Exclude< TIconProps, 'className' >;
  /**
   * Sets the paragraph value of the content block.
   */
  paragraph: string;
  /**
   * Sets the value title of the content block.
   */
  title: string;

  // Optional
  /**
   * Renders an optional  button below the text of the content block.
   */
  action?: Omit<
    IButtonText,
    'className' | 'leadingIcon' | 'size' | 'trailingIcon' | 'type' | 'variant'
  >;
}

/**
 * Sets the required props on the content block items with images rendered on the component.
 */
interface IFeatureContentLayout2ContentBlockWithImage extends Omit<
  IFeatureContentLayout2ContentBlock,
  'icon'
> {
  /**
   * Sets the image props of the content block.
   */
  image: IImage;
}

// EXPORTS
export type {
  IFeatureContentLayout2ContentBlock,
  TFeatureContentLayout2Props
};
