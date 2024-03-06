// IMPORTS
import type { TState } from '@relume-demo/utils';
import type { TIconProps } from '../icon/icon.definitions';

// TYPES
/**
 * Defines the properties required for the Helper Text component.
 */
type THelperTextProps = IHelperText;

// INTERFACES
/**
 * Represents the base properties required for the Helper Text component.
 */
interface IHelperText {
  // Optional
  /**
   * Adds optional CSS classes to the Helper Text component.
   */
  className?: string;
  /**
   * Adds an optional leading icon to the Helper Text.
   */
  icon?: Exclude< TIconProps, 'className' >;
  /**
   * Determines whether the Helper Text is in a skeleton state or not.
   * 
   * @default false
   */
  isSkeleton?: boolean;
  /**
   * Determines the semantic state of the Helper Text.
   * 
   * @default 'default'
   */
  state?: TState;
}

// EXPORTS
export type { THelperTextProps };