// IMPORTS
import type {
  TColor,
  TShade,
  TSize,
  TSupportColor,
  TUiVariant
} from '@relume-demo/utils';
import type { TIconProps } from './../icon/icon.definitions';

// TYPES
/**
 * Props for the Badge component.
 */
type TBadgeProps = IBadge;

// INTERFACES
/**
 * Defines the default required and optional props for the Badge component.
 */
interface IBadge {
  // Required
  /**
   * The primary content to be displayed within the Badge. Typically, a short text label.
   */
  label: string;

  // Optional
  /**
   * Additional CSS classes to be applied to the Badge element.
   */
  className?: string;
  /**
   * Specifies the color scheme of the Badge.
   * 
   * @default 'primary'
   */
  color?: Exclude< 
    TColor,
    'tertiary' | TSupportColor
  >;
  /**
   * Additional CSS classes to be applied to the container hosting the Badge.
   */
  hostClassName?: string;

  /**
   * An optional leading icon displayed alongside the label within the Badge.
   */
  icon?: Exclude< TIconProps, 'className' >;
  /**
   * Determines whether the Badge is in a skeleton loading state, displaying a loading animation.
   * 
   * @default false
   */
  isSkeleton?: boolean;
  /**
   * Specifies the visual shade of the Badge.
   * 
   * @default 'dark'
   */
  shade?: TShade;
  /**
   * Specifies the size of the Badge.
   * 
   * @default 'md'
   */
  size?: TSize;
  /**
   * Specifies the visual variant of the Badge.
   * 
   * @default 'filled'
   */
  variant?: Exclude< TUiVariant, 'ghost' >;
}

// EXPORTS
export type { TBadgeProps };
