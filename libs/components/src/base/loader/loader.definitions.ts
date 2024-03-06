// IMPORTS
import type {
  TColor,
  TShade,
  TSize
} from '@relume-demo/utils';

// TYPES
/**
 * Defines the possible props for the Loader component, including different loader types.
 */
type TLoaderProps =
  | ILoaderDots
  | ILoaderCircle;

/**
 * Represents distinct types of loaders, such as 'dots' or 'circle'.
 */
type TLoaderTypes =
  | 'dots'
  | 'circle';

// INTERFACES
/**
 * Common properties shared by all Loader components.
 */
interface ILoader {
  // Optional
  /**
   * Additional CSS classes for styling the loader.
   */
  className?: string;
  /**
   * Color scheme for the loader.
   * 
   * @default 'primary'
   */
  color?: TColor;
  /**
   * Adjusts the visual shade of the loader.
   * 
   * @default 'dark'
   */
  shade?: TShade;
  /**
   * Size of the loader.
   * 
   * @default 'md'
   */
  size?: TSize;
}

/**
 * Properties specific to the dots loader component.
 */
interface ILoaderDots extends ILoader {
  // Required
  /**
   * Specifies the loader type as 'dots'.
   */
  type: Extract< TLoaderTypes, 'dots' >;
}

/**
 * Properties required for the circle loader component.
 */
interface ILoaderCircle extends ILoader {
  // Required
  /**
   * Specifies the loader type as 'circle'.
   */
  type: Extract< TLoaderTypes, 'circle' >;
}

/**
 * Properties shared by various child components within the loader.
 */
interface ILoaderChild {
  /**
   * Base CSS class name for styling purposes.
   */
  baseClass: string;
  /**
   * Base height used as a reference for different size variations.
   */
  baseHeight: number;
}

// EXPORTS
export type {
  ILoaderChild,
  TLoaderProps
};