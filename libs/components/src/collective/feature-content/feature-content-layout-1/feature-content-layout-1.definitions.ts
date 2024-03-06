// IMPORTS
import type {
  IImage,
  THorizontalAlignment,
  TStackDirection
} from '@relume-demo/utils';
import type {
  TButtonProps,
  TIconProps,
  TTextProps
} from '../../../';

// TYPES
/**
 * Props for the FeatureContentLayout1 component.
 */
type TFeatureContentLayout1Props =
  | TFeatureContentLayout1Type
  | IFeatureContentLayout1WithContentBlocks
  | IFeatureContentLayout1WithLogos
  | IFeatureContentLayout1WithList
  | IFeatureContentLayout1WithIcon
  | IFeatureContentLayout1WithStats;

/**
 * Base props shared by all variants of FeatureContentLayout1.
 */
type TFeatureContentLayout1Type = Omit <IFeatureContentLayout1, 'variant' >;

/**
 * Available feature content variants.
 */
type TFeatureContentLayout1Variant =
  | 'content-blocks'
  | 'logos'
  | 'list'
  | 'icon'
  | 'stats'
  | 'default'
  | 'large';

// INTERFACES
/**
 * Default props for the FeatureContentLayout1 component.
 */
interface IFeatureContentLayout1 {
  // Required
  /**
   * Main content paragraph.
   */
  paragraph: string;
  /**
   * Main content title.
   */
  title: string;
  /**
   * Specifies the variant type to render the specific component.
   */
  variant: Extract< TFeatureContentLayout1Variant, 'default' >;

  // Optional
  /**
   * Actions to render on the component.
   */
  actions?: TButtonProps[];
  /**
   * Additional class names on the components inside the component.
   */
  classNames?: {
    actions?: string;
    container?: string;
    icon?: string;
  };
  /**
   * Overrides the default variant of the text elements.
   */
  fontVariants?: {
    /**
     * Overrides the font variant of the paragraph element.
     */
    paragraph?: TTextProps[ 'variant' ];
    /**
     * Overrides the font variant of the title element.
     */
    title?: TTextProps[ 'variant' ];
  };
  /**
   * If true, the component title will be hidden.
   */
  hideTitle?: boolean;
  /**
   * Stacking order of the content.
   * 
   * @default 'vertical'
   */
  stackDirection?: TStackDirection;
  /**
   * Content tagline.
   */
  tagline?: string;
  /**
   * Text alignment of the component.
   * 
   * @default 'left'
   */
  textAlign?: Exclude< THorizontalAlignment, 'right' >;
}

/**
 * Props for the component with content blocks.
 */
interface IFeatureContentLayout1WithContentBlocks
  extends TFeatureContentLayout1Type {
  // Required
  /**
   * Content block values to render on the component.
   */
  contentBlocks: {
    // Required
    /**
     * Values of the content blocks.
     */
    blocks: IFeatureContentLayout1ContentBlock[];

    // Optional
    /**
     * Stack order of the content.
     */
    stack?: TStackDirection;
  };
  /**
   * Specifies the variant type to render the specific component.
   */
  variant: Extract< TFeatureContentLayout1Variant, 'content-blocks' >;
}

/**
 * Props for the content block items rendered on the component.
 */
interface IFeatureContentLayout1ContentBlock {
  // Required
  /**
   * Paragraph value of the content block.
   */
  paragraph: string;
  /**
   * Title value of the content block.
   */
  title: string;

  // Optional
  /**
   * Icon value and the stack direction of the content block.
   */
  icon?: Exclude< TIconProps, 'className' >;
}

/**
 * Props for the component with customer logos.
 */
interface IFeatureContentLayout1WithLogos extends TFeatureContentLayout1Type {
  /**
   * List of client logos to render.
   */
  logos: IImage[];
  /**
   * Specifies the variant type to render the specific component.
   */
  variant: Extract< TFeatureContentLayout1Variant, 'logos' >;
}

/**
 * Props for the component with list items.
 */
interface IFeatureContentLayout1WithList extends TFeatureContentLayout1Type {
  /**
   * List items to render on the component.
   */
  items: IFeatureContentLayout1ListItem[];
  /**
   * Specifies the variant type to render the specific component.
   */
  variant: Extract< TFeatureContentLayout1Variant, 'list' >;
}

/**
 * Props for the list items rendered on the component.
 */
interface IFeatureContentLayout1ListItem {
  // Required
  /**
   * Text value to render for the item.
   */
  value: string;

  // Optional
  /**
   * Icon component to render at the start of the list item.
   */
  icon?: Exclude< TIconProps, 'className' >;
}

/**
 * Props for the component with an icon.
 */
interface IFeatureContentLayout1WithIcon extends TFeatureContentLayout1Type {
  /**
   * Icon component props to render on the main component.
   */
  icon: Exclude< TIconProps, 'className' >;
  /**
   * Specifies the variant type to render the specific component.
   */
  variant: Extract< TFeatureContentLayout1Variant, 'icon' >;
}

/**
 * Props for the component with statistics.
 */
interface IFeatureContentLayout1WithStats extends TFeatureContentLayout1Type {
  /**
   * List of stats items to render on the component.
   */
  stats: IFeatureContentLayout1StatsItem[];
  /**
   * Specifies the variant type to render the specific component.
   */
  variant: Extract< TFeatureContentLayout1Variant, 'stats' >;
}

/**
 * Props for the stats items rendered on the component.
 */
interface IFeatureContentLayout1StatsItem {
  /**
   * Stat description value to render.
   */
  description: string;
  /**
   * Stat number value to render.
   */
  value: string;
}

// EXPORTS
export type {
  IFeatureContentLayout1,
  IFeatureContentLayout1WithContentBlocks,
  IFeatureContentLayout1WithIcon,
  IFeatureContentLayout1WithList,
  IFeatureContentLayout1WithLogos,
  IFeatureContentLayout1WithStats,
  TFeatureContentLayout1Props,
  TFeatureContentLayout1Variant
};