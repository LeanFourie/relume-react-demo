// IMPORTS
import type {
  THorizontalAlignment,
  TSizeFriendlyNames
} from '@relume-demo/utils';

// TYPES
/**
 * The available font styles for text.
 */
type TFontStyle =
  | 'italic'
  | 'unset';

/**
 * The available font weights for text.
 */
type TFontWeight =
  | 'thin'
  | 'extra-light'
  | 'light'
  | 'regular'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extra-bold'
  | 'black';
/**
 * The available types for text.
 */
type TTextType =
  | 'heading'
  | 'text';
/**
 * The available variants for text.
 */
type TTextVariant = `${ TTextType } ${ TSizeFriendlyNames }`;
/**
 * The available special tag values for text.
 */
type TSpecialTag =
  | 'span'
  | 'label'
  | 'caption';
/**
 * The available text transform properties for text.
 */
type TTextTransform =
  | 'uppercase'
  | 'lowercase'
  | 'unset';
/**
 * Sets the required props for the text component.
 */
type TTextProps = IText;

// INTERFACES
/**
 * Defines the optional and required props for the text component.
 */
interface IText {
  // Optional
  /**
   * Additional classes to be applied to the component.
   */
  className?: string;
  /**
   * The font style for the text.
   * 
   * @default 'unset'
   */
  fontStyle?: TFontStyle;
  /**
   * The font weight for the text.
   * 
   * @default 'regular'
   */
  fontWeight?: TFontWeight;
  /**
   * Indicates if the text is editable.
   * 
   * @default false
   */
  isEditable?: boolean;
  /**
   * Indicates if the component should render in a skeleton state.
   * 
   * @default false
   */
  isSkeleton?: boolean;
  /**
   * Overrides the default HTML tag while maintaining styling options.
   */
  renderAs?: TSpecialTag;
  /**
   * The horizontal alignment of the text.
   * 
   * @default 'left'
   */
  textAlign?: THorizontalAlignment;
  /**
   * The text transformation to be applied.
   * 
   * @default 'unset'
   */
  textTransform?: TTextTransform;
  /**
   * The text variant, which includes type and size.
   * 
   * @default 'text regular'
   */
  variant?: TTextVariant;
}

// EXPORTS
export type { TTextProps };