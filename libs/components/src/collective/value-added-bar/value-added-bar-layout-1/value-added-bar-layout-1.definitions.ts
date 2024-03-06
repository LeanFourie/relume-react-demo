// IMPORTS
import type { TIconProps } from '../../../';

// TYPES
type TValueAddedBarLayout1Props = IValueAddedBarLayout1;

// INTERFACES
interface IValueAddedBarLayout1 {
  icon: Exclude< TIconProps, 'className' >;
  message: string;
  onSubmit: ( emailAddress: string ) => void;
  title: string;

  isCondensed?: boolean;
}

// EXPORTS
export type { TValueAddedBarLayout1Props };
