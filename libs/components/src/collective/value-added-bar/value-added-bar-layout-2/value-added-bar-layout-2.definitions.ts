// IMPORTS
import type {
  TButtonProps,
  TIconProps
} from '../../../';

// TYPES
type TValueAddedBarLayout2Props = IValueAddedBarLayout2;

// INTERFACES
interface IValueAddedBarLayout2 {
  actions: TButtonProps[];
  icon: Exclude< TIconProps, 'className' >;
  message: string;
  title: string;

  isCondensed?: boolean;
}

// EXPORTS
export type { TValueAddedBarLayout2Props };
