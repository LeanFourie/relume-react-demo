// TYPES
// Size
/**
 * Controls the sizing of elements
 */
type TSize = 'sm' | 'md' | 'lg';
/**
 * Adds additional sizing options for elements
 */
type TSizeExtended = 'xs' | TSize | 'xl';
/**
 * Stores the friendly names for sizes
 */
type TSizeFriendlyNames = 'tiny' | 'small' | 'regular' |
                          'medium' | 'large' | 'extra-large';

// Alignment
/**
 * Controls the horizontal alignment values available
 */
type THorizontalAlignment = 'left' | 'center' | 'right';
/**
 * Controls the vertical alignment values available
 */
type TVerticalAlignment = 'top' | 'center' | 'bottom';
/**
 * Controls the stack order values available
 */
type TStackDirection = 'vertical' | 'horizontal';

// Text
/**
 * Stores the type of HTML text elements available to render
 */
type TTextElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' |
                    'p' | 'caption' | 'label' | 'span';

// Color
/**
 * Controls the theme color types
 */
type TThemeColor = 'primary' | 'secondary' | 'tertiary';
/**
 * Controls the support color types
 */
type TSupportColor = 'support-1' | 'support-2' | 'support-3';
/**
 * Controls the senmantic color types
 */
type TSemanticColor = 'info' | 'success' | 'warning' | 'danger';
/**
 * Controls the neutral color types
 */
type TNeutralColor = 'black' | 'white' | 'grey';
/**
 * Controls the system color types
 */
type TSystemColor = 'base' | 'invert';
/**
 * Controls the color types available
 */
type TColor = TThemeColor | TSupportColor | TSemanticColor | TNeutralColor | TSystemColor;

// Shade
/**
 * Controls the shade types available
 */
type TShade = 'light' | 'dark';

// State
/**
 * Controls the sematic states available
 */
type TState = 'default' | TSemanticColor

// UI Variants
/**
 * Controls the UI variant types that are available
 */
type TUiVariant = 'filled' | 'outlined' | 'ghost';

// Numbers
/**
 * Controls the available single digit values
 */
type TSingleValueNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

// Socials
/**
 * Stires the list of social media platform names
 */
type TSocialLink =  'linkedin' | 'x' | 'facebook' | 'instagram' |
                    'youtube' | 'pinterest' | 'tiktok';

// Order
/**
 * Controls the display order of elements
 */
type TOrder = 'default' | 'reverse';

// EXPORTS
export type {
  TColor,
  THorizontalAlignment,
  TNeutralColor,
  TOrder,
  TSemanticColor,
  TShade,
  TSingleValueNumber,
  TSize,
  TSizeExtended,
  TSizeFriendlyNames,
  TSocialLink,
  TStackDirection,
  TState,
  TSupportColor,
  TSystemColor,
  TTextElement,
  TThemeColor,
  TUiVariant,
  TVerticalAlignment
};
