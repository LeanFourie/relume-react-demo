// IMPORTS
import {
  TSize,
  TSizeExtended
} from '@relume-demo/utils';

// TYPES
/**
* Sets the props required for the component
*/
type TWindowContext = IWindowContext
/**
 * Sets the available device sizes
 */
type TDevice = Exclude<
  `${ TDeviceType } ${ TSize }`,
  'mobile md' | 'tablet sm' | 'tablet lg'
>;
/**
 * Sets the available device types
 */
type TDeviceType = 'mobile' | 'tablet' | 'desktop';

// INTERFACES
/**
* Sets the default props required for the component
*/
interface IWindowContext {
  /**
   * Stores the list of breakpoints
   */
  breakpoints: {
    [ key in TSizeExtended ]: number
  };
  /**
   * Stores the current device size
   */
  device: TDevice;
  /**
   * Stores the current window size
   */
  windowSize: number;
}

// EXPORTS
export type { TWindowContext };
