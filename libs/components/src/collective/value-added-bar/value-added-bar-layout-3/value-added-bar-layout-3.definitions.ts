// IMPORTS
import type { ISocialLink } from '@relume-demo/utils';
import type { TIconProps } from '../../../';

// TYPES
type TValueAddedBarLayout3Props = IValueAddedBarLayout3;

// INTERFACES
interface IValueAddedBarLayout3 {
  icon: Exclude< TIconProps, 'className' >;
  message: string;
  socialLinks: ISocialLink[];
  title: string;

  isCondensed?: boolean;
}

// EXPORTS
export type { TValueAddedBarLayout3Props };
