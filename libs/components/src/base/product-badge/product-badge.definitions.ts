// IMPORTS
import type {
  IProductBadgeBase,
  TSize,
  TUiVariant
} from '@relume-demo/utils';
import type { TIconProps } from './../icon/icon.definitions';

// TYPES
/**
 * Defines the required props for the Product Badge component.
 */
type TProductBadgeProps = IProductBadge;

// INTERFACES
/**
 * Defines the default required props for the Product Badge component.
 */
interface IProductBadge extends IProductBadgeBase {
  // Optional
  /**
   * Additional classes for styling the badge.
   */
  className?: string;
  /**
   * Additional classes for styling the component host.
   */
  hostClassName?: string;
  /**
   * An optional leading icon for the badge.
   */
  icon?: Exclude< TIconProps, 'className' >;
  /**
   * Determines whether the badge is in a skeleton state or not.
   * 
   * @default false
   */
  isSkeleton?: boolean;
  /**
   * Specifies the size of the badge.
   * 
   * @default 'md'
   */
  size?: TSize;
  /**
   * Specifies the UI variant of the badge.
   * 
   * @default 'filled'
   */
  variant?: Exclude< TUiVariant, 'ghost' >;
}

// EXPORTS
export type { TProductBadgeProps };
