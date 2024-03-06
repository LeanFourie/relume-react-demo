// IMPORTS
import type {
  TColor,
  TShade,
  TSize,
  TStackDirection,
  TState,
  TUiVariant
} from '../';

// VARIABLES
/**
 * Stores the available size options
 */
const sizeOptions: TSize[] = [
  'sm',
  'md',
  'lg'
];
/**
 * Stores the available shade options
 */
const shadeOptions: TShade[] = [
  'light',
  'dark'
];
/**
 * Stores the available UI variant options
 */
const uiVariantOptions: TUiVariant[] = [
  'filled',
  'outlined',
  'ghost'
];
/**
 * Stores the available sematic state options
 */
const stateOptions: TState[] = [
  'default',
  'info',
  'success',
  'warning',
  'danger'
];
/**
 * Stores the available stack options
 */
const stackOptions: TStackDirection[] = [
  'horizontal',
  'vertical'
];
/**
 * Stores the available stack options
 */
const colorOptions: TColor[] = [
  'primary',
  'secondary',
  'tertiary',
  'support-1',
  'support-2',
  'support-3',
  'info',
  'success',
  'warning',
  'danger',
  'black',
  'white',
  'grey',
  'base',
  'invert'
];

//METHODS
/**
 * Removes paramaters that needs to be excluded from stories
 * 
 * @param params - A list of prop names as strings
 * 
 * @returns - The storybook controls exclude property with all of the prop names
 */
const excludedParams = ( params: string[] ): {
  controls: { exclude: string[] }
} => {
  return {
    controls: {
      exclude: params
    }
  }
}

// EXPORTS
export {
  // Variables
  colorOptions,
  shadeOptions,
  sizeOptions,
  stackOptions,
  stateOptions,
  uiVariantOptions,

  // Methods
  excludedParams
};
